import styled from "styled-components";

interface IContainer {
    isNew: boolean;
}

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px;
  border: ${(props: any) =>
    props.isNew === true ? "2px solid green" : "2px solid cepie"};
`;

const Title = styled.div`
  font-size: "18px";
  font-weight: "bold";
  color: black;
`;

const Price = styled.div`
  font-size: "14px";
  font-weight: "bold";
  color: black;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const UnorderedList = styled.ul`
  list-style-type: "none";
  margin: 0;
  padding: 0;
`;

const ListElement = styled.li`
  margin-bottom: "16px";
  padding: "8px";
  border: "1px solid #ccc";
  border-radius: "4px";
`;



export { Title, Container, UnorderedList, ListElement, Image, Price };