import { useState } from "react";

function EmailInput() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleEmailInput(event) {
    event.preventDefault();
    setIsValid(email.includes("@"));
    setIsSubmitted(true);
    if (isValid) setEmail("");
  }

  return (
    <div>
      Email Input
      <form action="">
        <label htmlFor="email-input">Email</label>
        <input
          type="text"
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={(e) => handleEmailInput(e)}>Enter</button>
        {isSubmitted && !isValid && <p>Invalid Email</p>}
      </form>
    </div>
  );
}

export default EmailInput;
