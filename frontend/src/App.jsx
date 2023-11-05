import React from 'react';
import { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, dispatch, setPhotoSelected, onClosePhotoDetailsModal, updateToFavPhotoIds } = useApplicationData();

  const { isModalOpen, selectedPhoto, isFav } = state;

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} openModal={setPhotoSelected} isFav={isFav} favHandler={updateToFavPhotoIds} />
      {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} closeModal={onClosePhotoDetailsModal} photos={photos} openModal={setPhotoSelected} favHandler={updateToFavPhotoIds} isFav={isFav} selectedFav={isFav[selectedPhoto.id]}/>}
    </div>
  );
};

export default App;
