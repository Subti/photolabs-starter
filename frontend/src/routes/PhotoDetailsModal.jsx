import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import getSimilarPhotos from '../helpers/helpers';

const PhotoDetailsModal = (props) => {
  const similarPhotos = Object.values(props.photo.similar_photos)
  const similarPhotoData = getSimilarPhotos(similarPhotos, props.photos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.closeModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <div className="photo-details-modal__image-container">
        <PhotoFavButton favHandler={props.favHandler} isFav={props.selectedFav} photoId={props.photo.id} />
        <img className="photo-details-modal__image" src={props.photo.urls.regular} alt="photo" />
        </div>
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
          <PhotoList photos={similarPhotoData} favHandler={props.favHandler} isFav={props.isFav} openModal={props.openModal}/>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
