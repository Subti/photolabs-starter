import React, { useEffect } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData, { ACTIONS } from 'hooks/useApplicationData';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, dispatch, setPhotoSelected, onClosePhotoDetailsModal, updateToFavPhotoIds, updateTopic } = useApplicationData();

  const { isModalOpen, selectedPhoto, isFav } = state;

  useEffect(() => {
    fetch(`/api/photos`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, [])

  useEffect(() => {
    fetch(`/api/topics`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, [])

  useEffect(() => {
    if (state.currentTopic) {
      fetch(`/api/topics/photos/${state.currentTopic}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    } else if (!state.currentTopic) {
      fetch(`/api/photos`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    }
  }, [state.currentTopic])

  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} openModal={setPhotoSelected} isFav={isFav} favHandler={updateToFavPhotoIds} currentTopic={state.currentTopic} updateTopic={updateTopic} />
      {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} closeModal={onClosePhotoDetailsModal} photos={state.photos} openModal={setPhotoSelected} favHandler={updateToFavPhotoIds} isFav={isFav} selectedFav={isFav[selectedPhoto.id]}/>}
    </div>
  );
};

export default App;
