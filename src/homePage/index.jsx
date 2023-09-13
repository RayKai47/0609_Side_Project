import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/shop.css'
import Banner from './components/Banner';
import GoodsList from './components/GoodsList';
import fadeIn from './asset/fadeIn.jpg';

const Shop = () => {
  return (
    <div className="shop">
      <Banner/>
        <Container className="p-0" fluid>
          <Row>
            <Col style={{backgroundImage: `url(${fadeIn})`}} className="shop_intro"/>
          </Row>
        </Container>
        <GoodsList/>
    </div>
  )
};

export default Shop;