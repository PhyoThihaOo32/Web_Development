import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutContextProvider } from "./context/WorkoutsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <App></App>
    </WorkoutContextProvider>
  </React.StrictMode>,
);
