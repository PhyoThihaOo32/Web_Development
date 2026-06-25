import RecipeCard from './RecipeCard'

export default function RecipeList({ recipes, onDelete, onToggleVegetarian }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onDelete={onDelete}
          onToggleVegetarian={onToggleVegetarian}
        />
      ))}
    </ul>
  )
}
