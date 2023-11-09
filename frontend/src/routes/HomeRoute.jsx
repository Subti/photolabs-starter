import React from "react";


import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation 
      topics={props.topics} 
      isFav={props.isFav} 
      currentTopic={props.currentTopic} 
      updateTopic={props.updateTopic} 
      darkMode={props.darkMode} 
      toggleDarkMode={props.toggleDarkMode} />
      <PhotoList photos={props.photos} favHandler={props.favHandler} isFav={props.isFav} openModal={props.openModal} currentTopic={props.currentTopic} />
    </div>
  );
}

export default HomeRoute;