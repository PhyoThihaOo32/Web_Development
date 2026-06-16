import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>RSVP Practice</h1>
      <input type="text" onChange={handleNameChange} value={name} />
      <p>Name: {name}</p>
    </div>
  );
}

/**
 * Controlled input - reacts owns the value. The input just display it
 * value ={name}
 * onChange - an event that fires on every keystroke. The event object e has e.target.value, what is what the user just typed
 */
