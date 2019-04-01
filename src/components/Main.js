import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebase.js'; 

class Main extends Component {
    render() {
      return (
        <div id= "main" class= "container">
          <div className="d-flex justify-content-center">
                <h1>Groupling</h1>
          </div>
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="pin"></label>
                <input type="password" className="form-control" id="pin" placeholder="PIN" />
              </div>
              <div className="d-flex justify-content-center input-group-append">
                <button type="button" className="btn btn-light">submit</button>
              </div>
              <div className="d-flex justify-content-center" id= "new-event-button">
                <button type="button" className="btn btn-dark">new trip</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

  export default Main;