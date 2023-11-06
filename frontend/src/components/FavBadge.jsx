import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  const isFav = Object.values(isFavPhotoExist).some((fav) => fav === true);

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFav} selected={isFav}/>
    </div>
  ) 
};

export default FavBadge;