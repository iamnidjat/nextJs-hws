'use client';
import React, { useEffect, useState } from "react";

const Events = () => {
  const [data, setData] = useState<any>(null);
  const [newEvent, setNewEvent] = useState<string>("");
  const [newType, setNewType] = useState<string>("");
  const [editingEventId, setEditingEventId] = useState<number | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch("events/api");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const addEvent = async () => {
    try {
      const res = await fetch("events/api", {
        method: "POST",
        body: JSON.stringify({ newEvent }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setNewEvent("");
      await fetchEvents();
    } catch (error) {
      console.error("Error adding an event:", error);
    }
  };

  const deleteEvent = async (id: number) => {
    try {
      const res = await fetch(`events/api`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-type": "application/json",
        },
      });
      await fetchEvents();
    } catch (error) {
      console.error("Error deleting an event:", error);
    }
  };

  const updateEvent = async (id: number) => {
    try {
      const res = await fetch(`events/api`, {
        method: "PATCH",
        body: JSON.stringify({ newType, id }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setNewType("");
      setEditingEventId(null);
      await fetchEvents();
    } catch (error) {
      console.error("Error updating an event:", error);
    }
  };

  return (
    <div>
      <div>Events</div>
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
          <div>
            {!editingEventId || editingEventId !== event.id ? (
              <input
                type="button"
                value="EDIT"
                onClick={() => setEditingEventId(event.id)}
              />
            ) : (
              <>
                <input
                  type="text"
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                />
                <input
                  type="button"
                  onClick={() => updateEvent(event.id)}
                  value="UPDATE"
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
