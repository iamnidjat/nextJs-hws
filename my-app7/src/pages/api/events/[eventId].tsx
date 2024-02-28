import type { NextApiRequest, NextApiResponse } from "next";
import { events } from "../../../../db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { eventId } = req.query;

    const eventIndex = events.findIndex((event: any) => {
      return event.id == eventId;
    });

    if (eventIndex !== -1) {
      events.splice(eventIndex, 1);

      res.status(204).json(events[eventIndex]);
    } else {
      res.status(404).json({ error: "Event not found" });
    }
  }
}
