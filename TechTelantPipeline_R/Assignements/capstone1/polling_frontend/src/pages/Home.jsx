import { useEffect, useState } from "react";
import PollCard from "./../components/PollCard";

const API_LOCAl_URL = "http://localhost:8000";

function Home() {
  const [polls, setPolls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPolls() {
      try {
        const response = await fetch(API_LOCAl_URL + "/api/polls");
        if (!response.ok) throw new Error("Failed to Load the Polls.");
        const data = await response.json();
        setPolls([...data]);
      } catch (error) {
        setError(error.message);
      }
    }
    loadPolls();
  });

  return (
    <div>
      {polls.map((poll) => (
        <PollCard key={poll.id} poll={poll}></PollCard>
      ))}
    </div>
  );
}

export default Home;
