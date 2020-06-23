import React from 'react';
import Header from './Header';
import JumpMimMan from './JumpMimMan';
import AddEvent from './AddEvents';
import AddMimNum from './AddMinNum';
import ShowMimNum from './ShowMimNum';
import Events from './Events';
import {saveAs} from 'file-saver';


export default class Mimlog extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddEvent = this.handleAddEvent.bind(this);
      this.handleAddMimNum = this.handleAddMimNum.bind(this);
      this.handleSaveTxt = this.handleSaveTxt.bind(this);
      this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
      this.state = {
        mimnumber:'',
        events: []
      };
    }
    componentDidMount() {
      try {
        const json = localStorage.getItem('events');
        const events = JSON.parse(json);
  
        if (events) {
          this.setState(() => ({ events }));
        }
      } catch (e) {
        // Do nothing at all
      }
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevState.events.length !== this.state.events.length) {
        const json = JSON.stringify(this.state.events);
        localStorage.setItem('events', json);
      }
    }
    componentWillUnmount() {
      console.log('componentWillUnmount');
    }

    handleSaveTxt() {
      var FileSave = require('file-saver');
      var mimarray = [this.state.mimnumber];
      const needToSave = (mimarray).concat('\r', 'Time-Line: \r',this.state.events);
      var file = new File(needToSave, "Time-Line.txt", {type: "text/plain;charset=utf-8"});
      FileSave.saveAs(file);
    }

    handleDeleteEvent(eventToRemove) {
      this.setState((prevState) => ({
        events: prevState.events.filter((event) => eventToRemove !== event)
      }));
    }
    
    handleAddEvent(event) {
      if (!event) {
        return 'Enter valid value to add item';}
      // } else if (this.state.events.indexOf(event) > -1) {
      //   return 'This event already exists';
      // }
  
      this.setState((prevState) => ({
        events: prevState.events.concat(event)
      }));
    }

    handleAddMimNum(mimnumber) {
        this.setState( ()=>({mimnumber}));
    }

    render() {
      const subtitle = 'For a better mim experience';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className="container">
            
          <div className="widget">
            <Events
              events={this.state.events}
              handleSaveTxt={this.handleSaveTxt}
              handleDeleteEvent={this.handleDeleteEvent}
            />
            <AddEvent
              handleAddEvent={this.handleAddEvent}
            />
          </div>

          <div className="widget">
          <ShowMimNum
            mimnumber={this.state.mimnumber}
          />
          <AddMimNum
            handleAddMimNum={this.handleAddMimNum}
          />
          </div>

          <JumpMimMan/>
        </div>
        </div>
      );
    }
  }
  