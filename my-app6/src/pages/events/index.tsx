import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:4000/events");
  const data = await res.json();
  return data;
};

const Event = ({ event }: any) => {
  const router = useRouter();
  const [events, setEvents] = useState(event);
  const { data, error, isLoading } = useSWR("/events", fetcher, {
   // refreshInterval: 10000,
  });

  useEffect(() => {
    if (!data) return;
    setEvents(data);
  }, [data]);

  const fetchTypeHoliday = async () => {
    const res = await fetch("http://localhost:4000/events?type=holiday");
    const data = await res.json();
    setEvents(data);
    router.push("/events?type=holiday", undefined, { shallow: true });
  };

  const fetchTypeCharity = async () => {
    const res = await fetch("http://localhost:4000/events?type=charity");
    const data = await res.json();
    setEvents(data);
    router.push("/events?type=charity", undefined, { shallow: true });
  };

  const fetchTypeNetworking = async () => {
    const res = await fetch("http://localhost:4000/events?type=networking");
    const data = await res.json();
    setEvents(data);
    router.push("/events?type=networking", undefined, { shallow: true });
  };

  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <div>загрузка...</div>;

  return (
    <div>
      <div style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <button onClick={fetchTypeHoliday}>Holiday</button>
        <button onClick={fetchTypeCharity}>Charity</button>
        <button onClick={fetchTypeNetworking}>Networking</button>
      </div>
      {events.map((event: any) => (
        <div key={event.id}>Type: {event.type}</div>
      ))}
    </div>
  );
};

export default Event;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/events");
  const data = await res.json();
  return {
    props: {
      event: data,
    },
  };
}