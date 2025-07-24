import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, showLogin, setShowLogin, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 