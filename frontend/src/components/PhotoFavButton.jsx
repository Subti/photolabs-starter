import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => props.favHandler(props.photoId)}>
        <FavIcon selected={props.isFav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;