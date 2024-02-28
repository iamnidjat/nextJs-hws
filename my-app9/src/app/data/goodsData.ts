export type GoodsItem = {
  id: string;
  title: string;
  price: number;
  imgSrc: string;
  isNew: boolean;
};

const goodsData: GoodsItem[] = [
  {
    id: "1",
    title: "First",
    price: 10,
    imgSrc: "https://picsum.photos/seed/picsum/200/300",
    isNew: true,
  },
  {
    id: "2",
    title: "Second",
    price: 20,
    imgSrc: "https://picsum.photos/id/237/200/300",
    isNew: false,
  },
  {
    id: "3",
    title: "Third",
    price: 30,
    imgSrc: "https://picsum.photos/200/300?grayscale",
    isNew: true,
  },
];

export default goodsData;
