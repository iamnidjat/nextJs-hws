"use client";
import React, { useEffect, useState } from "react";

const Users = () => {
  // if (true) { // for example
  //   throw new Error("aaa");
  // }

  const [data, setData] = useState<any>(null);
  const [newUser, setNewUser] = useState<string>("");
  const [newName, setNewName] = useState<string>("");
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("users/api");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUser = async () => {
    try {
      const res = await fetch("users/api", {
        method: "POST",
        body: JSON.stringify({ newUser }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setNewUser("");
      await fetchUsers();
    } catch (error) {
      console.error("Error adding a user:", error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const res = await fetch(`users/api`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-type": "application/json",
        },
      });
      await fetchUsers();
    } catch (error) {
      console.error("Error deleting a user:", error);
    }
  };

  const updateUser = async (id: number) => {
    try {
      const res = await fetch(`users/api`, {
        method: "PATCH",
        body: JSON.stringify({ newName, id }),
        headers: {
          "Content-type": "application/json",
        },
      });
      setNewName("");
      setEditingUserId(null);
      await fetchUsers();
    } catch (error) {
      console.error("Error updating a user:", error);
    }
  };

  return (
    <div>
      <div>Users</div>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={addUser}>Add</button>

      {data?.map((user: any) => (
        <div key={user.id}>
          <div>
            Name: {user.name} - Username: {user.username} - Email: {user.email}
            <input
              type="button"
              onClick={() => deleteUser(user.id)}
              value="DELETE"
            />
          </div>
          <div>
            {!editingUserId || editingUserId !== user.id ? (
              <input
                type="button"
                value="EDIT"
                onClick={() => setEditingUserId(user.id)}
              />
            ) : (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <input
                  type="button"
                  onClick={() => updateUser(user.id)}
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

export default Users;
