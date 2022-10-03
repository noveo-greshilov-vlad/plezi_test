import { Link } from 'react-router-dom';

export const BackButton = () => (
  <Link to="/">
    <button className="text-start">⬅️ Go back</button>
  </Link>
);
