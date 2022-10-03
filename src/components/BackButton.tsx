import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <button className="text-start" onClick={onClick}>
      ⬅️ Go back
    </button>
  );
};

export default BackButton;
