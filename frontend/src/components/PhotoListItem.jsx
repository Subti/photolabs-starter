import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return(
      <div className="photo-list__item">
        <PhotoFavButton />
        <img src={props.urls.regular} className="photo-list__image" alt="A photo"/>
        <div className="photo-list__user-details">
          <div className="photo-list__user-profile">
            <img src={props.user.profile} className="photo-list__user-profile" alt="A profile"/>
          </div>
            <div className="photo-list__user-info">
              <span>{props.user.name}</span>
              <div className="photo-list__user-location">
                <span>{props.location.city}, {props.location.country}</span>
              </div>
            </div>
        </div>
      </div>
  )
};

export default PhotoListItem;
