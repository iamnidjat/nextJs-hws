import type { NextApiRequest, NextApiResponse } from "next";
import { events } from "../../../../db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else if (req.method === "POST") {
    const { newEvent } = req.body;
    const fullEvent = {
      id: `${Date.now()}`,
      type: newEvent,
    };

    events.push(fullEvent);

    res.status(201).json(fullEvent);
  }
}