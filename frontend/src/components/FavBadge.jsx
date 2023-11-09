import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';
import DarkModeButton from './DarkModeButton';

const FavBadge = ({ isFavPhotoExist, darkMode, toggleDarkMode }) => {
  const isFav = Object.values(isFavPhotoExist).some((fav) => fav === true);

  return (
    <div className='fav-badge'>
      <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FavIcon displayAlert={isFav} selected={isFav}/>
    </div>
  ) 
};

export default FavBadge;