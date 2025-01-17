import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_CURRENT_TOPIC: "SET_CURRENT_TOPIC",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
};

function reducer(state, action) {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return { ...state, isFav: { ...state.isFav, [action.payload]: true } };
    case "FAV_PHOTO_REMOVED":
      return { ...state, isFav: { ...state.isFav, [action.payload]: false } };
    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };
    case "SET_TOPIC_DATA":
      return { ...state, topicData: action.payload };
    case "SET_CURRENT_TOPIC":
      return { ...state, currentTopic: action.payload };
    case "SELECT_PHOTO":
      return { ...state, selectedPhoto: action.payload };
    case "DISPLAY_PHOTO_DETAILS":
      return { ...state, isModalOpen: action.payload };
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = function () {
  const [state, dispatch] = useReducer(reducer, {
    photoData: [],
    topicData: [],
    currentTopic: null,
    isModalOpen: false,
    selectedPhoto: null,
    isFav: {},
    darkMode: false,
  });

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
  };

  const updateToFavPhotoIds = function (photoId) {
    dispatch({
      type: !!state.isFav[photoId]
        ? ACTIONS.FAV_PHOTO_REMOVED
        : ACTIONS.FAV_PHOTO_ADDED,
      payload: photoId,
    });
  };

  const updateTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_CURRENT_TOPIC, payload: topicId });
  };

  const toggleDarkMode = () => {
    dispatch({ type: ACTIONS.TOGGLE_DARK_MODE, payload: !state.darkMode });
  };

  return {
    state,
    dispatch,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    updateTopic,
    toggleDarkMode,
  };
};

export default useApplicationData;
