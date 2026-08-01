import { createContext } from "react";
import { userContext } from "./ComponentA";

function ComponentD() {
  const user = createContext(userContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <p>hello {user}</p>
    </div>
  );
}

export default ComponentD;
