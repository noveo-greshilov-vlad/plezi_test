import { useEffect, useMemo, useRef } from 'react';
import Layout from '../components/Layout';
import { useAppDispatch, useAppSelector } from '../hooks';
import fetchMovies from '../store/features/movie/fetchMovie';

const Main = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movie.list);
  const isLoading = useAppSelector(state => state.movie.isLoading);
  const firstLoadRef = useRef<boolean>(true);

  useEffect(() => {
    if (!firstLoadRef.current || movies.length > 0) return;

    firstLoadRef.current = false;

    dispatch(fetchMovies());
  });

  const layout = useMemo(() => (isLoading ? <p>Loading</p> : <Layout movies={movies} />), [isLoading, movies]);

  return <section className="flex-1 p-5">{layout}</section>;
};

export default Main;
