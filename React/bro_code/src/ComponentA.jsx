import ComponentB from "./ComponentB";
import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Phyo");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>Hello {user}</h2>
      <userContext.Provider value={user}>
        <ComponentB></ComponentB>
      </userContext.Provider>
    </div>
  );
}

export default ComponentA;
