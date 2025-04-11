import { connectToDatabase } from "../../../../lib/dbConnect";
import User from "../../../../models/User";
import jwt from 'jsonwebtoken';

export async function POST(req) {
  await connectToDatabase();
  
  try {
    const { resetToken, newPassword, confirmPassword } = await req.json();

    // Verify reset token
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
    const email = decoded.email;

    // Validate password match
    if (newPassword !== confirmPassword) {
      return Response.json(
        { success: false, message: "Passwords do not match" },
        { status: 400 }
      );
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Update password (will be hashed by pre-save hook)
    user.password = newPassword;
    await user.save();

    return Response.json(
      { success: true, message: "Password reset successfully" }
    );
    
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return Response.json(
        { success: false, message: "Reset session expired" },
        { status: 401 }
      );
    }
    if (error.name === 'JsonWebTokenError') {
      return Response.json(
        { success: false, message: "Invalid reset token" },
        { status: 401 }
      );
    }
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}