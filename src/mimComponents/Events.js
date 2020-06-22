import React from 'react';
import Event from './Event';

const Events = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Events</h3>
      <button
        className="button"
        onClick={props.handleSaveTxt}
      >
        Save as txt
      </button>
    </div>

    {props.events.length === 0 && <p className="widget__message">Please add an event to get started!</p>}
    {
      props.events.map((event, index) => (
        <Event
          key={event}
          eventText={event}
          count={index + 1}
          handleDeleteEvent={props.handleDeleteEvent}
        />
      ))
    }
  </div>
);

export default Events;
