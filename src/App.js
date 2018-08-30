import React, { Component } from 'react';
import Home from './js/Home';
import About from './js/About';
import Tiket from './js/Tiket';
import Galeri from './js/Galeri';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Tiket" component={Tiket} />
        <Route path="/Galeri" component={Galeri} />
      </Switch>
    );
  }
}

export default App;
