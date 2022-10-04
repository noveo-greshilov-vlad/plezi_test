import PrettyRating from 'pretty-rating-react';

import { useUrlBuilders } from 'hooks/useUrlBuilders';
import { TMovieDetailsResponse } from 'types';
import { formatMoney } from 'utils';

export type TMovieDetailsProps = {
  movie: TMovieDetailsResponse;
};

export const MovieDetails = ({ movie }: TMovieDetailsProps) => {
  const { buildPosterUrl } = useUrlBuilders();
  const parsedGenres = movie.genres.map(genr => genr.name).join(', ');
  const posterPath = movie.poster_path ?? '';
  const backgroundImage = !posterPath ? null : buildPosterUrl(posterPath);

  return (
    <div className="relative flex flex-1 flex-col">
      <div className="flex-1">
        <div className="relative h-full w-full scale-105 blur">
          {backgroundImage && (
            <img
              className="absolute h-full w-full object-cover"
              src={backgroundImage}
              alt=""
            />
          )}
        </div>
        <div className="absolute top-0 left-0 z-10 h-full w-full overflow-y-scroll bg-slate-100 bg-opacity-30 p-5">
          <div className="flex h-fit flex-col p-5 md:flex-row">
            <div className="flex flex-1 flex-grow-[1] items-center justify-center p-5">
              <img
                className="h-2/3 rounded-md shadow-inner"
                src={buildPosterUrl(posterPath)}
                alt={movie.original_title}
              />
            </div>
            <div className="flex-1 flex-grow-[2] overflow-y-auto p-5">
              <h1 className="title-font text-center text-lg font-medium text-gray-900">
                {movie.title}
              </h1>
              <br />
              <p className="font-sans">{movie.overview}</p>
              <br />
              <p>
                <strong>Genre: </strong>
                {parsedGenres}
              </p>
              <br />
              <p>
                <strong>Release date: </strong>
                {movie.release_date}
              </p>
              <br />
              {movie.budget > 0 && (
                <>
                  <p>
                    <strong>Budget: </strong>
                    {formatMoney(movie.budget)}
                  </p>
                  <br />
                </>
              )}
              <strong>Rating: </strong>
              <PrettyRating
                value={movie.vote_average / 2}
                colors={['#d9ad26', '#d9ad26', '#434b4d']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
