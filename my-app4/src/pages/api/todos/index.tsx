import type { NextApiRequest, NextApiResponse } from "next";
import { todos } from "../../../../db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { newTodo } = req.body;
    const fullTodo = {
      id: `${Date.now()}`,
      title: newTodo,
      description: "empty",
      category: "empty",
    };

    todos.push(fullTodo);

    res.status(201).json(fullTodo);
  }
}
