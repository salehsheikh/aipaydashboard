import { sendOtpEmail } from "../../../../utils/email";
import { connectToDatabase } from "../../../../lib/dbConnect";
import Otp from "../../../../models/Otp";
import User from "../../../../models/User";
import { generateOTP } from "../../../../utils/helper";

export async function POST(req) {
  await connectToDatabase();
  
  try {
    const { email } = await req.json();
    
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check user existence
    const user = await User.findOne({ email }).select('_id isVerified');
    if (!user) {
      return Response.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }
    if (!user.isVerified) {
      return Response.json(
        { success: false, message: "Account not verified" },
        { status: 403 }
      );
    }

    // Generate and save OTP
    const otp = generateOTP();
    await Otp.findOneAndUpdate(
      { email },
      { 
        code: otp.toString(), // Store as string
        expiresAt: Date.now() + 300000,
        attempts: 0 
      },
      { upsert: true, new: true }
    );

    // Send OTP email
    await sendOtpEmail(email, otp);

    return Response.json({
      success: true,
      message: "OTP sent to registered email"
    });

  } catch (error) {
    console.error("Forgot password error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}