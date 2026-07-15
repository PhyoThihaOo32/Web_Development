import { use, useState } from "react";

function AddCard({ addPlaylist }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // event hanlders
  // get playlist title
  function handleGetName(event) {
    setName(event.target.value);
  }

  function handleSubmit() {
    addPlaylist({ name, description });
    setName("");
    setDescription("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter playlist title"
        value={name}
        onChange={handleGetName}
      />
      <input
        type="text"
        placeholder="enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Playlist</button>
    </div>
  );
}

export default AddCard;
