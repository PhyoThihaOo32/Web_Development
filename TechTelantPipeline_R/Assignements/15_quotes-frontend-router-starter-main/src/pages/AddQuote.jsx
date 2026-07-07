// ============================================================
// AddQuote.jsx   (lives at "/quotes/new")
//
// Note: this form does NOT save the new quote anywhere — there's
// no backend this week. The point of this page is the redirect:
// after a successful submit, your OWN CODE sends the user to a
// new page, instead of the user clicking a link themselves.
// That's the difference between useNavigate and <Link>.
// ============================================================

import { useState } from 'react'

// TODO (Part 4): bring in the hook that lets you navigate from code,
//   not just from a link click. Docs:
//   https://reactrouter.com/start/declarative/navigating#usenavigate

function AddQuote() {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  // TODO (Part 4): get the navigate function from that hook

  function handleSubmit(e) {
    e.preventDefault()

    // TODO (Part 4): send the user back to the home page after submit
  }

  return (
    <div className="app">
      <section className="card">
        <h2>Add a Quote</h2>
        <form onSubmit={handleSubmit}>
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
    </div>
  )
}

export default AddQuote
