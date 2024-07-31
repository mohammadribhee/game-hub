import UseGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = UseGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
