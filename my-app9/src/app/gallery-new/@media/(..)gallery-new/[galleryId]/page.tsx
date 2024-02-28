"use client";
import Modal from "@/app/components/galleryModal/modal";
import React, { useState } from "react";
import galleryData, { GalleryItem } from "@/app/data/galleryData";

const MediaPage = ({ params }: any) => {
  const galleryImage = galleryData.find((item: any) => {
    return item.id === params.galleryId;
  });

  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        item={galleryImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      ></Modal>
    </div>
  );
};

export default MediaPage;
