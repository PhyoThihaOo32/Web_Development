function GuestList({ guestLists, onRemove }) {
  return (
    <>
      {guestLists.length === 0 ? (
        <p>No Guest</p>
      ) : (
        guestLists.map((guest) => (
          <div>
            <li id={guest.id}>
              {guest.name} - {guest.email}
            </li>
            <button onClick={() => onRemove(guest.id)}>Remove Guest</button>
          </div>
        ))
      )}
    </>
  );
}

export default GuestList;
