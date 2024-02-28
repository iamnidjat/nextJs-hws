import React from "react";
import Navbar from "../navbar";

const Car = ({ car }: any) => {
  return (
    <div>
      <Navbar />
      <div>Car:</div>
      <ul>
        <div>
          Make: {car.make} - Model: {car.model} - Year: {car.year.toString()}
        </div>
      </ul>
    </div>
  );
};

export default Car;

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:4000/cars`);
  const data = await res.json();
  const paths = data.map((car: any) => {
    return {
      params: {
        carId: car.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: any) {
  const res = await fetch(`http://localhost:4000/cars/${context.params.carId}`);
  const data = await res.json();
  return {
    props: {
      car: data,
    },
  };
}
