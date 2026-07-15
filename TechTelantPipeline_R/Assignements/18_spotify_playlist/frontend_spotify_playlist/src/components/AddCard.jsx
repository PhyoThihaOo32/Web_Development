function AddCard({
  handleGetName,
  handleGetDescription,
  addPlaylist,
  name,
  description,
}) {
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
        onChange={handleGetDescription}
      />
      <button onClick={addPlaylist}>Add Playlist</button>
    </div>
  );
}

export default AddCard;
