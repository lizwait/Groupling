import React, { Component } from 'react';
import '../App.css';
import Table from './Table';
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
            activitiesLink: '',
            activitiesWhere: '',
            activitiesDate: '',
            activitiesTime: '',
            activitiesContact: '',
            activitiesNotes: '',
            activity: [],
            groupName: '',
            groupSocial: '',
            groupContact: '',
            groupFlightArrival: '',
            groupFlightDeparture: '',
            groupNotes: '',
            group: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleAddGroup = this.handleAddGroup.bind(this);
        this.handleAddActivity = this.handleAddActivity.bind(this);
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
          activities: this.state.activity,
          group: this.state.group,
        }

        itemsRef.push(item);
      }

    handleAddActivity() {
        this.setState(function(state, props) {
            state.activity.push({
                activitiesActivity: state.activitiesActivity,
                activitiesLink: state.activitiesLink,
                activitiesWhere: state.activitiesWhere,
                activitiesDate: state.activitiesDate,
                activitiesTime: state.activitiesTime,
                activitiesContact: state.activitiesContact,
                activitiesNotes: state.activitiesNotes,
            })

            return {
                activity: state.activity
            };
        });

        this.setState({ activitiesActivity: '' });
        this.setState({ activitiesLink: '' });
        this.setState({ activitiesWhere: '' });
        this.setState({ activitiesDate: '' });
        this.setState({ activitiesTime: '' });
        this.setState({ activitiesContact: '' });
        this.setState({ activitiesNotes: '' });
        
    }  

    handleAddGroup() {
        this.setState(function(state, props) {
            state.group.push({
                groupName: state.groupName,
                groupSocial: state.groupSocial,
                groupContact: state.groupContact,
                groupFlightArrival: state.groupFlightArrival,
                groupFlightDeparture: state.groupFlightDeparture,
                groupNotes: state.groupNotes,
            })

            return {
                group: state.group
            };
        });

        this.setState({ groupName: '' });
        this.setState({ groupSocial: '' });
        this.setState({ groupContact: '' });
        this.setState({ groupFlightArrival: '' });
        this.setState({ groupFlightDeparture: '' });
        this.setState({ groupNotes: '' });
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
                            <input className="form-control" type="date" placeholder="Month, Day-Day, Year" name="stayWhen" onChange={this.handleChange} value={this.state.stayWhen} />
                            <label htmlFor="exampleFormControlTextarea1">Contact</label>
                            <input className="form-control" type="number" placeholder="Phone Number" name="stayContact" onChange={this.handleChange} value={this.state.stayContact} />
                            <label htmlFor="exampleFormControlTextarea1">Notes</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="stayNotes" onChange={this.handleChange} value={this.state.stayNotes}></textarea>
                            <button type="submit" className="btn btn-light">save</button>
                        </form>
                    </div>
                    <div id="activities">
                        <h2>Activities</h2>
                        <form>
                            <label htmlFor="exampleFormControlTextarea1"></label>
                            <input className="form-control" type="text" placeholder="Activity" name="activitiesActivity" onChange={this.handleChange} value={this.state.activitiesActivity} />
                            <label htmlFor="exampleFormControlTextarea1">Where</label>
                            <input className="form-control" type="text" placeholder="Where" name="activitiesWhere" onChange={this.handleChange} value={this.state.activitiesWhere} />
                            <label htmlFor="exampleFormControlTextarea1">Link</label>
                            <input className="form-control" type="text" placeholder="Link" name="activitiesLink" onChange={this.handleChange} value={this.state.activitiesLink} />
                            <label htmlFor="exampleFormControlTextarea1">Date</label>
                            <input className="form-control" type="date" placeholder="Month, Day-Day, Year" name="activitiesDate" onChange={this.handleChange} value={this.state.activitiesDate} />
                            <label htmlFor="exampleFormControlTextarea1">Time</label>
                            <input className="form-control" type="time" placeholder="0:00 AM/PM - 0:00 AM/PM" name="activitiesTime" onChange={this.handleChange} value={this.state.activitiesTime} />
                            <label htmlFor="exampleFormControlTextarea1">Contact</label>
                            <input className="form-control" type="number" placeholder="Phone Number" name="activitiesContact" onChange={this.handleChange} value={this.state.activitiesContact} />
                            <label htmlFor="exampleFormControlTextarea1">Notes</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="activitiesNotes" onChange={this.handleChange} value={this.state.activitiesNotes}></textarea>
                            <button type="button" className="btn btn-light" onClick={this.handleAddActivity}>add</button>
                        </form>
                    </div>
                    <div id="group">
                        <h2>Group</h2>
                        <Table data={this.state.group} />

                        <h4>New Entry</h4>
                        <form>
                            <label htmlFor="exampleFormControlTextarea1">Name</label>
                            <input className="form-control" type="text" placeholder="Name" name="groupName" onChange={this.handleChange} value={this.state.groupName}/>
                            <label htmlFor="exampleFormControlTextarea1">Social</label>
                            <input className="form-control" type="text" placeholder="Link" name="groupSocial" onChange={this.handleChange} value={this.state.groupSocial}/>
                            <label htmlFor="exampleFormControlTextarea1">Contact</label>
                            <input className="form-control" type="number" placeholder="+1-333-555-1234" name="groupContact" onChange={this.handleChange} value={this.state.groupContact}/>
                            <label htmlFor="exampleFormControlTextarea1">Flight Arrival</label>
                            <input className="form-control" type="text" placeholder="Date, Time" name="groupFlightArrival" onChange={this.handleChange} value={this.state.groupFlightArrival}/>
                            <label htmlFor="exampleFromControlTextarea1">Flight Departure</label>
                            <input className="form-control" type="text" placeholder="Date, Time" name="groupFlightDeparture" onChange={this.handleChange} value={this.state.groupFlightDeparture}/>
                            <label htmlFor="exampleFormControlTextarea1">Notes</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="groupNotes" onChange={this.handleChange} value={this.state.groupNotes}></textarea>
                            <button type="button" className="btn btn-light" onClick={this.handleAddGroup}>add</button>
                        </form>
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



