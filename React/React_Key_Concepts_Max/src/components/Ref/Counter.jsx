import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);

  function handleIncrease() {
    ref.current = ref.current + 1;
  }

  return (
    <>
      <button onClick={handleIncrease}>Increase</button>
      <p>Count: {ref.current}</p>
      {/** we are not gonna see the change on the UI - react don't re-render here */}
    </>
  );
}
