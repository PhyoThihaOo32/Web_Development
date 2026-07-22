function OptionCard({ option, addVote }) {
  return <button onClick={addVote}>{option.text}</button>;
}

export default OptionCard;
