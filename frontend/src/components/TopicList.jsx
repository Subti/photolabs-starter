import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  const topics = props.topics.map((topic) => {
    return (
      <TopicListItem key={topic.id} {...topic} />
    )})

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;
