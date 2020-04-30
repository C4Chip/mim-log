import React from 'react';

export default class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddEvent(e) {
    e.preventDefault();
    const event = e.target.elements.event.value.trim();

    //get current time in here
    const datetime = new Date();
    const dateString = datetime.toLocaleDateString();
    const timeString = datetime.toLocaleTimeString();
    const datetimeString = dateString.concat(' ',timeString);
    const TimeEvent = datetimeString.concat(' ',event,'\r');

    const error = this.props.handleAddEvent(TimeEvent);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.event.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-event-error">{this.state.error}</p>}
        <form className="add-event" onSubmit={this.handleAddEvent}>
          <input className="add-event__input" type="text" name="event" />
          <button className="button">Add event</button>
        </form>
      </div>
    );
  }
}
