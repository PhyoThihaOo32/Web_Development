// ============================================================
// NotFound.jsx   (catch-all page — lives at "*")
//
// Matches any URL that didn't match one of the routes above it.
// ============================================================

// TODO (Part 5): bring in the component for client-side navigation
//   links. Docs: https://reactrouter.com/start/declarative/navigating#link

function NotFound() {
  return (
    <div className="app">
      <h1>Page not found</h1>
      {/* TODO (Part 5): a link back to the home page */}
    </div>
  )
}

export default NotFound
