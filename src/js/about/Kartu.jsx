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
                width="100%"
                src="https://tvlk.imgix.net/imageResource/2018/04/11/1523434487593-3acd3ab8242908aa4376c636f49903b2.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75"
              />
            </Col>
            <Col sm="8">
              <br />
              <p>
                EAZY HOLIDAY adalah perusahaan travel terkemuka di Asia Tenggara
                yang menyediakan berbagai kebutuhan perjalanan dalam satu
                platform, memungkinkan Anda untuk menciptakan momen bersama
                orang-orang terkasih. Kami menawarkan tiket pesawat, hotel,
                tiket kereta*, paket pesawat + hotel*, aktivitas & rekreasi*,
                produk-produk konektivitas*, transportasi bandara*, dan bus*.
              </p>
              <br />
              *Khusus di Indonesia
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm="8">
              <br />
              <br />
              <p>
                Bekerja sama dengan lebih dari 100 maskapai domestik dan
                internasional, Traveloka melayani lebih dari 200.000 rute
                penerbangan ke seluruh dunia. Kami pun memiliki inventori
                pemesanan akomodasi terbesar, bervariasi mulai dari hotel,
                apartemen, guest house, homestay, vila, dan resor. Semua itu
                didukung oleh lebih dari 40 metode pembayaran untuk seluruh
                pelanggan di di Indonesia, Thailand, Vietnam, Malaysia,
                Singapura, dan Filipina, serta customer service yang siap
                melayani selama 24 jam dalam bahasa lokal.
              </p>
            </Col>
            <Col sm="4">
              <img src="https://tvlk.imgix.net/imageResource/2018/04/11/1523433662511-f47a4f0578aed13d2d95d78b9c773d4f.svg?auto=compress%2Cformat&cs=srgb&ixlib=java-1.1.12&q=75" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
