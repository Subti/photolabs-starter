import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} updateTopic={props.updateTopic} currentTopic={props.currentTopic} />
      <FavBadge isFavPhotoExist={props.isFav} darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
    </div>
  )
}

export default TopNavigation;