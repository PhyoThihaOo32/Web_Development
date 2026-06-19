// ============================================================
// App.jsx — assembles all four parts of the checkpoint.
//
// You do not need to edit this file.
//
// If you want to focus on one part at a time, you can comment
// out the others. For example:
//
//   <Part1 />
//   {/* <Part2 /> */}
//   {/* <Part3 /> */}
//   {/* <Part4 /> */}
//
// Uncomment them again when you are ready to move on.
// ============================================================

import Part1 from "./Part1_Components";
import Part2 from "./Part2_Props";
import Part3 from "./Part3_Lists";
import Part4 from "./Part4_State";
import "./App.css";

function App() {
  console.log("hello");
  return (
    <main>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
    </main>
  );
}

export default App;
