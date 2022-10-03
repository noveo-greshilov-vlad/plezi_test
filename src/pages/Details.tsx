import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton, NotFound } from 'Components';
import { Details as MovieDetails } from 'Components/Movie';
import { useAppDispatch, useAppSelector } from 'Hooks';
import { fetchMovieDetails } from 'Store/features/movie/fetchMovieDetails';
import { selectCurrentMovie } from 'Store/selectors';

export const Details = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const movie = useAppSelector(state =>
    selectCurrentMovie(state, id as string)
  );
  const firstLoadRef = useRef<boolean>(true);

  useEffect(() => {
    const numId = Number(id);
    if (firstLoadRef.current && !movie && !isNaN(numId)) {
      dispatch(fetchMovieDetails(Number(id)));
      firstLoadRef.current = false;
    }
  }, [dispatch, id, movie]);

  const pageContent = useMemo(() => {
    return movie ? <MovieDetails movie={movie} /> : <NotFound />;
  }, [movie]);

  return (
    <section className="flex flex-col flex-1 text-start overflow-hidden">
      <div
        className="absolute p-5 bg-slate-100 bg-opacity-70 rounded-lg"
        style={{ zIndex: 99 }}
      >
        <BackButton />
      </div>
      {pageContent}
    </section>
  );
};
