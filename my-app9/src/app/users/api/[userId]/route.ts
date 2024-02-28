import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
  return NextResponse.json({title: "Hello from get method!", id: `${context.params.userId}`}, { status: 200 });
}
