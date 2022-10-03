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
    dispatch(fetchMovies());
  }, []);

  const layout = useMemo(
    () => (isLoading ? <Loading /> : <Layout movies={movies} />),
    [isLoading, movies]
  );

  return <section className="flex-1 p-5">{layout}</section>;
};
