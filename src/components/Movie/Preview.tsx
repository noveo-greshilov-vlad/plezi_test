import { Link } from 'react-router-dom';
import { useUrlBuilders } from 'Hooks';
import { TMovieListResultObject } from 'Shared';

export type TPreviewProps = {
  movie: TMovieListResultObject;
};

export const Preview = ({ movie }: TPreviewProps) => {
  const { buildPreviewUrl } = useUrlBuilders();

  return (
    <Link to={`/movie/${movie.id}`} state={{ fromDashboard: true }}>
      <div className="relative block h-48 overflow-hidden rounded">
        <img
          alt="plezi movie lib"
          className="block h-full w-full object-cover object-center cursor-pointer bg-no-repeat bg-scroll bg-[url('https://dummyimage.com/420x260')]"
          src={buildPreviewUrl(movie.poster_path ?? '')}
        />
      </div>
      <div className="mt-4">
        <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
          {movie.adult}
        </h3>
        <h2 className="title-font text-lg font-medium text-gray-900">
          {movie.title}
        </h2>
        {movie.release_date && <p className="mt-1">{movie.release_date}</p>}
      </div>
    </Link>
  );
};
