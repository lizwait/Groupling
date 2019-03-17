import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/' component={Main}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
