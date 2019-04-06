import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebase.js'; 

class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: '',
            stayWhere: '',
            stayWhen: '',
            stayContact: '',
            stayNotes: '',
            activitiesActivity: '',
            activitiesWhere: '',
            activitiesDate: '',
            activitiesTime: '',
            activitiesContact: '',
            activitiesNotes: '',
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
          stay: {
            where: this.state.stayWhere,
            when: this.state.stayWhen,
            contact: this.state.stayContact,
            stay: this.state.stayContact,
            notes: this.state.stayNotes,
          },  
          activities: {
            activity: this.state.activitiesActivity,
            where: this.state.activitiesWhere,
            date: this.state.activitiesDate,
            time: this.state.activitiesTime,
            contact: this.state.activitiesContact,
            notes: this.state.activitiesNotes,
          }
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
                            <input className="form-control" type="text" placeholder="Month, Day-Day, Year" name="stayWhen" onChange={this.handleChange} value={this.state.stayWhen} />
                            <label htmlFor="exampleFormControlTextarea1">Contact</label>
                            <input className="form-control" type="text" placeholder="Phone Number" name="stayContact" onChange={this.handleChange} value={this.state.stayContact} />
                            <label htmlFor="exampleFormControlTextarea1">Notes</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="stayNotes" onChange={this.handleChange} value={this.state.stayNotes}></textarea>
                            <button type="submit" className="btn btn-light">save</button>
                        </form>
                    </div>
                    <div id="activities">
                        <h2>Activities</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="exampleFormControlTextarea1"></label>
                            <input className="form-control" type="text" placeholder="Activity" name="activitiesActivity" onChange={this.handleChange} value={this.state.activitiesActivity} />
                            <label htmlFor="exampleFormControlTextarea1">Where</label>
                            <input className="form-control" type="text" placeholder="Link" name="activitiesWhere" onChange={this.handleChange} value={this.state.activitiesLink} />
                            <label htmlFor="exampleFormControlTextarea1">Date</label>
                            <input className="form-control" type="text" placeholder="Month, Day-Day, Year" name="activitiesDate" onChange={this.handleChange} value={this.state.activitiesDate} />
                            <label htmlFor="exampleFormControlTextarea1">Time</label>
                            <input className="form-control" type="text" placeholder="0:00 AM/PM - 0:00 AM/PM" name="activitiesTime" onChange={this.handleChange} value={this.state.activitiesTime} />
                            <label htmlFor="exampleFormControlTextarea1">Contact</label>
                            <input className="form-control" type="text" placeholder="Phone Number" name="activitiesContact" onChange={this.handleChange} value={this.state.activitiesContact} />
                            <label htmlFor="exampleFormControlTextarea1">Notes</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="activitiesNotes" onChange={this.handleChange} value={this.state.activitiesNotes}></textarea>
                            <button type="submit" className="btn btn-light">add</button>
                        </form>
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



