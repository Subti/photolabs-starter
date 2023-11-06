import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span onClick={() => props.currentTopic === props.id ? props.updateTopic(null) : props.updateTopic(props.id)} >{props.title}</span>
    </div>
  );
};

export default TopicListItem;
