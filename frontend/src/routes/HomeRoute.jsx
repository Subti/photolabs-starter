import React from "react";
import { useState } from 'react';


import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isFav={props.isFav}/>
      <PhotoList photos={props.photos} favHandler={props.favHandler} isFav={props.isFav} openModal={props.openModal}/>
    </div>
  );
}

export default HomeRoute;