import React, { useState } from 'react';
import { Moon, Sun } from 'react-feather';
import useDarkMode from '../hooks/darkmode';

function DarkMode() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(colorTheme === 'light');

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed z-40 transition-all p-2 right-4 top-4 bg-white dark:text-white rounded-full dark:bg-black hover:cursor-pointer
                    ring-2 ring-black dark:ring-white"
    >
      {darkMode
        ? <Moon onClick={toggleDarkMode} />
        : <Sun onClick={toggleDarkMode} />}
    </div>
  );
}

export default DarkMode;
