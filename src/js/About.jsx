import React, { Component } from 'react';
import Jumbo from './about/Jumbo';
import Menu from './Home/Menu';
import Kartu from './about/Kartu';
import Footer from './Home/Footer';
export default class About extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Jumbo />
        <center>
          <h2> Tentang Kami </h2>
        </center>
        <Kartu />
        <Footer />
      </div>
    );
  }
}
