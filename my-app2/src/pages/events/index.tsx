import React from "react";
import { useRouter } from "next/router";

export const events = [
  { id: "1", title: "Event 1" },
  { id: "2", title: "Event 2" },
  { id: "3", title: "Event 3" },
];

const Events = () => {
  const router = useRouter();
  const toAnotherPage = () => {
    router.push('/anotherPage');
  }

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <div>Event title: {event.title}</div>
          </li>
        ))}
      </ul>
      <input type='button' onClick={toAnotherPage} value='To another page!'/>
    </div>
  );
};

export default Events;
