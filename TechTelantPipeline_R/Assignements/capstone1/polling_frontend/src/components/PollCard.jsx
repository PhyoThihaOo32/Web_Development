import Home from "./../pages/Home";
import { useNavigate } from "react-router-dom";

function PollCard({ poll }) {
  const navigate = useNavigate();
  return (
    <div>
      <li key={poll.id}>
        {poll.title} {poll.description}
      </li>
      <button onClick={() => navigate(`/polls/${poll.id}`)}>See Polls</button>
    </div>
  );
}

export default PollCard;
