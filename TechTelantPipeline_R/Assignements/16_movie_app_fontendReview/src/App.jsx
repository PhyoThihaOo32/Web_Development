import MovieCard from "./components/MovieCard";

function App() {
  return (
    <MovieCard
      poster="https://collider.com/john-wick-ballerina-hot-toys-artisan-edition-figure/"
      title="John Wick"
      rating={10}
    ></MovieCard>
  );
}

export default App;
