// src/components/Logout.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token
    navigate('/login'); // Redirect to login
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
