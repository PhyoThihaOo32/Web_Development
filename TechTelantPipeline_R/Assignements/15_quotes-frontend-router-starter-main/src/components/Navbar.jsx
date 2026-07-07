// ============================================================
// Navbar.jsx
//
// Shows on every page (it's rendered once, above <Routes>, in
// routes.jsx — not inside any individual page).
// ============================================================

// TODO (Part 2): bring in the nav-link component that knows whether
//   it's the active route. Docs:
//   https://reactrouter.com/start/declarative/navigating#navlink
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      {/* TODO (Part 2): a link to the home page */}
      {/* TODO (Part 2): a link to the add-quote page */}
      {/*
        Hint: this link component takes a function for its class name
        instead of a plain string, so it can style itself differently
        when it's the active route. Check the docs above for the
        exact shape, then add a small ".active" style in App.css —
        there isn't one yet, so pick something simple (e.g. font-weight
        or color).
      */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/AddQuote">Add-Quote</NavLink>
    </nav>
  );
}

export default Navbar;
