import React from "react";

const WidgetDashboard = async () => {
  const films = await fetch("https://swapi.tech/api/films").then((res) =>
    console.log(res)
  );
  return <div>WidgetDashboard Page!</div>;
};

export default WidgetDashboard;
