import React, { Component } from 'react';
import Kartu2 from './Kartu2';
import Kartu from './Kartu';
export default class Main extends Component {
  render() {
    return (
      <div>
        <br />
        <center>
          <br />
          <h2>TOP DESTINATIONS</h2>
          <p>
            DISCOVER TOURS, ATTRACTIONS AND ACTIVITIES FOR YOUR NEXT ADVENTURE
          </p>
        </center>
        <Kartu />
        <br />
        <br />
        <center>
          <h2>EXPLORE EAZYHOLIDAY TOUR</h2>
          <p>EXPLORE YOUR THE BEST TRAVEL AGENT</p>
        </center>
        <Kartu2 />
      </div>
    );
  }
}
