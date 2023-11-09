import React from 'react';
import '../styles/DarkModeButton.scss';
import darkModeIcon from '../assets/darkModeIcon.png';
import lightModeIcon from '../assets/lightModeIcon.png';

const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-button" onClick={toggleDarkMode}>
      {darkMode ? <img src={lightModeIcon} alt="Light-Mode" className="sun"/> : <img src={darkModeIcon} alt="Dark-Mode" className="moon"/>}
    </div>
  );
};

export default DarkModeButton;