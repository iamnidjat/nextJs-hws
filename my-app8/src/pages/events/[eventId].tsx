import React from "react";
import { events } from "../../../db.json";

const EventDetailPage = ({ event }: any) => {
  return (
    <div>
      <div>Event type: {event.type}</div>
    </div>
  );
};

export default EventDetailPage;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          eventId: "1",
        },
      },
      {
        params: {
          eventId: "2",
        },
      },
      {
        params: {
          eventId: "3",
        },
      },
    ],
    fallback: "blocking",
  };
};

export async function getStaticProps(context: any) {
  const { eventId } = context.params;
  const data = events.find((event: any) => event.id === eventId);

  return {
    props: {
      event: data,
    },
  };
}
