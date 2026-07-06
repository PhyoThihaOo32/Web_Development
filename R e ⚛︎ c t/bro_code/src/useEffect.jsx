/**
 * useEffect() = react hook that tells react do some code when
 * - the component re-render
 * - this component mounts
 * - the state of a value change
 *
 *
 * useEffect(function, [dependencies])
 *
 * - useEffect(() => {}) run after every re-render
 * - useEffect(() => {}, []) run only on mount
 * - useEffect(() => {}, [value]) run on mount + when the value changes
 */

import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((count) => count + 1);
  }

  function subCount() {
    setCount((count) => count - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Substract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default UseEffect;
