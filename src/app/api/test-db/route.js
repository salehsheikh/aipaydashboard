import { getCollection } from "../../../lib/dbConnect";

export async function GET() {
  try {
    const usersCollection = await getCollection("users");
    const users = await usersCollection.find().limit(5).toArray();
    
    return Response.json({ 
      success: true, 
      users: users.map(user => ({
        ...user,
        _id: user._id.toString() // Convert ObjectId to string
      }))
    });
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}