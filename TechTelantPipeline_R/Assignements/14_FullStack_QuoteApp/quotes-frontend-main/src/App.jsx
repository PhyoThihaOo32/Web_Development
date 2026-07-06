// ============================================================
// App.jsx — Quotes App
//
// This app connects to your Express backend and lets you:
//   - Load all quotes from the database
//   - Add a new quote
//   - Delete a quote by id
//
// How this connects to your backend:
//   Your backend runs on port 8080. This frontend runs on a
//   different port (Vite's dev server, usually 5173).
//   They talk to each other over HTTP — the same way Postman did.
//   The only difference: a button click now sends the request
//   instead of you pressing Send in Postman.
//
// Two terminals required:
//   Terminal 1 → node app.js       (inside quotes-backend)
//   Terminal 2 → npm run dev       (inside quotes-frontend)
// ============================================================

import { useState } from 'react'
import './App.css'

// The base URL for all fetch calls in this file.
// Change this if your backend runs on a different port.
const API_URL = 'http://localhost:8080'

export default function App() {

  // ----------------------------------------------------------
  // STATE
  //
  // quotes    — the list of quotes shown on screen
  // text      — the value of the "quote text" input
  // author    — the value of the "author" input
  // deleteId  — the value of the "id to delete" input
  //
  // React re-renders the page every time any of these change.
  // ----------------------------------------------------------
  const [quotes, setQuotes] = useState([])

  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const [deleteId, setDeleteId] = useState('')


  // ----------------------------------------------------------
  // TASK 1 — Load all quotes
  //
  // This runs when the "Load Quotes" button is clicked.
  //
  // Steps:
  //   1. Fetch GET `${API_URL}/api/quotes`
  //   2. Convert the response to JSON
  //   3. Call setQuotes() with the result
  //
  // Why: the database lives on the server, not in the browser.
  // This is how the page asks for it — same request Postman
  // was sending for you all week, now triggered by a button.
  // ----------------------------------------------------------
  async function loadQuotes() {

  }


  // ----------------------------------------------------------
  // TASK 2 — Add a new quote
  //
  // This runs when the Add Quote form is submitted.
  //
  // Steps:
  //   1. Fetch POST `${API_URL}/api/quotes`
  //        method:  'POST'
  //        headers: { 'Content-Type': 'application/json' }
  //        body:    JSON.stringify({ text, author })
  //   2. Convert the response to JSON — this is the new quote
  //      the server created, with its database id included
  //   3. Add it to the quotes array with setQuotes
  //   4. Reset the inputs: setText('') and setAuthor('')
  //
  // Remember: sending the request does not automatically update
  // the screen. The server and your React state are separate.
  // You have to call setQuotes to make the list reflect the change.
  // ----------------------------------------------------------
  async function handleCreate(e) {
    e.preventDefault()

  }


  // ----------------------------------------------------------
  // TASK 3 — Delete a quote
  //
  // This runs when the Delete button is clicked.
  //
  // Steps:
  //   1. Fetch DELETE `${API_URL}/api/quotes/${deleteId}`
  //        method: 'DELETE'
  //   2. Remove the deleted quote from your quotes array
  //      Hint: filter out the item whose id matches Number(deleteId)
  //   3. Reset the input: setDeleteId('')
  // ----------------------------------------------------------
  async function handleDelete() {

  }


  return (
    <div className="app">
      <h1>Quotes</h1>

      {/* --------------------------------------------------------
          SECTION 1 — Load All Quotes
          The button calls loadQuotes().
          quotes.map() turns each quote into a list item.
          If the array is empty, a placeholder message shows instead.
      -------------------------------------------------------- */}
      <section className="card">
        <h2>All Quotes</h2>
        <button onClick={loadQuotes}>Load Quotes</button>

        {quotes.length === 0 ? (
          <p className="empty">No quotes loaded yet — click Load Quotes.</p>
        ) : (
          <ul className="quote-list">
            {quotes.map((quote) => (
              <li key={quote.id} className="quote-item">
                <span className="quote-id">id: {quote.id}</span>
                <span className="quote-text">"{quote.text}"</span>
                <span className="quote-author">— {quote.author}</span>
              </li>
            ))}
          </ul>
        )}
      </section>


      {/* --------------------------------------------------------
          SECTION 2 — Add a Quote
          Both inputs are controlled — their values live in state
          and stay in sync with what the user types.
          Submitting the form calls handleCreate().
      -------------------------------------------------------- */}
      <section className="card">
        <h2>Add a Quote</h2>
        <form onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="Quote text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit">Add Quote</button>
        </form>
      </section>


      {/* --------------------------------------------------------
          SECTION 3 — Delete a Quote
          The user types the id of the quote they want to remove,
          then clicks Delete.
          The id for each quote is shown in the list above.
      -------------------------------------------------------- */}
      <section className="card">
        <h2>Delete a Quote</h2>
        <div className="delete-row">
          <input
            type="text"
            placeholder="Quote id"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
          />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </section>

    </div>
  )
}
