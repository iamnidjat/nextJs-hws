import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({title: 'Hello from Get method!'})
}