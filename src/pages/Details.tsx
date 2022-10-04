import { useParams } from 'react-router-dom';

import { MovieDetailsLayout } from 'components/MovieDetailsLayout/MovieDetailsLayout';
import { useMovie } from 'hooks/useMovie';
import { NotFound } from 'ui/NotFound/NotFound';

export const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [movie] = useMovie(Number(id));

  if (!movie) return <NotFound />;

  return <MovieDetailsLayout movie={movie} />;
};
