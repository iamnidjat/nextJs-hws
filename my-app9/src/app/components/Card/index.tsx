import React from "react";
import {
  Container,
  Title,
  Image,
  Price,
} from "./styles";

const Card = ({title, price, imgSrc, isNew}: {
    title: string, 
    price: number, 
    imgSrc: string,
    isNew: boolean
}) => {
  return (
    <Container isNew={isNew}>
        <Title>Title: {title}</Title>
        <Price>Price: {price}</Price>
        <Image src={imgSrc}></Image>
    </Container>
  );
};

export default Card;
