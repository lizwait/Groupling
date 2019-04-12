import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import NewEvent from './components/NewEvent';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/NewEvent' component={NewEvent}/>
            <Route exact path='/View' component={View}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
