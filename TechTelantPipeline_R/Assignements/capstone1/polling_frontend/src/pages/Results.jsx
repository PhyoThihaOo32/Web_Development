import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Results() {
  const [poll, setPoll] = useState({});
  const [options, setOptions] = useState([]);
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const API_URL = "http://localhost:8000";

  useEffect(() => {
    const url = API_URL + `/api/polls/${id}`;
    async function getResults() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to Load the results.");
        const data = await response.json();
        // set poll
        const pollObj = {
          title: data.title,
          description: data.description,
        };
        setPoll(pollObj);
        // set options
        const optionsArr = data.Options;
        setOptions(optionsArr);
        // set Votes
        const voteObj = data.Options.Votes;
        setVotes(voteObj);
      } catch (error) {
        setError(error.message);
      }
    }
    getResults();
  }, []);

  return (
    <div>
      <h1>Results Page</h1>
      <h2>Poll Title: {poll.title}</h2>
      <p>Poll Description: {poll.description}</p>
      <h3>Here are the Options and Votes</h3>
      {options.map((option) => (
        <div key={option.id}>
          <li>
            {option.text} Vote: {option.Votes.length}
          </li>
        </div>
      ))}
    </div>
  );
}

export default Results;
