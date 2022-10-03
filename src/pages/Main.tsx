import { useEffect, useMemo } from 'react';
import { Layout, Loading } from 'Components';
import { useAppDispatch, useAppSelector } from 'Hooks';
import { fetchMovies } from 'Store/features/movie/fetchMovie';
import { selectIsLoading, selectMoviesList } from 'Store/selectors';

export const Main = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMoviesList);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (movies.length !== 0) return;

    dispatch(fetchMovies());
  }, [dispatch, movies.length]);

  const layout = useMemo(
    () => (isLoading ? <Loading /> : <Layout movies={movies} />),
    [isLoading, movies]
  );

  return <section className="flex-1 p-5">{layout}</section>;
};
