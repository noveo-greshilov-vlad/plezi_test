import { MoviesLayout } from 'components/MoviesLayout/MoviesLayout';
import { useAppSelector } from 'hooks/useAppSelector';
import { selectIsLoading } from 'store/movie/selectors';
import { Loading } from 'ui/Loading/Loading';

export const Main = () => {
  const isLoading = useAppSelector(selectIsLoading);

  if (isLoading) return <Loading />;

  return <MoviesLayout />;
};
