import { Link } from 'react-router-dom';

import { useUrlBuilders } from 'hooks/useUrlBuilders';
import { TMovieListResultObject } from 'types';

export type TMoviePreviewProps = {
  movie: TMovieListResultObject;
};

export const MoviePreview = ({ movie }: TMoviePreviewProps) => {
  const { buildPreviewUrl } = useUrlBuilders();

  return (
    <Link to={`/movie/${movie.id}`} state={{ fromDashboard: true }}>
      <div className="relative block h-48 overflow-hidden rounded">
        <img
          alt=""
          className="block h-full w-full cursor-pointer bg-[#cccccc] bg-[url('https://dummyimage.com/260x260?text=Loading')] bg-scroll bg-center bg-no-repeat object-cover object-center"
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
