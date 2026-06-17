import React, { useState } from "react";
import List from "./List";

function UpdateStateArray() {
  const [foods, setFood] = useState([]);

  const handleAddFood = () => {
    const foodInput = document.getElementById("foodInput");
    const newFood = foodInput.value;
    foodInput.value = "";
    setFood((f) => [...f, newFood]);
  };

  const handleRemoveFood = () => {
    // this code is not working because react is not updated(still showing the old array)
    // foods.pop();
    // console.log(foods);
    // setFood(foods);
    setFood((f) => f.slice(0, -1)); // return NEW array without the last item
  };

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
      <button onClick={handleRemoveFood}>Remove Food</button>
    </div>
  );
}

export default UpdateStateArray;
