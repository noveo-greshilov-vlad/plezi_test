import { Preview } from 'components/Movie';
import { TMovieListResultObject } from 'types';

export type TLayoutProps = {
  movies: Array<TMovieListResultObject>;
};

export const Layout = ({ movies }: TLayoutProps) => {
  const mappedMovies = movies.map(movie => {
    return (
      <div key={movie.id} className="w-full p-4 md:w-1/2 lg:w-1/4">
        <Preview movie={movie} />
      </div>
    );
  });

  return (
    <section className="min-h-screen body-font text-gray-600 ">
      <div className="container mx-auto px-5 py-10">
        <div className="-m-4 flex flex-wrap">{mappedMovies}</div>
      </div>
    </section>
  );
};
