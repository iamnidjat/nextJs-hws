import React, { useEffect, useState } from "react";

const Todos = () => {
  const [data, setData] = useState<any>(null);
  const [newTodo, setNewTodo] = useState<string>("");
  const [newTitle, setNewTitle] = useState<string>("");
  const [editingItemId, setEditingItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetch("/api/todos");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ newTodo }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setNewTodo("");
      await fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      await fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const updateTodo = async (id: number) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ newTitle }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setNewTitle("");
      setEditingItemId(null);
      await fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div>
      <div>Todos</div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {data?.map((todo: any) => (
        <div key={todo.id}>
          <div>
            Title: {todo.title} - Description: {todo.description} - Category:
            {todo.category}
            <input
              type="button"
              onClick={() => deleteTodo(todo.id)}
              value="DELETE"
            />
          </div>
          <div>
            {!editingItemId || editingItemId !== todo.id ? (
              <input
                type="button"
                value="EDIT"
                onClick={() => setEditingItemId(todo.id)}
              />
            ) : (
              <>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <input
                  type="button"
                  onClick={() => updateTodo(todo.id)}
                  value="UPDATE"
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;

