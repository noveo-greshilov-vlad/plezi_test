import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { BackButton, NotFound } from 'components';
import { Details as MovieDetails } from 'components/Movie';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchMovieDetails } from 'store/features/movie/fetchMovieDetails';
import { selectCurrentMovie } from 'store/selectors';

export const Details = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const movie = useAppSelector(state => selectCurrentMovie(state, id ?? ''));

  useEffect(() => {
    if (!movie && !isNaN(Number(id))) {
      dispatch(fetchMovieDetails(Number(id)));
    }
  }, [dispatch, id, movie]);

  const pageContent = useMemo(() => {
    return movie ? <MovieDetails movie={movie} /> : <NotFound />;
  }, [movie]);

  return (
    <section className="flex flex-col flex-1 text-start overflow-hidden">
      <div className="absolute p-5 bg-slate-100 bg-opacity-70 rounded-lg z-50">
        <BackButton />
      </div>
      {pageContent}
    </section>
  );
};
