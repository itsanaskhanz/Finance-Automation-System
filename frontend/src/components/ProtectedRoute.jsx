import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
  const verifyToken = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    setIsAuthenticated(false);
    return;
  }

  try {
    const res = await fetch(`${apiUrl}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (res.ok) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      localStorage.removeItem('token');
    }
  } catch (err) {
    console.error('Error during token verification:', err);
    setIsAuthenticated(false);
    }
  };

    verifyToken();

  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
