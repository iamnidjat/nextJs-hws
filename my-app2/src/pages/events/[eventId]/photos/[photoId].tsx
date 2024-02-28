import { useRouter } from "next/router";
import React from "react";
import { photos } from "./index";
import { events } from "../../index";

const Photo = () => {
  const router = useRouter();

  const photo = photos.find((e: { id: any }) => e.id === router.query.photoId);

  const event = events.find((e: { id: any }) => e.id === router.query.eventId);

  return (
    <div>
      <div>Event: {event?.title}</div>
      <div>Photo title: {photo?.title}</div>
    </div>
  );
};

export default Photo;
