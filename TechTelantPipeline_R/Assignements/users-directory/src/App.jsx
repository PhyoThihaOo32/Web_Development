import React, { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./UserCard";

export default function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => console.log("page loaded"), []);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id}></UserCard>
      ))}
    </div>
  );
}
