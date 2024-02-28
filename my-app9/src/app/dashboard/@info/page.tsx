import Link from "next/link";
import React from "react";

const InfoDashboard = async () => {
  // if (true) {
  //   // for example
  //   throw new Error();
  // }

  const films = await fetch("https://swapi.tech/api/films").then((res) =>
    console.log(res)
  );
  return (
    <div>
      <Link href="/dashboard/additional-info">Go to Additional Info</Link>
      <div>InfoDashboard Page!</div>
    </div>
  );
};

export default InfoDashboard;
