function SearchBar({ search }) {
  return (
    <div>
      <input type="text" onChange={(e) => search(e.target.value)} />
    </div>
  );
}

export default SearchBar;
