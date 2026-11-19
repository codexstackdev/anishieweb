import { connectDB } from "@/lib/connect";
import appModel from "@/models/appVerSchema";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

// export async function POST(req:NextRequest){
//     const { url, version } = await req.json();
//     try {
//         if(!url || !version) return NextResponse.json({success: false, message: "Invalid parameter"}, {status: 500});
//         await connectDB();
//         const newApp = new appModel({ url, version });
//         await newApp.save();
//         return NextResponse.json({success: true, message: "Ok"});
//     } catch (error) {
//         const err = error instanceof Error ? error.message : "Server Unreachable";
//         return NextResponse.json({success: false, message: err}, {status: 500})
//     }
// }

export async function GET() {
  try {
    await connectDB();
    const ver = await appModel.findById("6afede7da545e2ead5734a0e");
    return NextResponse.json({ success: true, ver }, { status: 200 });
  } catch (error) {
    const err = error instanceof Error ? error.message : "Server Unreachable";
    return NextResponse.json({ success: false, message: err }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { url, version } = await req.json();
  const token = req.cookies.get("tkn")?.value;
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);
  try {
    if (!url || !version)
      return NextResponse.json(
        { success: false, message: "Invalid parameters" },
        { status: 400 },
      );
      const { payload } = await jwtVerify(token as string, secret);
      if(payload.user !== "6afecd9ca545e2ead5734a0d") return NextResponse.json({success: false, message: "Unauthorized"}, {status: 401});
    await connectDB();
    const update = await appModel.findByIdAndUpdate(
      "6afede7da545e2ead5734a0e",
      { $set: { url, version } },
      { returnDocument: "after" },
    );
    return NextResponse.json({success: true, message: "Update applied successfully"}, {status: 200});
  } catch (error) {
    const err = error instanceof Error ? error.message : "Server Unreachable";
    return NextResponse.json({ success: false, message: err }, { status: 500 });
  }
}
