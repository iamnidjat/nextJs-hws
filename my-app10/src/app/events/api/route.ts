import type { NextApiRequest, NextApiResponse } from "next";
import { events } from "../../../../db.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(events, { status: 200 });
}

export async function POST(req: Request, res: NextApiResponse) {
  const { newEvent } = await req.json();
  const fullEvent = {
    id: `${Date.now()}`,
    type: newEvent
  };

  events.push(fullEvent);

  return NextResponse.json(fullEvent, { status: 201 });
}

export async function DELETE(req: Request, res: NextApiResponse) {
  const { id } = await req.json();

  const eventIndex = events.findIndex((event: any) => {
    return event.id == parseInt(id);
  });

  if (eventIndex !== -1) {
    events.splice(eventIndex, 1);

    return NextResponse.json(events[eventIndex], { status: 204 }); //
  } else {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }
}

export async function PATCH(req: Request, res: NextApiResponse) {
  const { newType, id } = await req.json();

  const eventIndex = events.findIndex((event: any) => event.id == parseInt(id));

  if (eventIndex !== -1) {
    events[eventIndex].type = newType;

    return NextResponse.json(events[eventIndex], { status: 200 });
  } else {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }
}
