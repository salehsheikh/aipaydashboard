import { serialize } from "cookie";

export async function POST() {
  const serialized = serialize("authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0),
    path: "/",
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Set-Cookie": serialized }
  });
}