import PrettyRating from 'pretty-rating-react';
import { MovieDetailsResponse } from '../../shared';
import { buildPosterLink, formatMoney } from '../../shared/utils';

type Props = {
  movie: MovieDetailsResponse;
};

const Details = ({ movie }: Props) => {
  return (
    <div className="flex flex-col flex-1 relative">
      <div className="flex-1">
        <div
          className="blur w-full h-full"
          style={{
            backgroundImage: `url("${buildPosterLink(movie.poster_path as string)}")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            transform: 'scale(1.03)'
          }}
        ></div>
        <div className="p-5 bg-slate-100 bg-opacity-30 z-10 absolute top-0 left-0 w-full h-full">
          <div className="flex flex-row p-5 h-full">
            <div className="flex-1 p-5 flex justify-center items-center" style={{ flexGrow: 1 }}>
              <img
                className="h-2/3 shadow-inner rounded-md"
                src={buildPosterLink(movie.poster_path as string)}
                alt={movie.original_title}
              />
            </div>
            <div className="flex-1 p-5 overflow-y-auto" style={{ flexGrow: 2 }}>
              <h1 className="font-sans text-2xl text-center">{movie.title}</h1>
              <br />
              <p className="font-sans">{movie.overview}</p>
              <br />
              <p>
                <strong>Genre: </strong>
                {movie.genres.map(genr => genr.name).join(', ')}
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
              <PrettyRating value={movie.vote_average / 2} colors={['#d9ad26', '#d9ad26', '#434b4d']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
