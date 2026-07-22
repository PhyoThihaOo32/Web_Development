import { useState, useEffect } from "react";
import { useParams } from "react-router";
import OptionCard from "../components/OptionCard";

function PollDetails() {
  const [options, setOptions] = useState([]);
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const API_URL = "http://localhost:8000";

  useEffect(() => {
    const url = API_URL + `/api/polls/${Number(id)}`;
    async function getOptions() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to Get Songs.");
        const data = await response.json();
        setOptions([...data.Options]);
        setVotes([...data.Options.Votes]);
      } catch (error) {
        setError(error.message);
      }
    }

    getOptions();
  }, []);

  async function addVote(optionId) {
    const url = API_URL + `/api/votes`;
    const newVote = {
      optionId,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVote),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h1>Poll Details</h1>
      <div>
        {options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            addVote={() => addVote(option.id)}
          ></OptionCard>
        ))}
      </div>
    </div>
  );
}

export default PollDetails;
