import React, { Component } from 'react';
import Kartu from './Galeri/Kartu';
import Menu from './Home/Menu';
import Footer from './Home/Footer';
import Jumbo from './Galeri/Jumbo';

export default class Galeri extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Jumbo />
        <center>
          <h2> Galeri </h2>
        </center>
        <br />
        <Kartu />
        <Footer />
      </div>
    );
  }
}
