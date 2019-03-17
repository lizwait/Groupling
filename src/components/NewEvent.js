import React, { Component } from 'react';
import '../App.css';

class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {pin: ''};
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Groupling</h1>
                    <h4>New Event</h4>
                </div>
                <div>
                    <button id="pin-button" type="button" className="btn btn-success" onClick={this.pin.bind(this)}>group pin</button>
                    <div id="pin-number">{this.state.pin}</div>
                </div>
                <div id="stay">
                    <h2>Stay</h2>
                    <label htmlFor="exampleFormControlTextarea1">Where</label>
                    <input className="form-control" type="text" placeholder="Link" />
                    <label htmlFor="exampleFormControlTextarea1">When</label>
                    <input className="form-control" type="text" placeholder="Month, Day-Day, Year" />
                    <label htmlFor="exampleFormControlTextarea1">Contact</label>
                    <input className="form-control" type="text" placeholder="Phone Number" />
                    <label htmlFor="exampleFormControlTextarea1">Notes</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="button" className="btn btn-light">Save</button>
                </div>
                <div id="activities">
                    <h2>Activities</h2>

                </div>
                <div id="group">
                    <h2>Group</h2>

                </div>
            </div>
        );
    }

    pin() {
        this.setState({pin: (100000 + Math.floor(Math.random() * 900000))});
    }
}

export default NewEvent;



