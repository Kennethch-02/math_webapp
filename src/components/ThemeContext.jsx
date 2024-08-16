import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const themes = ['neon', 'material', 'dark', 'light', 'vintage'];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('neon');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);