import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.SECRET_KEY);

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("tkn")?.value;

  if (!token) return deny(request);

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    return deny(request);
  }
}

function deny(request: NextRequest) {
  const url = new URL("/", request.url);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/asdsacna", "/asdsacna/:path*"],
};