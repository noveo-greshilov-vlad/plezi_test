import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { fetchMovieDetails } from 'store/movie/actions/fetchMovieDetails';
import { selectCurrentMovie } from 'store/movie/selectors';
import { BackButton } from 'ui/BackButton/BackButton';
import { NotFound } from 'ui/NotFound/NotFound';

export const Details = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const movie = useAppSelector(state => selectCurrentMovie(state, id ?? ''));

  useEffect(() => {
    if (!movie && !isNaN(Number(id))) {
      dispatch(fetchMovieDetails(Number(id)));
    }
  }, [dispatch, id, movie]);

  if (!movie) return <NotFound />;

  return (
    <section className="flex flex-1 flex-col overflow-hidden text-start">
      <div className="absolute z-50 rounded-lg bg-slate-100 bg-opacity-70 p-5">
        <BackButton />
      </div>
      <MovieDetails movie={movie} />
    </section>
  );
};
