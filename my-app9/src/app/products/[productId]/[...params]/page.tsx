import { notFound } from "next/navigation";
import React from "react";

const Reviews = ({ params }: any) => {
  console.log("params", params);
  if (params.params.length > 3) {
    notFound();
  }
  return <div>Reviews Page!</div>;
};

export default Reviews;
