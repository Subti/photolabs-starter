import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFav, setIsFav] = useState(false);
  const clickHandler = function() {
    setIsFav(!isFav);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => clickHandler()}>
        <FavIcon selected={isFav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;