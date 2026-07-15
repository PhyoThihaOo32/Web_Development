import { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState(null); // null = "nothing selected yet"

  function handleGetNumber1(event) {
    setNumber1(Number(event.target.value));
  }

  function handleGetNumber2(event) {
    setNumber2(Number(event.target.value));
  }

  function handleOperatorChange(event) {
    setOperator(event.target.value);
  }

  let result;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      result = null; // no operator chosen yet
  }

  return (
    <div>
      <input type="text" value={number1} onChange={handleGetNumber1} />
      <select value={operator ?? ""} onChange={handleOperatorChange}>
        <option value="" disabled>
          ?
        </option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" value={number2} onChange={handleGetNumber2} />
      <p>
        {number1} {operator ?? "?"} {number2} = {result ?? "?"}
      </p>
    </div>
  );
}

export default Calculator;
