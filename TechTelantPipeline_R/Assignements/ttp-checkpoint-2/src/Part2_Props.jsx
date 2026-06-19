// ============================================================
// PART 2 — Props
//
// How to verify your work:
//   Make sure "npm run dev" is still running.
//   Save this file and look at the "Part 2 — Props" section in the browser.
//   Each task produces visible output — check the page as you go.
//
// Instructions:
//   - Complete the tasks in order
//   - For EXPLAIN tasks, write your answer as a comment below the prompt
// ============================================================

// ------------------------------------------------------------
// SECTION A — Passing and Receiving Props
//
// Why we learn this:
//   Props are how you pass data INTO a component from the outside.
//   They work like arguments to a function — the same component can
//   be reused with different data by passing different props each time.
//   Without props, every component would always look exactly the same.
// ------------------------------------------------------------

// The StudentBadge component below is hardcoded — it always shows the same text.
// we will update this soon.

function StudentBadge(props) {
  return (
    <div>
      <h3>Student Name: {props.name}</h3>
      <p>Grade: {props.grade}</p>
      <hr />
    </div>
  );
}

function SectionA() {
  // A1.
  // Render StudentBadge three times in the return statement below.
  // Notice what happens — every badge looks exactly the same no matter how many you add.
  // This is the problem props solve.

  // A2.
  // Now go back and update the StudentBadge component so it accepts props
  // and displays the name and grade dynamically instead of hardcoded text.
  // Remember: every component receives a single object, conventionally named props.

  // Then pass a different name and grade to each of your three StudentBadge components.
  // Each one should now show different data.
  //
  // Hint: think about what a function needs in order to receive values from the outside.
  // Hint2: think about how properties are added and accessed on objects.

  // A3.
  // Create a new component called TeacherCard from scratch.
  // It should accept props and display a teacher's name and the subject they teach.
  // Render it once below your badges with real values passed in.
  //
  // This shows that props work the same way on any component you build.
  function TeacherCard(props) {
    return (
      <div>
        <h2>Teacher Name: {props.name}</h2>
        <p>Subject: {props.subj}</p>
      </div>
    );
  }

  // EXPLAIN: What are props?
  //          Can you change a prop's value inside the component that receives it?
  //          Why or why not?
  //
  //          answer: Props(properties) can arguments passed into components.
  //          We can't change the prop's value because prop are read-only.

  return (
    <div>
      <h2>Section A — Props</h2>
      <StudentBadge name="Phyo" grade="A" />
      <StudentBadge name="Mika" grade="B"></StudentBadge>
      <StudentBadge name="Bob" grade="C"></StudentBadge>

      <TeacherCard name="Prof. Joy" subj="American Politics"></TeacherCard>
    </div>
  );
}

// ------------------------------------------------------------
// SECTION B — Props with Different Data Types
//
// Why we learn this:
//   Props are not limited to strings. You can pass numbers, booleans,
//   and other types too. The component decides what to do with each value.
// ------------------------------------------------------------

// B1.
// Create a component called PlayerCard.
// It should accept props and display a player's name, score, and active status.
//   - name is a string
//   - score is a number
//   - isActive is a boolean
//
// If isActive is true, display the text "Active".
// If isActive is false, display the text "Inactive".

// Hint: declare a variable above the return, set its value using an if/else,
//       then embed that variable in your JSX.
//
// Write PlayerCard here:
function PlayerCard(props) {
  return (
    <div>
      <h2>Player Name: {props.name}</h2>
      <p>Score: {props.score}</p>
      <p>Status: {props.isActive ? "Active" : "Inactive"}</p>
      <hr />
    </div>
  );
}

function SectionB() {
  // B2.
  // Render three PlayerCard components with different values.
  // At least one should have isActive as true and one as false.
  // You should see the correct status text on each card.

  return (
    <div>
      <h2>Section B — Props with Different Types</h2>
      <PlayerCard name="Messi" score={101} isActive={true}></PlayerCard>
      <PlayerCard name="R.Carlos" score={89} isActive={false}></PlayerCard>
      <PlayerCard
        name="Sir Bobby Charlton"
        score={78}
        isActive={false}
      ></PlayerCard>
    </div>
  );
}

// ------------------------------------------------------------
// Do not edit below this line.
// ------------------------------------------------------------

function Part2() {
  return (
    <section>
      <h1>Part 2 — Props</h1>
      <hr />
      <SectionA />
      <hr />
      <SectionB />
    </section>
  );
}

export default Part2;
