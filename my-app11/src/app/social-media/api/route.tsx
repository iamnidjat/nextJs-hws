import  postData  from "../../data/postData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(postData, { status: 200 });
}

export async function POST(req: Request) {
  const { newTitle, newDesc } = await req.json();
  const fullPost = {
    id: `${Date.now()}`,
    title: newTitle,
    description: newDesc,
  };

  postData.push(fullPost);

  console.log("postData", postData);

  return NextResponse.json(fullPost, { status: 201 });
}