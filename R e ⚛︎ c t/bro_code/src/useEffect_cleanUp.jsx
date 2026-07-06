import React, { useState, useEffect } from "react";

function UseEffect_CleanUp() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  //   window.addEventListener("resize", handleResize);
  //   console.log('event listener added', width, height);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added", width, height);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed!");
    };
  });

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </>
  );
}

export default UseEffect_CleanUp;
