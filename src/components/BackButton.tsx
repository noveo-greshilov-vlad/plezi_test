import { Link } from 'react-router-dom';

const BackButton = () => (
  <Link to="/">
    <button className="text-start">⬅️ Go back</button>
  </Link>
);

export default BackButton;
