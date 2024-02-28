import React from "react";

const MediaDashboard = async () => {
  const films = await fetch("https://swapi.tech/api/films").then((res) =>
    console.log(res)
  );
  return <div>MediaDashboard Page!</div>;
};

export default MediaDashboard;
