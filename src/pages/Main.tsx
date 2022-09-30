import { useEffect, useRef } from 'react';
import { getPopularMovies } from '../api';

const Main = () => {
  const firstLoadRef = useRef<boolean>(true);

  useEffect(() => {
    if (!firstLoadRef.current) return;

    firstLoadRef.current = false;

    getPopularMovies();
  });

  return (
    <div>
      <ul>
        <li className="text-3xl font-bold">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
};

export default Main;
