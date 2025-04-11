import { connectToDatabase } from "../../../../lib/dbConnect";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(req) {
  await connectToDatabase();
  
  try {
    const { username, password } = await req.json();
    
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return Response.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (!user.isVerified) {
      return Response.json(
        { success: false, message: "Account not verified. Please verify your OTP." },
        { status: 403 }
      );
    }

    // Check if account is locked
    if (user.accountLockedUntil && user.accountLockedUntil > Date.now()) {
      return Response.json(
        { success: false, message: "Account temporarily locked" },
        { status: 403 }
      );
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      user.failedAttempts += 1;
      
      if (user.failedAttempts >= 5) {
        user.accountLockedUntil = Date.now() + 15 * 60 * 1000;
      }
      
      await user.save();
      
      return Response.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Reset failed attempts
    user.failedAttempts = 0;
    user.accountLockedUntil = null;
    await user.save();

    // Corrected JWT token generation
    const token = jwt.sign(
      { 
        userId: user._id,
        image: user.image // Include image in payload
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Set cookie
    const serialized = serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600,
      path: "/",
    });

    return new Response(JSON.stringify({ 
      success: true, 
      user: { 
        id: user._id, 
        username: user.username,
        email: user.email,
        image: user.image
      }
    }), {
      status: 200,
      headers: { "Set-Cookie": serialized }
    });
    
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}