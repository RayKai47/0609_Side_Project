import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import goodsData from '../infra/store/goodsData';
import Banner from './components/Banner';
import Goods from '../infra/commonComponents/Goods';

const Category = () => {
  const { category } = useParams();
  const categoryGood = goodsData.filter( good => good.category === category);
  return (
    <div className="shop">
      <Banner name={category}/>
      <Container>
        <Row xs={1} className="mt-5 justify-content-center">
          <Col>
            <Row lg={4} md={3} sm={2} xs={2}>
              {categoryGood.map((good)=>(
                <Goods good={good} key={good.name}/>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Category;