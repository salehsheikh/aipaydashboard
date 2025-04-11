
import { connectToDatabase } from "../../../../lib/dbConnect";
import User from "../../../../models/User";
import Otp from "../../../../models/Otp"; 
import { generateOTP } from "../../../../utils/helper";
import { sendOtpEmail } from "../../../../utils/email";


export async function POST(req) {
  await connectToDatabase();
  
  try {
    const { username, email, password } = await req.json();
    
    // Check existing user
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return Response.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    // Create new user (without OTP fields)
    const user = await User.create({ username, email, password , isVerified: false });
   
    if (!username || !email || !password) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }
    // Generate and save OTP
    const otp = generateOTP();
    await Otp.create({
      email,
      code: otp,
      expiresAt: Date.now() + 300000 // 5 minutes
    });

    // Send verification email
    await sendOtpEmail(email, otp);
    
    return Response.json(
      { success: true, message: "User created successfully,  Verify OTP to activate your account." },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}