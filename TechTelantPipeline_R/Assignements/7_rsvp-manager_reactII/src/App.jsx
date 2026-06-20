import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // step 2.1 - state variable email start with empty string
  const [guests, setGuests] = useState([]); // state variable guests - initialized with empty array

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newGuest = {
      id: Date.now(),
      name: name,
      email: email,
    };

    setGuests([...guests, newGuest]); // create a new array with everything in guests followed by newGuest
    setName("");
    setEmail("");
  };

  const guestLists = guests.map((guest) => (
    <li key={guest.id}>
      {guest.name} {guest.email}
      <button onClick={() => removeGuest(guest.id)}>Romove Guest</button>
    </li>
  ));

  function removeGuest(id) {
    const updatedGuest = guests.filter((guest) => guest.id !== id);
    setGuests(updatedGuest);
  }

  return (
    // step 2.2
    <div>
      <h1>Company Picnic RSVP - répondez s'il vous plaît </h1>
      <form action="">
        <label>Name </label>
        <input id="name" type="text" onChange={handleNameChange} value={name} />
        <br />
        <label>Email </label>
        <input type="email" onChange={handleEmailChange} value={email} />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Add Guest
        </button>
      </form>
      <hr />
      <h2>Guest List</h2>
      <ul>{guests.length === 0 ? <p>"No Guest!"</p> : guestLists}</ul>
    </div>
  );
}

/**
 * Controlled input - reacts owns the value. The input just display it
 * value ={name}
 * onChange - an event that fires on every keystroke. The event object e has e.target.value, what is what the user just typed
 */
