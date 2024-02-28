import React from "react";

const PostLayout = ({
  children,
  post,
}: {
  children: React.ReactNode;
  post: React.ReactNode;
}) => {
  return (
    <div>
      <div>{post}</div>
      <div>{children}</div>
    </div>
  );
};

export default PostLayout;
