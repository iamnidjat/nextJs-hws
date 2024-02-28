"use client";
import Modal from "@/app/components/postModal/modal";
import React, { useState } from "react";
import postData from "@/app/data/postData";

const PostPage = ({ params }: any) => {
  const post = postData.find((item: any) => {
    console.log("item", item);
    return item.id === params.postId;
  });

  console.log("params", params);

  console.log("post", post);

  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal item={post} isOpen={isModalOpen} onClose={closeModal}></Modal>
    </div>
  );
};

export default PostPage;
