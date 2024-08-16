import React from 'react';
import { useTheme, themes } from './components/ThemeContext';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select 
      value={theme} 
      onChange={(e) => setTheme(e.target.value)}
      className={`theme-selector absolute top-4 right-4 p-2 rounded transition-colors duration-200`}
    >
      {themes.map((t) => (
        <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
      ))}
    </select>
  );
};

export default ThemeSelector;