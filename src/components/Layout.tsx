import { MovieListResultObject } from '../shared';
import Preview from './Movie/Preview';

type Props = {
  movies: Array<MovieListResultObject>;
};

const Layout = ({ movies }: Props) => {
  return (
    <section className="min-h-screen body-font text-gray-600 ">
      <div className="container mx-auto px-5 py-10">
        <div className="-m-4 flex flex-wrap">
          {movies.map(movie => {
            return (
              <div key={movie.id} className="w-full p-4 md:w-1/2 lg:w-1/4">
                <Preview movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Layout;
