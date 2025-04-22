import React, { useState,useEffect } from 'react';
import { ThemeContext, ThemeProviderProps } from './useTheme'; 

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() =>{;
  const stored = localStorage.getItem('theme')
  return stored ==='dark'
});
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next =!prev
      localStorage.setItem('theme', next ? 'dark':'light');
      return next
    })

  };

  useEffect(()=> {
    localStorage.setItem('theme', isDarkMode?'dark' : 'light')
  },[isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
