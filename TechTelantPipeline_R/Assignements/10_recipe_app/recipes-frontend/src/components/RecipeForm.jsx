import { useState } from 'react'

export default function RecipeForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [cuisine, setCuisine] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onAdd({ title, cuisine })
    setTitle('')
    setCuisine('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  )
}
