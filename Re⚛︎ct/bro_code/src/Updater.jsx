/**
 * updater function - a function passed as an argument to setState()
 * usually ex. setYear(year + 1)
 * Allow for safe updates based on the previous state
 * Used with multiple state updates and asynchronous functions
 * Good practice to use updater functions
 */

import React, { useState } from "react";

function Updater() {
  const [count, setCount] = useState(0);

  function increment() {
    /**
     * Use the current state to calculate the NEXT state.
     * set functions do not trigger an update
     * React batches together state updates for performance reasons.
     * NEXT state becomes the CURRENT state after an update
     */
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    /**
     * Takes the PENDING state to calculate NEXT state
     * React puts your updater function in a queue(waiting in line)
     * During the next render, it will call them in the same order.
     */
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }

  function reset() {
    setCount((c) => (c = 0));
  }
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment} value={count}>
        Increment
      </button>
      <button onClick={decrement} value={count}>
        Decrement
      </button>
      <button onClick={reset} value={count}>
        Reset
      </button>
    </div>
  );
}

export default Updater;
