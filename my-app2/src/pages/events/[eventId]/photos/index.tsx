import { useRouter } from "next/router";
import React from "react";
import { events } from "../../index";

export const photos = [
  { id: "1", title: "Photo 1" },
  { id: "2", title: "Photo 2" },
  { id: "3", title: "Photo 3" },
];

const Photos = () => {
  const router = useRouter();
  
  const event = events.find((e: { id: any }) => e.id === router.query.eventId);

  return (
    <div>
      <div>Event: {event?.title}</div>
      <h1>Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <div>Photo title: {photo.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Photos;
