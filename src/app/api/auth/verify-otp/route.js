import { connectToDatabase } from "../../../../lib/dbConnect";
import Otp from "../../../../models/Otp";
import jwt from "jsonwebtoken";
import User from "../../../../models/User";

export async function POST(req) {
  await connectToDatabase();
  
  try {
    const { email, otp } = await req.json();

    // Validate OTP format
    if (!/^\d{6}$/.test(otp)) {
      return Response.json(
        { success: false, message: "Invalid OTP format" },
        { status: 400 }
      );
    }

    // Find matching OTP record
    const otpRecord = await Otp.findOne({ 
      email,
      code: otp,
      expiresAt: { $gt: Date.now() }
    });

    if (!otpRecord) {
      return Response.json(
        { success: false, message: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // Get user and check verification status
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const wasPreviouslyVerified = user.isVerified;

    // Update user verification status
    await User.updateOne(
      { email },
      { $set: { isVerified: true } }
    );

    // Delete OTP after verification
    await Otp.deleteOne({ _id: otpRecord._id });

    // Generate reset token only for password resets (already verified users)
    let resetToken;
    if (wasPreviouslyVerified) {
      resetToken = jwt.sign(
        { email, purpose: "password_reset" },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );
    }

    return Response.json({
      success: true,
      message: "OTP verified successfully",
      ...(wasPreviouslyVerified && { resetToken }) // Only include if password reset
    });
    
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}