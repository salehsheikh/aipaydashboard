
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable not found!");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => {
      console.log("MongoDB connected successfully!");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export async function getCollection(collectionName) {
  const { conn } = await connectToDatabase();
  return conn.connection.db.collection(collectionName);
}