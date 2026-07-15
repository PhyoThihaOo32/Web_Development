import { useState } from "react";

function AddPlaylist({ addPlaylist }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    addPlaylist({ name, description });
    setName("");
    setDescription("");
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Playlist</button>
    </div>
  );
}

export default AddPlaylist;
