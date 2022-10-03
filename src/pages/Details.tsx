import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import MovieDetails from '../components/Movie/Details';
import NotFound from '../components/NotFound';
import { useAppDispatch, useAppSelector } from '../hooks';
import fetchMovieDetails from '../store/features/movie/fetchMovieDetails';

const Details = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const movie = useAppSelector(state => state.movie.current[id as string]);
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
      <div className="absolute p-5" style={{ zIndex: 99 }}>
        <BackButton />
      </div>
      {pageContent}
    </section>
  );
};

export default Details;
