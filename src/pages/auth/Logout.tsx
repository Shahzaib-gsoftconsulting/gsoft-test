import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onLogout } from '../../store/slices/authSlice';
import { persistor } from '../../store/store';

const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(onLogout());
    persistor.purge();
    navigate('/auth/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
