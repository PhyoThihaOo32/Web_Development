function MovieCard(props) {
  return (
    <div>
      <img src={props.poster} />
      <p>Movie Name: {props.title}</p>
      <p>Rating: {props.rating}</p>
    </div>
  );
}

export default MovieCard;
