import React, { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => console.log("page loaded"), []);
  // [] array is the second arg passed in useEffect - which tell react 'only run one time'.

  useEffect(() => {
    // async means the function is allowed to pause and wait for
    // something, like an answer from the internet
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        ); // await mean - wait here for the answer before moving to the next line

        if (!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();
        setUsers(data);
        //fetch() can throw an error automatically
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  async function handleUserClick(id) {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(name) {
    // console.log(name);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    // console.log(users);
    const updatedUsers = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
    setUsers(updatedUsers);
  }

  return (
    <div>
      <SearchBar users={users} search={handleSearch}></SearchBar>
      {loading && <p>Loading Users...</p>}
      {error && <p>{error.message}</p>}

      <UserList userLists={users} onUserClick={handleUserClick}></UserList>

      <hr></hr>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * && means “and”, but in React JSX it is often used
 * for conditional rendering.
 * If loading is true, show <p>Loading Users...</p>
 * If loading is false, show nothing
 *
 * true && something which is true  → something
 * false && something → false - already false
 */

/**
 * Use Effect is a React Hook that lets you run code
 * after React renders the component.
 */
