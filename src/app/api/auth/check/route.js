import jwt from "jsonwebtoken";
import { connectToDatabase } from "../../../../lib/dbConnect";
import User from "../../../../models/User";

export async function GET(req) {
  await connectToDatabase();
  
  try {
    const token = req.cookies.get("authToken")?.value;
    
    if (!token) {
      return Response.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return Response.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return Response.json({ success: true, user });
    
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}