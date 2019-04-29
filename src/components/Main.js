import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebase.js'; 
import { Link } from 'react-router-dom';

class Main extends Component {
    constructor(props){
      super(props);
      this.state = {pin: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    isPinValid() {
      const itemsRef = firebase.database().ref('groups');
      itemsRef.orderByChild("pin").equalTo(794667).on("child_added", function (snapshot) {
        console.log(snapshot.val());
      });
    }

    handleChange(event){
      this.setState({pin: event.target.value});
    }

    handleSubmit(event){
      event.preventDefault();
      this.isPinValid();
    }

    render() {
      return (
        <div id= "main" className= "container">
          <div className="d-flex justify-content-center">
                <h1>Groupling</h1>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="pin"></label>
                <input type="number" className="form-control" id="pin" placeholder="PIN" value={this.state.pin} onChange={this.handleChange} />
              </div>
              <div className="d-flex justify-content-center input-group-append">
                <button type="submit" className="btn btn-light">submit</button>
              </div>
              <div className="d-flex justify-content-center" id= "new-event-button">
                <Link to="/NewEvent">
                  <button type="button" className="btn btn-dark">new trip</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

  export default Main;