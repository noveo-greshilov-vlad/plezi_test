import { MoviePreview } from 'components/MoviePreview/MoviePreview';
import { useMovies } from 'hooks/useMovies';

export const MoviesLayout = () => {
  const [movies] = useMovies();

  const mappedMovies = movies.map(movie => {
    return (
      <div key={movie.id} className="w-full p-4 md:w-1/2 lg:w-1/4">
        <MoviePreview movie={movie} />
      </div>
    );
  });

  return (
    <section className="body-font flex min-h-screen flex-1 flex-wrap p-5 text-gray-600">
      {mappedMovies}
    </section>
  );
};
