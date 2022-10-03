import { useEffect, useRef } from 'react';
import MoviePreview from '../components/Movie/Preview';
import { useAppDispatch, useAppSelector } from '../hooks';
import fetchMovies from '../store/features/movie/fetchMovie';

const Main = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movie.list);
  const isLoading = useAppSelector(state => state.movie.isLoading);
  const firstLoadRef = useRef<boolean>(true);

  useEffect(() => {
    if (!firstLoadRef.current) return;

    firstLoadRef.current = false;

    dispatch(fetchMovies());
  });

  return (
    <section className="flex-1 p-5">
      {isLoading ? <p>Loading</p> : movies.map(movie => <MoviePreview key={movie.id} movie={movie} />)}
    </section>
  );
};

export default Main;
