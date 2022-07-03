import React, { createContext, useState, useEffect } from 'react';

import useAuth from './useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const loading = useAuth();
  return (
    <Context.Provider value={{loading}}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };