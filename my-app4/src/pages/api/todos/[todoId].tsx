import type { NextApiRequest, NextApiResponse } from "next";
import { todos } from "../../../../db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { todoId } = req.query;
    const todoIndex = todos.findIndex((todo: any) => {
      todo.id === todoId;
    });

    todos.splice(todoIndex, 1);

    res.status(204).json(todos[todoIndex]);
  } else if (req.method === "PATCH" || req.method === "PUT") {
    const { newTitle } = req.body;
    const { todoId } = req.query;

    const todoIndex = todos.findIndex((todo: any) => todo.id === todoId);

    if (todoIndex !== -1) {
      todos[todoIndex].title = newTitle;

      res.status(200).json(todos[todoIndex]);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  }
}
