import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos.map((photo) => {
    return (
      <PhotoListItem key={photo.id} {...photo} photoData={photo} favHandler={props.favHandler} isFav={props.isFav[photo.id]} openModal={props.openModal}/>
    )})

  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;
