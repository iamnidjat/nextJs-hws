import type { NextApiRequest, NextApiResponse } from "next";
import { todos } from "../../../../db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { params } = req.query;
  console.log("params", params);
  return res.status(200).json(todos);
}
