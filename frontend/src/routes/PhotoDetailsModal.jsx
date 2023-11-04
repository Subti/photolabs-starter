import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  console.log(props.photo)
  const similarPhotos = Object.values(props.photo.similar_photos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.closeModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <PhotoFavButton favHandler={props.favHandler} isFav={props.selectedFav} photoId={props.photo.id} />
        <img className="photo-details-modal__image" src={props.photo.urls.regular} alt="photo" />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={props.photo.user.profile} alt="user profile" />
          <div className="photo-details-modal__photographer-info">
            <span>{props.photo.user.name}</span>
            <div className="photo-details-modal__photographer-location">
              <span>{props.photo.location.city}, {props.photo.location.country}</span>
            </div>
          </div>
        </div>
        <h2>Similar Photos</h2>
        <div className="photo-details-modal__images">
          <PhotoList photos={similarPhotos} favHandler={props.favHandler} isFav={props.isFav}/>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
