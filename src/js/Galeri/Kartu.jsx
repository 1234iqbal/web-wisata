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
                src="https://asset.kompas.com/data/photo/2013/04/25/1731088-wisatawan-di-makau-780x390.JPG"
                width="100%"
              />
            </Col>
            <Col sm="4">
              <img
                src="https://asset.kompas.com/data/photo/2014/12/31/1053173paull-hk780x390.jpg"
                width="100%"
              />
            </Col>
            <Col sm="4">
              <img
                src="https://evasulistiawaty.files.wordpress.com/2010/10/img_9124.jpg"
                width="100%"
              />
            </Col>
            <Col sm="4">
              <img
                src="http://cdn2.tstatic.net/belitung/foto/bank/images/kebudayaan-jerman_20160530_155257.jpg"
                width="100%"
              />
            </Col>
            <Col sm="4">
              <img
                src="http://www.nahkodawisata.com/wp-content/uploads/2016/03/nahkoda-wisata-bandung-family-gathering.jpg"
                width="100%"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
