import React from "react";
import { useState } from 'react';


import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

const HomeRoute = (props) => {
  const [isFav, setIsFav] = useState(false);
  const clickHandler = function(photoId) {
    setIsFav(prevState => ({
      ...prevState,
      [photoId]: !prevState[photoId]
    }));
  };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isFav={isFav}/>
      <PhotoList photos={props.photos} clickHandler={clickHandler} isFav={isFav}/>
    </div>
  );
}

export default HomeRoute;