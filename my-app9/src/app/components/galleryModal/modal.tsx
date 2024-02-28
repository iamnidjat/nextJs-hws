"use client";
import React, { useEffect } from "react";
import styles from "./modal.module.css";
import Image from "next/image";

const Modal = ({ isOpen, onClose, item }: any) => {
  return (
    <div>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
            <div>
              <div>Title: {item.title}</div>
              <div>Description: {item.description}</div>
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
