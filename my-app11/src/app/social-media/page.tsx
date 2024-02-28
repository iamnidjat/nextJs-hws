"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const MainPage = () => {
  const [data, setData] = useState<any>(null);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDesc, setNewDesc] = useState<string>("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("social-media/api");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const addPost = async () => {
    try {
      const res = await fetch("social-media/api", {
        method: "POST",
        body: JSON.stringify({ newTitle, newDesc }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setNewTitle("");
      setNewDesc("");
      await fetchPosts();
    } catch (error) {
      console.error("Error adding a post:", error);
    }
  };
  return (
    <div>
      {data?.map((item: any) => (
        <div key={item.id} style={{marginBottom: 10}}>
          <div>Title: {item.title}</div>
          <div>Description: {item.description}</div>
          <Link href={`/social-media/${item.id}`}>
            <button>Press here to get information about the post!</button>
          </Link>
        </div>
      ))}
      <div style={{marginBottom: 10}}>
        <input
          type="text"
          placeholder="Title..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Description..."
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        ></input>
        <button onClick={addPost}>Create a new post!</button>
      </div>
    </div>
  );
};

export default MainPage;
