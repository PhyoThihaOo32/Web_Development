function Button() {
  const styles = {
    backgroundColor: "rgb(195, 233, 59)",
    color: "white",
    padding: "10px 20px",
    bordeRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  let count = 0;

  // const handleClick = () => console.log("tisk!");
  // const handleClick2 = (name) => console.log(`${name} don't click me.`); // onClick={() => handleClick2("phyo")}
  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you click me ${count} times.`);
  //   } else {
  //     console.log(`${name} stop clicking me.`);
  //   }
  // };

  const handleClick = (e) => {
    e.target.textContent = "Ouch!";
  };

  return (
    // onDoubleClick = {(e) => handleClick(e)}
    <button onClick={(e) => handleClick(e)} style={styles}>
      Click Me!
    </button>
  );
}

export default Button;
