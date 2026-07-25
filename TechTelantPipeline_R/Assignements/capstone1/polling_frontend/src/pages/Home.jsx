import { useEffect, useState } from "react";
import AddPollCard from "./../components/AddPollCard";
import { useNavigate } from "react-router-dom";

const API_LOCAl_URL = "http://localhost:8000";

function Home() {
  const [polls, setPolls] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  async function addPoll(newPoll) {
    const response = await fetch(API_LOCAl_URL + `/api/polls`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPoll),
    });
    const data = await response.json();
    setPolls([...polls, data]);
  }

  return (
    <div>
      <AddPollCard addPoll={addPoll}></AddPollCard>
      <button onClick={() => navigate("/polls")}>See Polls</button>
    </div>
  );
}

export default Home;
