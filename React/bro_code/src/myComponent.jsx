import React, { useState } from "react";

function MyComponent() {
  // array destructuring - useState() function return two element - array and and function
  // stateful variable => name - setName will change the name variable
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    setName("Phyo");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is employed {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Change Status</button>
    </div>
  );
}

export default MyComponent;
