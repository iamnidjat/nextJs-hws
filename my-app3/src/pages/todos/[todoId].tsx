import { NextPageContext } from "next";
import React from "react";

const TodoId = ({ todo }: any) => {
  // const router = useRouter();

  // if (router.isFallback)
  // {
  //   return (<div>Loading...</div>)
  // } when fallback: true

  return (
    <div>
      <div>Title: {todo.title}</div>
      <div>Completed: {todo.completed.toString()}</div>
    </div>
  );
};

export default TodoId;

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();
  const paths = data.map((todo: any) => {
    return {
      params: {
        todoId: todo.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: NextPageContext) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${context.params.todoId}`
  );
  const data = await res.json();
  return {
    props: {
      todo: data,
    },
  };
}
