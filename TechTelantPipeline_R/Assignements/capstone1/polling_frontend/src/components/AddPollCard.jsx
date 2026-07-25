import { useState } from "react";

function AddPollCard({ addPoll }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("");
  const [options, setOptions] = useState([]);

  const newPoll = {
    title,
    description,
    options,
  };

  function addOptions() {
    setOptions([...options, { text: option }]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addPoll(newPoll);
  }

  console.log(title);
  console.log(description);
  console.log(option);
  console.log(options);
  console.log(newPoll);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter New Poll For More Fun</label>
        <hr />
        <input
          type="text"
          placeholder="Enter Poll Tilte"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Poll Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <input
            type="text"
            placeholder="Enter Options"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          />
          <button type="button" onClick={addOptions}>
            Add Options?
          </button>
        </div>
        <button type="submit">Sumit Poll</button>
      </form>
    </div>
  );
}

export default AddPollCard;
