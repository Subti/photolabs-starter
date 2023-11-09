import React, { useEffect } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData, { ACTIONS } from 'hooks/useApplicationData';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, dispatch, setPhotoSelected, onClosePhotoDetailsModal, updateToFavPhotoIds, updateTopic, toggleDarkMode } = useApplicationData();

  const { isModalOpen, selectedPhoto, isFav, darkMode } = state;

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

  useEffect(() => {
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} darkMode={darkMode} toggleDarkMode={toggleDarkMode} openModal={setPhotoSelected} isFav={isFav} favHandler={updateToFavPhotoIds} currentTopic={state.currentTopic} updateTopic={updateTopic} />
      {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} closeModal={onClosePhotoDetailsModal} photos={state.photoData} openModal={setPhotoSelected} favHandler={updateToFavPhotoIds} isFav={isFav} selectedFav={isFav[selectedPhoto.id]}/>}
    </div>
  );
};

export default App;
