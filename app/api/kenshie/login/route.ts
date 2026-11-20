import { connectDB } from "@/lib/connect";
import adminModel from "@/models/adminSchema";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  try {
    if (!username || !password)
      return NextResponse.json(
        { success: false, message: "Invalid parameters" },
        { status: 400 },
      );
    await connectDB();
    const user = await adminModel.findOne({ username });
    if (!user)
      return NextResponse.json(
        { success: false, message: "Admin doesn't exist" },
        { status: 400 },
      );
    const verifyPassword = await bcrypt.compare(password, user.password);
    if(!verifyPassword) return NextResponse.json({success: false, message: "Invalid password"}, {status: 400})
    const token = jwt.sign(
      { user: user._id },
      process.env.SECRET_KEY as string,
      { expiresIn: "1d" },
    );
    const response = NextResponse.json(
      { success: true, message: "Logged in successfully" },
      { status: 200 },
    );
    response.cookies.set({
      name: "tkn",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
    });
    return response;
  } catch (error) {
    const err = error instanceof Error ? error.message : "Server Unreachable";
    return NextResponse.json({ success: false, message: err }, { status: 500 });
  }
}
