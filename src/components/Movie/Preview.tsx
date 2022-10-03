import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieListResultObject } from '../../shared';
import { buildPreviewLink } from '../../shared/utils';

type Props = {
  movie: MovieListResultObject;
};

const Preview = ({ movie }: Props) => {
  const { id } = movie;
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate(`movie/${id}`);
  }, [id, navigate]);

  return (
    <div>
      <h1 onClick={onClick} className="cursor-pointer">
        {movie.title}
      </h1>
      <img
        onClick={onClick}
        className="cursor-pointer"
        src={buildPreviewLink(movie.poster_path as string)}
        alt={movie.original_title}
      />
    </div>
  );
};

export default Preview;
