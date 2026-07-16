import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you are looking for does not exist. It may have been
        moved, deleted, or the URL might be incorrect.
      </p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}
