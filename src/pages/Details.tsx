import { useParams } from 'react-router-dom';
import MovieDetails from '../components/Movie/Details';
import NotFound from '../components/NotFound';

const Details = () => {
  const { id } = useParams();

  // todo fetch movie here
  // const movie =

  if (!id || !parseInt(id)) {
    return <NotFound />;
  }

  return <MovieDetails id={id} />;
};

export default Details;
