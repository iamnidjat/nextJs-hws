import { NextPageContext } from "next";
import React from "react";
import { events } from "../index";

const Event = ({ event }: any) => {
  return <div>Event: {event?.title}</div>;
};

Event.getInitialProps = async (context: NextPageContext) => {
  const { query } = context;

  const eventId = query.eventId;

  const event = events.find((e: { id: any }) => e.id === eventId);

  return { event };
};

export default Event;
