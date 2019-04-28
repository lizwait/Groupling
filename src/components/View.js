import React, { Component } from 'react';
import '../App.css';
import ActivityTable from './ActivityTable';
import GroupTable from './GroupTable';
import firebase from '../firebase.js'; 

class View extends React.Component {

    render() {
        return (
        <div>
            <div id="title">
                <h1>Groupling</h1>
                <h4>New Trip</h4>
            </div>
            <div id="format">
                <div id="stay">
                    <h2>Stay</h2>
                    <div>
                        <h5>Where</h5>
                        <p></p>
                        <h5>Link</h5>
                        <p></p>
                        <h5>Check In</h5>
                        <p></p>
                        <h5>Check Out</h5>
                        <p></p>
                        <h5>Contact</h5>
                        <p></p>
                        <h5>Notes</h5>
                        <p></p>
                    </div>
                </div>
                <div id="activities">
                    <h2>Activities</h2>
                    {/*<ActivityTable data={} />*/}
                </div>
                <div id="group">
                    <h2>Group</h2>
                    {/*<GroupTable data={} />*/}
                </div>

            </div>
        </div>
        );
    }

}

export default View;
