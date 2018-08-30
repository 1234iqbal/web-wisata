import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const items = [
  {
    src: 'https://www.dwidayatour.co.id/assets/images/promo/cruise-SLIDER.jpg'
  },
  {
    src:
      'https://www.dwidayatour.co.id/assets/images/promo/SLIDER_HARGA_TK-01.jpg'
  },
  {
    src:
      'https://www.dwidayatour.co.id/assets/images/promo/SLIDER_Promo_Hotel.jpg'
  }
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;
