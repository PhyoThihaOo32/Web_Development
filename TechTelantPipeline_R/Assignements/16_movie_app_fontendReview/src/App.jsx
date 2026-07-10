import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element={<MovieDetail />}></Route>
      <Route
        path="*"
        element={<h1 style={{ padding: 16 }}>Page Not Found</h1>}
      ></Route>
    </Routes>
  );
}

export default App;
