import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebase.js'; 

class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            stayWhere: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    handleSubmit(event) {
        event.preventDefault();
        const itemsRef = firebase.database().ref('groups');
        const item = {
          stayWhere: this.state.stayWhere,
          
        }
        itemsRef.push(item);
        // this.setState({
        //   currentItem: '',
        //   username: ''
        // });
      }


    render() {
        return (
            <div>
                <div id="title">
                    <h1>Groupling</h1>
                    <h4>New Event</h4>
                </div>
                <div>
                    <div id="pin-number">{this.state.pin}</div>
                </div>
                <div id="formFormat">
                    <div id="stay">
                        <h2>Stay</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="exampleFormControlTextarea1">Where</label>
                            <input className="form-control" type="text" placeholder="Link" name="stayWhere" onChange={this.handleChange} value={this.state.stayWhere} />
                            <label htmlFor="exampleFormControlTextarea1">When</label>
                            <input className="form-control" type="text" placeholder="Month, Day-Day, Year" />
                            <label htmlFor="exampleFormControlTextarea1">Contact</label>
                            <input className="form-control" type="text" placeholder="Phone Number" />
                            <label htmlFor="exampleFormControlTextarea1">Notes</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <button type="submit" className="btn btn-light">save</button>
                        </form>
                    </div>
                    <div id="activities">
                        <h2>Activities</h2>
                        <label htmlFor="exampleFormControlTextarea1">Activity</label>
                        <input className="form-control" type="text" placeholder="Activity" />
                        <label htmlFor="exampleFormControlTextarea1">Where</label>
                        <input className="form-control" type="text" placeholder="Link" />
                        <label htmlFor="exampleFormControlTextarea1">When</label>
                        <input className="form-control" type="text" placeholder="Month, Day-Day, Year" />
                        <label htmlFor="exampleFormControlTextarea1">Time</label>
                        <input className="form-control" type="text" placeholder="0:00 AM/PM - 0:00 AM/PM" />
                        <label htmlFor="exampleFormControlTextarea1">Contact</label>
                        <input className="form-control" type="text" placeholder="Phone Number" />
                        <label htmlFor="exampleFormControlTextarea1">Notes</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type="button" className="btn btn-light">add</button>
                    </div>
                    <div id="group">
                        <h2>Group</h2>
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Social</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Flight Arrival</th>
                                <th scope="col">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>
                                <tr>
                                <th scope="row"></th>
                                <td colSpan="2"></td>
                                <td></td>
                                <td></td>
                                </tr>
                            </tbody>
                            </table>
                        <h4>New Entry</h4>
                        <label htmlFor="exampleFormControlTextarea1">Name</label>
                        <input className="form-control" type="text" placeholder="Name" />
                        <label htmlFor="exampleFormControlTextarea1">Social</label>
                        <input className="form-control" type="text" placeholder="Link" />
                        <span>
                        <input type="radio" name="gender" value="male" /> Twitter
                        <input type="radio" name="gender" value="female" /> GitHub
                        <input type="radio" name="gender" value="other" /> Instagram <br />
                        </span>
                        <label htmlFor="exampleFormControlTextarea1">Phone Number</label>
                        <input className="form-control" type="text" placeholder="+1-333-555-1234" />
                        <label htmlFor="exampleFormControlTextarea1">Flight Arrival</label>
                        <input className="form-control" type="text" placeholder="Day, Time" />
                        <label htmlFor="exampleFormControlTextarea1">Notes</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type="button" className="btn btn-light">add</button>
                    </div>
                </div>
            </div>
        );
    }

    pin() {
        this.setState({pin: (100000 + Math.floor(Math.random() * 900000))});
    }
}

export default NewEvent;



