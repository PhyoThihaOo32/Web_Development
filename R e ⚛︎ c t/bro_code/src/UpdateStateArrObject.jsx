import React, { useState } from "react";

function UpdateStateArrObject() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars((c) => c.slice(0, -1));
  }

  function handleYearChange(event) {
    // setCarYear((y) => (y = event.target.value));
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Cars Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} /> <br />
      <input
        className="input-box"
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter Make"
      />
      <br />
      <input
        className="input-box"
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter Model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
      <button onClick={handleRemoveCar}>Remove Car</button>
    </div>
  );
}

export default UpdateStateArrObject;
