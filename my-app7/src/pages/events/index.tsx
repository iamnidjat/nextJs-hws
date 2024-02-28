import React, { useEffect, useState } from "react";

const Events = () => {
  const [data, setData] = useState<any>(null);
  const [newEvent, setNewEvent] = useState<string>("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const addEvent = async () => {
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        body: JSON.stringify({ newEvent }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setNewEvent("");
      await fetchEvents();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const deleteEvent = async (id: number) => {
    try {
      const res = await fetch(`/api/events/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      await fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div>
      <div>Todos</div>
      <input
        type="text"
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
      />
      <button onClick={addEvent}>Add</button>

      {data?.map((event: any) => (
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
