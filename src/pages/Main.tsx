import { useEffect, useMemo } from 'react';

import { Layout, Loading } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchMovies } from 'store/features/movie/fetchMovie';
import { selectIsLoading, selectMoviesList } from 'store/selectors';

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
