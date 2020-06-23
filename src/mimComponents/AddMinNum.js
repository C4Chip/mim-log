import React from 'react';

export default class AddMimNum extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddMimNum = this.handleAddMimNum.bind(this);
        this.state = {
          error: undefined
        };
      }
      handleAddMimNum(e) {
        e.preventDefault();
        const mimnum = e.target.elements.mimnum.value.trim();
    
        //get mimnum in here
        const mintext = 'Mim Number is:';
        const mimnunmber = mintext.concat(' ',mimnum,'\r');
    
        const error = this.props.handleAddMimNum(mimnunmber);
    
        this.setState(() => ({ error }));
    
        if (!error) {
          e.target.elements.mimnum.value = '';
        }
      }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-event-error">{this.state.error}</p>}
                <form className="add-event" onSubmit={this.handleAddMimNum}>
                    <input className="add-event__input" type="text" name="mimnum" />
                    <button className="button">Add-MimNum</button>
                </form>
            </div>
        )
    }
    
}