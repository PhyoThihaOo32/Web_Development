// ============================================================
// Home.jsx  ("All Quotes" page — lives at "/")
//
// The starting point: show every quote, and link each one to
// its own page.
// ============================================================

// TODO (Part 1): bring in the component for client-side navigation
//   links. Docs: https://reactrouter.com/start/declarative/navigating#link
// TODO (Part 1): bring in the quotes data
import quotes from "./../data/quotes";
import { Link } from "react-router";

function Home() {
  return (
    <div className="app">
      <h1>Quotes</h1>

      <section className="card">
        <h2>All Quotes</h2>

        {
          /*
          TODO (Part 1):
            - loop over the quotes array
            - render each quote's text and author (see the .quote-item /
              .quote-text / .quote-author classes in App.css)
            - make each quote a link to its own detail page
            
        */
          quotes.map((quote) => (
            <Link key={quote.id} to={`/quotes/${quote.id}`}>
              <div className="quote-item">
                <p className="quote-text">{quote.text}</p>
                <p className="quote-author">{quote.author}</p>
              </div>
            </Link>
          ))
        }
      </section>
    </div>
  );
}

export default Home;
