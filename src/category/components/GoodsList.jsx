import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Goods from '../infra/commonComponents/Goods';

const GoodsList = ({categoryGoods}) => {
  return (
    <Container>
      <Row xs={1} className="mt-5 justify-content-center">
        <Col md={7} className="shop_title text-light mb-3">
          <h3>All Products</h3>
        </Col>
        <Col>
          <Row lg={4} md={3} sm={2} xs={2}>
            {categoryGoods.map((good)=>(
              <Goods good={good} key={good.name}/>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default GoodsList