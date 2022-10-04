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
    <section className="flex-1 p-5">
      <section className="body-font min-h-screen text-gray-600 ">
        <div className="container mx-auto px-5 py-10">
          <div className="-m-4 flex flex-wrap">{mappedMovies}</div>
        </div>
      </section>
      );
    </section>
  );
};
