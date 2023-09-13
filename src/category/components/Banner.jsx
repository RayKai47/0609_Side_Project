import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "../css/category.css";

const Banner = ({name}) => {
  return (
    <Container fluid className="p-0 category_banner">
      <Row className="category_banner_title">
        <Col sm={{offset:1}}>
          {/* <h2 className="text-light">{categoryName}</h2> */}
          <h1 className="text-light">{name.toUpperCase()}</h1>
        </Col>
      </Row>
    </Container>
  )
};

export default Banner;