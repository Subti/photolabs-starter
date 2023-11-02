import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos.map((photo) => {
    return (
      <PhotoListItem key={photo.id} {...photo} clickHandler={props.clickHandler} isFav={props.isFav[photo.id]}/>
    )})

  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;
