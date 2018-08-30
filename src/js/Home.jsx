import React, { Component } from 'react';
import Menu from './Home/Menu';
import Slider from './Home/Slider';
import Main from './Home/Main';
import Footer from './Home/Footer';
import Atas from './Home/atas';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Atas />
        <Menu />
        <Slider />
        <Main />
        <Footer />
      </div>
    );
  }
}
