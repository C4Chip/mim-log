import React from 'react';

const Event = (props) => {
  return (
    <div className="event">
      <p className="event__text">{props.count}. {props.eventText}</p>
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteEvent(props.eventText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Event;
