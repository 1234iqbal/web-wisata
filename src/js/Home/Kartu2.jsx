import React, { Component } from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import './index.css';
export default class Kartu2 extends Component {
  render() {
    return (
      <div className="img-grid-home">
        <Container>
          <Row>
            <Col sm="3">
              <div className="title">
                <NavLink href="/Galeri">
                  <img
                    src="http://eazyholidaytour.com/wp-content/uploads/2017/07/gallery.jpg"
                    width="100%"
                  />
                  <center>
                    <h4>Check Our Gallery</h4>
                  </center>
                </NavLink>
              </div>
            </Col>
            <Col sm="3">
              <NavLink href="/About">
                <img
                  src="http://eazyholidaytour.com/wp-content/uploads/2017/07/about.jpg"
                  width="100%"
                />
                <center>
                  <h4>About</h4>
                </center>
              </NavLink>
            </Col>
            <Col sm="3">
              <NavLink href="/Galeri">
                <img
                  src="http://eazyholidaytour.com/wp-content/uploads/2017/07/car-rental.jpg"
                  width="100%"
                  height="50%"
                />
                <center>
                  <h4>Check Our Gallery</h4>
                </center>
              </NavLink>
            </Col>
            <Col sm="3">
              <NavLink href="/Galeri">
                <img
                  src=" http://eazyholidaytour.com/wp-content/uploads/2017/07/2-can-go.jpg"
                  width="100%"
                />
                <center>
                  <h4>Check Our Gallery</h4>
                </center>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
