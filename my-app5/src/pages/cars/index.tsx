import React from "react";
import Navbar from "../navbar";

const Cars = ({ cars }: any) => {
  return (
    <div>
      <Navbar />
      <div>Cars:</div>
      <ul>
        {cars.map((car: any) => (
          <div key={car.id}>
            Make: {car.make} - Model: {car.model} - Year: {car.year.toString()}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cars;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/cars");
  const data = await res.json();
  return {
    props: {
      cars: data,
    }, 
    revalidate: 10
  };
}
