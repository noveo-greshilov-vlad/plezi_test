import { useUrlBuilders } from 'Hooks';
import PrettyRating from 'pretty-rating-react';
import { TMovieDetailsResponse } from 'Shared';
import { formatMoney } from 'Shared/utils';

export type TDetailsProps = {
  movie: TMovieDetailsResponse;
};

export const Details = ({ movie }: TDetailsProps) => {
  const { buildPoserUrl } = useUrlBuilders();
  const parsedGenres = movie.genres.map(genr => genr.name).join(', ');
  const posterPath = movie.poster_path ?? '';
  const backgroundImage = !posterPath
    ? null
    : `url("${buildPoserUrl(posterPath)}")`;

  return (
    <div className="flex flex-col flex-1 relative">
      <div className="flex-1">
        <div
          className="blur w-full h-full scale-105 bg-cover bg-no-repeat bg-center"
          // used styles attr here because tailwind cant pars dynamic urls in classNames
          style={{
            ...(backgroundImage && { backgroundImage })
          }}
        ></div>
        <div className="p-5 bg-slate-100 bg-opacity-30 z-10 absolute top-0 left-0 w-full h-full overflow-y-scroll">
          <div className="flex md:flex-row p-5 flex-col h-fit">
            <div className="flex-1 p-5 flex flex-grow-[1] justify-center items-center">
              <img
                className="h-2/3 shadow-inner rounded-md"
                src={buildPoserUrl(posterPath)}
                alt={movie.original_title}
              />
            </div>
            <div className="flex-1 p-5 overflow-y-auto flex-grow-[2]">
              <h1 className="title-font text-lg font-medium text-gray-900 text-center">
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
