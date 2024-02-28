import React from "react";

const Todos = ({ todos }: any) => {
  return (
    <div>
      <div>Todos</div>
      <ul>
        {todos.map((todo: any) => (
          <div key={todo.id}>
            Title: {todo.title} - Completed: {todo.completed.toString()}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}
