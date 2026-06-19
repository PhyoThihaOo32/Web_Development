// ============================================================
// PART 4 — State and Events
//
// useState is already imported at the top — you will need it for every section.
//
// How to verify your work:
//   Make sure "npm run dev" is still running.
//   Save this file and interact with your components in the browser.
//   State means the component updates when something changes —
//   the page should reflect those changes without a full refresh.
//
// Instructions:
//   - Complete each section in order
//   - For EXPLAIN tasks, write your answer as a comment below the prompt
// ============================================================

import { useState } from "react";

// ------------------------------------------------------------
// A NOTE ON EVENTS
//
// An event is something the user does — clicking a button, typing in a box,
// submitting a form. The browser detects these actions and fires an event.
//
// In React, you respond to events by passing a function directly onto a JSX element.
// That function runs automatically whenever the event fires.
//
// JSX elements have special attributes for this — one for clicks, one for typing,
// and so on. Each attribute takes a function as its value.
// You do not call the function yourself — you hand it over, and React calls it.
// ------------------------------------------------------------

// ------------------------------------------------------------
// SECTION A — useState Basics
//
// Why we learn this:
//   A regular variable resets to its original value every time a component re-renders.
//   State is different — React holds onto it between renders
//   and updates the page automatically when it changes.
//
//   useState is the tool that gives a component its own memory.
// ------------------------------------------------------------

