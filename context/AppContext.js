import React, { createContext, useState } from 'react';

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [workoutCount, setWorkoutCount] = useState(0);  // Default value is 0
  
    const resetWorkoutCount = () => {
      setWorkoutCount(0);
    };
  
    return (
      <AppContext.Provider value={{ workoutCount, setWorkoutCount, resetWorkoutCount }}>
        {children}
      </AppContext.Provider>
    );
  };
