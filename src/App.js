import React, { Component } from 'react';
import './App.css';
import NewEvent from './components/NewEvent';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/' component={NewEvent}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
