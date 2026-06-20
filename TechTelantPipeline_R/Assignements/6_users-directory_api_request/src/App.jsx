import React, { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./UserCard";

export default function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => console.log("page loaded"), []);
  // [] array is the second arg passed in useEffect - which tell react 'only run one time'.

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      ); // await mean - wait here for the answer before moving to the next line
      const data = await response.json();
      setUsers(data);
      // console.log(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user}></UserCard>
      ))}
    </div>
  );
}