function Counter() {
  // A1.
  // Declare a state variable called count with an initial value of 0.
  //
  // Why: useState gives you two things — the current value, and a function
  //      to update it. When you call the update function, React re-renders
  //      the component and shows the new value on the page.
  const [count, setCount] = useState(0);
  // A2.
  // Add a button that says "Add 1".
  // When clicked, it should increase count by 1.
  // const increment = () => setCount(count + 1);

  // A3.
  // Add a second button that says "Reset".
  // When clicked, it should set count back to 0.
  //
  // Test it: click "Add 1" several times, then click "Reset".

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add 1</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function SectionA() {
  // EXPLAIN: What is state?
  //          How is a state variable different from a regular variable?
  //          What happens on the page when you call the updater function?
  //
  //          answer: state is data that react component remembers and can update over time.
  //          -A regular variable resets to its original value every time a component re-renders.
  //          -When we call the updater function - the count - the state variable also change its value.

  return (
    <div>
      <h2>Section A — useState</h2>
      <Counter />
    </div>
  );
}

// ------------------------------------------------------------
// SECTION B — One Variable, Many Buttons
//
// Why we learn this:
//   In Section A, every click changed count by the same fixed amount.
//   But state can hold more than numbers, and more than one button
//   can update the very same state variable — each one setting it
//   to something different. That idea is the missing piece before
//   we get to inputs in the next section.
// ------------------------------------------------------------

function MoodPicker() {
  // B1.
  // Declare a state variable called mood with an initial value of your choice
  // (a string, like "neutral").
  const [mood, setMood] = useState("neutral");

  // B2.
  // Add three buttons: "Happy", "Sad", and "Excited".
  // Each button needs its own click handler that sets mood to that
  // button's word — clicking "Sad" should set mood to "sad", and so on.
  //
  // Why: All three buttons update the same state variable, just with
  //      a different value each time.

  // B3.
  // Below the buttons, display a sentence that includes the current mood,
  // for example "Current mood: happy".
  //
  // Test it: click each button and watch the sentence change.
  //
  // EXPLAIN: How can three different buttons all update the same state variable?
  //          What is actually different between this component and Counter?
  //
  //          answer:Three buttons get different text but they all update the same state variable which is mood by using setMood function.
  //          In Counter the state variable count is directly updated and reset but this component - we first get the text - when clicked -
  //          the event get trigger and get the innerText - and then use this text as arguemtn - passed into setMood() function - and display it
  //

  return (
    <div>
      <button onClick={() => setMood(event.target.innerText)}>Happy</button>
      <button onClick={() => setMood(event.target.innerText)}>Sad</button>
      <button onClick={() => setMood(event.target.innerText)}>Excited</button>
      <p>Current Mood: {mood}</p>
    </div>
  );
}

function SectionB() {
  return (
    <div>
      <h2>Section B — One Variable, Many Buttons</h2>
      <MoodPicker />
    </div>
  );
}

// ------------------------------------------------------------
// SECTION C — Controlled Inputs
//
// Why we learn this:
//   A controlled input means the value displayed in the input box
//   always comes from React state. Every keystroke updates state,
//   and the input re-renders with the new value. This gives you
//   access to whatever the user has typed — which is necessary
//   for forms, search boxes, filters, and most real-world UI.
// ------------------------------------------------------------

function NameInput() {
  // C1.
  // Declare a state variable called inputValue. Choose an appropriate initial value.
  const [inputValue, setInputValue] = useState("");

  // C2.
  // Add an input element.
  // Wire it up so that every keystroke updates the state variable.
  // The input's displayed value should always come from state — not from the browser.
  //
  // Why: The browser's event object gives you access to whatever is currently
  //      typed in the input. You use that to update state on every change.

  // C3.
  // Below the input, add a paragraph that displays what is currently in the state variable.
  // It should update in real time as you type.
  //
  // Test it: type something and watch the paragraph change.
  //
  // EXPLAIN: What is a controlled input?
  //          What would happen if the input's displayed value did not come from state?
  //
  //          answer:  A controlled input means the value displayed in the input box
  //          always comes from React state. Every keystroke updates state,
  //          and the input re-renders with the new value.
  //          If the input's display value did not come from state - We won't be able to get the real time data from the user.

  return (
    <div>
      <input
        type="text"
        onChange={() => setInputValue(event.target.value)}
        placeholder="type something"
      />
      <p>{inputValue}</p>
    </div>
  );
}

function SectionC() {
  return (
    <div>
      <h2>Section C — Controlled Inputs</h2>
      <NameInput />
    </div>
  );
}

// ------------------------------------------------------------
// SECTION D — Conditional Rendering
//
// Why we learn this:
//   Not everything should appear on the screen at all times.
//   Conditional rendering lets you show or hide content based on state.
//   This is how alerts, dropdowns, modals, and toggled UI elements
//   work in React.
// ------------------------------------------------------------

function Toggle() {
  // D1.
  // Declare a state variable called isVisible with an initial value of false.
  const [isVisible, setVisible] = useState(false);

  // D2.
  // Add a button that toggles isVisible between true and false when clicked.
  // The button label should change based on the current state —
  // one label when the content is visible, a different label when it is not.
  //
  // Hint: you can use a variable above the return to decide what the label should be.

  // D3.
  // Below the button, render a paragraph that says "Now you see me!" —
  // but only when isVisible is true. Use the && operator to do this.
  //
  // Test it: clicking the button should show and hide the message.

  // D4.
  // Replace D3 with a ternary instead of &&.
  // ternary structure:
  // -> condition ? if condition is true : if condition is false
  // When isVisible is false, show a paragraph that says "I am hidden." instead.
  // A ternary has three parts: a condition, a value if true, and a value if false.
  //
  // EXPLAIN: What does the && operator do in JSX?
  //          What is the difference between && and a ternary?
  //          When would you use one over the other?
  //
  //          answer: && operator check the condition - if the both the condition is true it return true
  //          if both conditon or one condtion is false - it return false
  //          Both && and ternary are condition operator - but different in writting style.
  //          if i want readibiliy and clear explaination i would use &&
  //          but for simple short hand condition statements i would prefer ternary operators

  return (
    <div>
      <label>{isVisible ? "On " : "Off "}</label>
      <button onClick={() => setVisible(!isVisible)}>Toggle Visibility</button>
      <p>{isVisible ? "Now You see Me" : "Now you don't!"} </p>
    </div>
  );
}

function SectionD() {
  return (
    <div>
      <h2>Section D — Conditional Rendering</h2>
      <Toggle />
    </div>
  );
}

// ------------------------------------------------------------
// SECTION E — Callback Props
//
// Why we learn this:
//   Props can carry more than text and numbers — they can carry a
//   function. This is how a child component tells its parent that
//   something happened, without the child needing any state of its own.
//   Data flows down through props; events flow back up through a
//   function passed down the same way.
// ------------------------------------------------------------

function LightSwitchButton(props) {
  // E3.
  // This component should accept one prop — a function.
  // Render a single button. When clicked, it should call that function.
  // Do not declare any state in this component — it doesn't need any.

  return (
    <div>
      <button onClick={props.switchBtn}>Light Switch Button</button>
    </div>
  );
}

function LightSwitch() {
  // E1.
  // Declare a state variable called isOn with an initial value of false.
  const [isOn, setOnF] = useState(false);

  // E2.
  // Write a function that flips isOn to the opposite value.
  const flip = () => setOnF(!isOn);

  // E4.
  // Render LightSwitchButton below, passing your flip function from E2
  // to it as a prop.

  // E5.
  // Display a sentence showing whether the light is currently on or off.
  //
  // Test it: click the button. The sentence in LightSwitch should update,
  // even though the click happened inside LightSwitchButton.
  //
  // EXPLAIN: How is passing a function as a prop similar to passing a string
  //          or number as a prop? What's different about it?
  //          Why doesn't LightSwitchButton need its own state to make this work?
  //
  //          answer: It is similar in the way - that props is still the object and we are calling it property which in this case is the function
  //          just like we are calling other properties that the child component can have.
  //          The different is ????

  return (
    <div>
      {/* E5: on/off sentence goes here */}

      <LightSwitchButton switchBtn={flip}></LightSwitchButton>
      <h3>{isOn ? "Light is On" : " Light is Off"}</h3>
    </div>
  );
}

function SectionE() {
  return (
    <div>
      <h2>Section E — Callback Props</h2>
      <LightSwitch />
    </div>
  );
}

// ------------------------------------------------------------
// SECTION F — Forms and preventDefault
//
// Why we learn this:
//   By default, submitting a form reloads the entire page — which would
//   wipe out any React state you've built up. Every React form needs to
//   stop that default behavior before doing anything else.
// ------------------------------------------------------------

function GreetingForm() {
  // F1.
  // Declare a state variable called nameInput, starting as an empty string.
  // Declare a second state variable called greeting, starting as an empty string.
  const [nameInput, setNameInput] = useState("");
  const [greeting, setGreeting] = useState("");

  // F2.
  // Add a <form> containing a controlled text input wired to nameInput,
  // and a submit button.

  // F3.
  // Write a function that runs when the form is submitted. It should:
  //   - Call preventDefault() on the event object, as the very first line
  //   - Set greeting to a message that includes whatever was in nameInput
  //     (for example, "Hello, Sam!")
  //
  // Why: preventDefault() stops the browser's default reload-the-page
  //      behavior, so your state survives the submit.
  function submitForm(nameInput, event) {
    event.preventDefault();
    setGreeting(`Hello, ${nameInput}!`);
    setNameInput(""); // clean up what is in the input
  }

  // F4.
  // Wire your function from F3 to the form's submit event.

  // F5.
  // Below the form, display greeting. It should be blank until the form
  // has been submitted at least once.
  //
  // Test it: type a name and submit. The page should not reload, and the
  // greeting should appear below the form.
  //
  // EXPLAIN: What happens if you submit a form without calling preventDefault()?
  //          Why does that matter for a component that holds state?
  //
  //          answer: The page will reload so fast and we wont have time(only have a very short time) to see the greeting on DOM.
  //          It matter because we still need control when to reload or render the page - for the component when the page reload the state variables
  //          are also set to their initial values.

  return (
    <div>
      <form>
        <input type="text" onChange={() => setNameInput(event.target.value)} />
        <button type="submit" onClick={() => submitForm(nameInput, event)}>
          Greet Button
        </button>
      </form>

      <p>{greeting}</p>
      {/* <p>{nameInput}</p> */}
    </div>
  );
}

function SectionF() {
  return (
    <div>
      <h2>Section F — Forms and preventDefault</h2>
      <GreetingForm />
    </div>
  );
}

// ------------------------------------------------------------
// SECTION G — Adding and Removing from Array State
//
// Why we learn this:
//   Arrays in state work the same way as any other state — you cannot
//   change them directly. array.push() and array.splice() modify the
//   existing array in place, which React won't notice. Instead, you create
//   a brand new array using tools like the spread operator (...) and
//   array.filter().
// ------------------------------------------------------------

function SnackList() {
  // G1.
  // Declare a state variable called snacks, an array starting with two
  // or three snack name strings of your choice.
  const [snacks, setSnacks] = useState(["Doritos", "KitKats", "Mochi"]);

  // G2.
  // Add a button labeled "Add Pretzels". When clicked, it should add the
  // string "Pretzels" to the snacks array — without mutating the original
  // array. Look into the spread operator for this.
  function addPretzels() {
    setSnacks([...snacks, "Pretzels"]);
  }

  // G3.
  // Display each snack using .map(). Each one needs a key, and its own
  // "Remove" button that removes just that snack from the array.
  //
  // Hint: array.filter() lets you build a new array that excludes one
  //       specific item.

  function removeSnack(index) {
    // index is used to get the current <li> which has it own id
    const currSnack = document.getElementById(index); // use the current li to get the current snack name
    const removedSnacks = snacks.filter(
      (snack, i) => i.toString() !== currSnack.id,
    ); // first attempt was comparing the name of the snacks - the problem is if we have same name of snacks - all same snack were removed
    // second attempt was comparing their id - with index - index is number - to had to convert to string - snack id is string 
    setSnacks(removedSnacks); // render the updated snack to DOM
  }

  // G4.
  // If snacks is empty, display "No snacks left." instead of the list.
  //
  // Test it: click "Add Pretzels" a couple of times, then remove snacks
  // one by one until the empty message appears.
  //
  // EXPLAIN: Why can't you use array.push() or array.splice() directly on
  //          state? What do the spread operator and .filter() let you do
  //          instead?
  //
  //          answer:

  return (
    <div>
      <button onClick={addPretzels}>Add Pretzels</button>

      {/* G3 / G4: snack list or empty message goes here */}
      <ul>
        {snacks.length === 0 ? (
          <p>NO SNACKS LEFT</p>
        ) : (
          snacks.map((snack, index) => (
            <>
              <li id={index}>{snack} </li>
              <button onClick={() => removeSnack(index)}>Remove</button>
            </>
          ))
        )}
      </ul>
    </div>
  );
}

function SectionG() {
  return (
    <div>
      <h2>Section G — Array State</h2>
      <SnackList />
    </div>
  );
}

// ------------------------------------------------------------
// Do not edit below this line.
// ------------------------------------------------------------

function Part4() {
  return (
    <section>
      <h1>Part 4 — State and Events</h1>
      <hr />
      <SectionA />
      <hr />
      <SectionB />
      <hr />
      <SectionC />
      <hr />
      <SectionD />
      <hr />
      <SectionE />
      <hr />
      <SectionF />
      <hr />
      <SectionG />
    </section>
  );
}

export default Part4;
