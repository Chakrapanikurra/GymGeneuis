import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [workoutCount, setWorkoutCount] = useState(0);

  return (
    <AppContext.Provider value={{ workoutCount, setWorkoutCount }}>
      {children}
    </AppContext.Provider>
  );
};
