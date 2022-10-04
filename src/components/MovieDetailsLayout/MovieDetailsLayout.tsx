import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { TMovieDetailsResponse } from 'types';
import { BackButton } from 'ui/BackButton/BackButton';

export type TMovieDetailsLayoutProps = {
  movie: TMovieDetailsResponse;
};

export const MovieDetailsLayout = ({ movie }: TMovieDetailsLayoutProps) => {
  return (
    <section className="flex flex-1 flex-col overflow-hidden text-start">
      <div className="absolute z-50 rounded-lg bg-slate-100 bg-opacity-70 p-5">
        <BackButton />
      </div>
      <MovieDetails movie={movie} />
    </section>
  );
};
