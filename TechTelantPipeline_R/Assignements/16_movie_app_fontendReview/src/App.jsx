import MovieCard from "./components/MovieCard";

const movies = [
  {
    id: 1339713,
    title: "Obsession",
    poster_path: "/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",
    vote_average: 8.272,
  },
  {
    id: 1084244,
    title: "Toy Story 5",
    poster_path: "/ovGJ69DW9T0nFCw8uDegqCzu9rh.jpg",
    vote_average: 7.4,
  },
  {
    id: 1275779,
    title: "Disclosure Day",
    poster_path: "/9XKXO68h0KGMCQ9ZZEdP0DWfcXS.jpg",
    vote_average: 6.685,
  },
  {
    id: 1083381,
    title: "Backrooms",
    poster_path: "/rhGx6E3qRNMgj3i5su2oukNHwIQ.jpg",
    vote_average: 6.8,
  },
  {
    id: 1273221,
    title: "Scary Movie",
    poster_path: "/1KlYdWoOrbL5ux357rW9LC155qw.jpg",
    vote_average: 5.407,
  },
  {
    id: 1314481,
    title: "The Devil Wears Prada 2",
    poster_path: "/fCAURTUx3YfsJ8k9I0UamjSILiR.jpg",
    vote_average: 7.019,
  },
  {
    id: 1280738,
    title: "The Furious",
    poster_path: "/zP19YO60jwEsfKd5Qf1UvA5uJu8.jpg",
    vote_average: 7.645,
  },
  {
    id: 1413976,
    title: "Citizen Vigilante",
    poster_path: "/6LmJD3Wohe0g4U62wgi7RyJqfE4.jpg",
    vote_average: 6.577,
  },
  {
    id: 1127384,
    title: "Deep Water",
    poster_path: "/kjcuS7xaRyqRjVaVcH4t0qHshuX.jpg",
    vote_average: 7.181,
  },
  {
    id: 1523145,
    title: "Your Heart Will Be Broken",
    poster_path: "/7wIBfBl2gejt6xHxNSK0reVIm7E.jpg",
    vote_average: 7.079,
  },
  {
    id: 1368314,
    title: "Passenger",
    poster_path: "/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg",
    vote_average: 5.674,
  },
  {
    id: 936075,
    title: "Michael",
    poster_path: "/zm0KAbOjlt9eR5y7vDiL2dEOwMl.jpg",
    vote_average: 8.704,
  },
  {
    id: 5721,
    title: "Vixen!",
    poster_path: "/9KMZWDA3xTrlgrScqdMisINQmsh.jpg",
    vote_average: 5.524,
  },
  {
    id: 1202033,
    title: "Enola Holmes 3",
    poster_path: "/7kRYHH9H9PjBFwz1FprbHB2AAjI.jpg",
    vote_average: 7.026,
  },
  {
    id: 278,
    title: "The Shawshank Redemption",
    poster_path: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    vote_average: 8.724,
  },
  {
    id: 1315772,
    title: "Minions & Monsters",
    poster_path: "/nz7i42yhLIJ4ve9JKgM6NthoLHO.jpg",
    vote_average: 6.391,
  },
  {
    id: 687163,
    title: "Project Hail Mary",
    poster_path: "/yihdXomYb5kTeSivtFndMy5iDmf.jpg",
    vote_average: 8.676,
  },
  {
    id: 1279493,
    title: "The Get Out",
    poster_path: "/zlkeH0s7dDxcnuPcHBqAyXFUxqN.jpg",
    vote_average: 6.5,
  },
  {
    id: 931285,
    title: "Mortal Kombat II",
    poster_path: "/hwRdDFIhaEmpRgoki805YvyyjZf.jpg",
    vote_average: 7.975,
  },
  {
    id: 11012,
    title: "Damage",
    poster_path: "/alf3JOPP7EYP0iO24gwe5YfRnqo.jpg",
    vote_average: 6.6,
  },
];

function App() {
  return (
    <div>
      <h1 className="app-title">My Movie WatchList</h1>
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default App;
