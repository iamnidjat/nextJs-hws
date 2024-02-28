import { NextPageContext } from "next";
import React from "react";

const TodoDetails = ({ todos }: any) => {
  return (
    <div>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          <div>Title: {todo.title}</div>
          <div>Description: {todo.description}</div>
          <div>Category: {todo.category}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoDetails;

export async function getServerSideProps(context: any) {
  const { params, req, res } = context;

  const { category } = params;

  res?.setHeader("Set-Cookie", [`category=${category}`]);

  const response = await fetch(
    `http://localhost:4000/todos?category=${category}`
  );

  const data = await response.json();

  return {
    props: {
      todos: data,
      category,
    },
    // revalidate: 20,
  };
}
