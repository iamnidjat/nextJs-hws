"use client";
import React from "react";
import galleryData from "../data/galleryData";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../components/customButton/customButton";
import { styled } from "styled-components";
import { Button } from "../components/customButton/customButtonStyles";

const GalleryPage = () => {
  return (
    <div>
      {galleryData.map((item: any) => (
        <div key={item.id}>
          <div>Title: {item.title}</div>
          <div>Description: {item.description}</div>
          <Link href={`/gallery-new/${item.id}`}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={300}
              height={200}
            />
          </Link>
          {/* <CustomButton></CustomButton>
          <NewButton></NewButton> */}
          <Button variant="outlined">Press me!</Button>
          <Button variant="disabled">Press me!</Button>
          <NewButton>Press me!</NewButton>
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;

const NewButton = styled(Button)`
  background-color: blue;
  padding: 10px;
`;
