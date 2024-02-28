import React, { useEffect, useState } from "react";
import { events } from "../../../db.json";

const Events = ({ events }: any) => {
  const addEvent = async () => {
    alert("Заглушка");
  };

  const deleteEvent = async (id: number) => {
    alert("Заглушка");
  };

  return (
    <div>
      <div>Todos</div>
      <input type="text" />
      <button onClick={addEvent}>Add</button>

      {events?.map((event: any) => (
        <div key={event.id}>
          <div>
            Type: {event.type}
            <input
              type="button"
              onClick={() => deleteEvent(event.id)}
              value="DELETE"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;

export async function getStaticProps() {
  return {
    props: {
      events: events,
    },
  };
}
