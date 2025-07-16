import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import FindOrgStatus from './components/FindOrgStatus';
import UpdateOrgStatus from './components/UpdateOrgStatus';
import Home from './components/Home';
import UpdateOrgFields from './components/UpdateOrgFields';
import Login from "./components/Login"
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
           <ProtectedRoute>
              <Home />
            </ProtectedRoute>
        } />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        {/* Protected routes */}
        <Route
          path="/UpdateOrgStatus"
          element={
            <ProtectedRoute>
              <UpdateOrgStatus />
            </ProtectedRoute>
          }
        />
        <Route
          path="/FindOrgStatus"
          element={
            <ProtectedRoute>
              <FindOrgStatus />
            </ProtectedRoute>
          }
        />
        <Route
          path='/UpdateOrgFields'
          element={
            <ProtectedRoute>
              <UpdateOrgFields />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
