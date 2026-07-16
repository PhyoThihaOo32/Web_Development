/**
 * onChange = event handler used primarily with form elements
 *            ex. <input>, <textarea>, <select>, <radio>
 *            Triggers a function every time the value of the input change
 */

import React, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("No comment");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      <textarea
        name=""
        id=""
        onChange={handleCommentChange}
        placeholder="Comment"
      ></textarea>
      <p>Comment: {comment}</p>

      <select name="" id="" value={payment} onChange={handlePaymentChange}>
        <option value="No Payment Selected">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Master Card">Master Card</option>
        <option value="Gift Card">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>

      <label htmlFor="">
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label htmlFor="">
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping :{shipping}</p>
    </div>
  );
}

export default OnChange;
