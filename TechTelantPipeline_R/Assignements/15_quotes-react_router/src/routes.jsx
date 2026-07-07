// ============================================================
// routes.jsx
//
// All route definitions live here instead of inline in main.jsx.
// Navbar renders once, above <Routes>, so it shows on every page
// no matter which route is active.
// ============================================================

// TODO (Part 1): bring in what you need from react-router to define
//   routes. Docs: https://reactrouter.com/start/declarative/routing
import { Routes, Route } from "react-router";
// TODO (Part 2): bring in the Navbar component
import Navbar from "./components/Navbar.jsx";
// TODO (Part 1): bring in the Home page
import Home from "./pages/Home.jsx";
// TODO (Part 3): bring in the QuoteDetail page
import QuoteDetail from "./pages/QuoteDetail.jsx";
// TODO (Part 4): bring in the AddQuote page
import AddQuote from "./pages/AddQuote.jsx";
// TODO (Part 5): bring in the NotFound page
import NotFound from "./pages/NotFound.jsx";

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quotes/:id" element={<QuoteDetail />}></Route>
        <Route path="/quotes/new" element={<AddQuote />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
