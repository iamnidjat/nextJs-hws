"use client";
import React from "react";
import goodsData from "@/app/data/goodsData";
import Card from "../components/Card";
import styled from "styled-components";

const CardPage = () => {
  return (
    <MainContainer>
      {goodsData.map((item: any) => (
        <Card
          isNew={item.isNew}
          title={item.title}
          price={item.price}
          imgSrc={item.imgSrc}
        ></Card>
      ))}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export default CardPage;
