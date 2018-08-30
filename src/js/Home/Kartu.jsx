import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
export default class Kartu extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="4">
              <img
                src="http://eazyholidaytour.com/wp-content/uploads/2017/07/indonesia-tour.jpg"
                width="100%"
              />
              <div className="row-produk-package">
                <div className="desc">
                  <h3>INDONESIA</h3>
                </div>
              </div>
              <h1 />
            </Col>
            <Col sm="4">
              <img
                src="http://eazyholidaytour.com/wp-content/uploads/2017/07/indonesia-tour.jpg"
                width="100%"
              />
            </Col>
            <Col sm="4">
              <img
                src="http://eazyholidaytour.com/wp-content/uploads/2017/07/indonesia-tour.jpg"
                width="100%"
              />
            </Col>
            <Col sm="4">
              <img
                src="http://eazyholidaytour.com/wp-content/uploads/2017/07/indonesia-tour.jpg"
                width="100%"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
