import React from 'react';
import moment from 'moment';
import Header from '../mimComponents/Header';

// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import { SingleDatePicker } from 'react-dates';

export default class CaseForm extends React.Component {
    constructor(props) {
        super (props);

        this.state ={
            mimNum: props.casee? props.casee.mimNum:' ',
            events: props.casee? props.casee.events:' ',
            createAt: props.casee? moment(props.casee.createAt): moment(),
            focused: false,
            error: ''  
        };
    }

    onMimNumChange = (e) =>{
        const mimNum = e.target.value;
        this.setState( ()=> ({mimNum}))
        // if ( !mimNum || mimNum.match(/^[Mm][Ii][Mm]\d+$/)){
        //     this.setState( ()=> ({mimNum}))
        // }
    }
    onEventsChange = (e) => {
        const eventss = e.target.value;
        const events = eventss.split(',');

        this.setState( () => ({events}))
    }
    onDateChange = (e) => {
        const createAt = e.target.value
        if (createAt) {
            this.setState( () => ({createAt}));
        }
    }
    onFocusChange = ({focused}) => {
        this.setState( () => ({ focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();

        if ( !this.state.mimNum || !this.state.events ) {
            this.setState( () => ( {error: 'submitted with nothing'}));
        }
        else{
            this.setState( () => ( {error:''}));
            console.log('submit');
            this.props.onSubmit({
                mimNum: this.state.mimNum,
                events: this.state.events,
                createAt: this.state.createAt.valueOf()
            })
        }

    }

    render() {
        return (
            <div>
                <Header subtitle={'For a better mim experience'} />
                
                    
                    {this.state.error && <p>{this.state.error}</p>}
                        
                            <form 
                            className="form-style-6 "
                            onSubmit={this.onSubmit}>
                                <div className="container">
                                <div className="widget">
                                <div className="event">
                                <input
                                    className="add-event__input"
                                    type="text"
                                    placeholder="Mim-Number"
                                    value={this.state.mimNum}
                                    onChange={this.onMimNumChange}
                                />
                                </div>
                                </div>
                                </div>

                                <div className="container">
                                <div className="widget">
                                <div className="event">
                                <textarea
                                    className="add-event__input"
                                    placeholder="Add Your Event"
                                    value={this.state.events}
                                    onChange={this.onEventsChange}
                                />
                                </div>
                                </div>
                                </div>

                                <div className="container">
                                <div className="widget">
                                <div className="event">
                                <input
                                    className="add-event__input"
                                    type="datetime-local"
                                    value={this.state.createAt}
                                    onChange={this.onDateChange}
                                />
                                </div>
                                </div>
                                </div>

                                <div className="container">
                                <button className="big-button">Save Change</button>
                                </div>

                                
                            </form>
                        
                    
                
            </div>
        )
    }
 

}