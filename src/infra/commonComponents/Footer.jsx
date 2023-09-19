import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer text-light">
      <Container className="py-5">
        <Row className="mb-5">
          <Col>
            <h3 className="footer_brand">極度紳士</h3>
          </Col>
        </Row>
        <Row className="gy-5" xs={1} md={2} lg={4}>
          <Col>
            <Row className="gy-2" xs={1}>
              <Col>
                <h5>紳士文化</h5>
              </Col>
              <Col>
                <h6>最新消息</h6>
              </Col>
              <Col>
                <h6>關於紳士</h6>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="gy-2" xs={1}>
              <Col>
                <h5>開始購物</h5>
              </Col>
              <Col>
                <Link className="text-light" to="/category/suit"><h6>套裝</h6></Link>
              </Col>
              <Col>
                <Link className="text-light" to="/category/tshirt"><h6>上衣</h6></Link>
              </Col>
              <Col>
                <Link className="text-light" to="/category/jacket"><h6>外套</h6></Link>
              </Col>
              <Col>
                <Link className="text-light" to="/category/jeans"><h6>褲子</h6></Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="gy-2" xs={1}>
              <Col>
                <h5>會員專區</h5>
              </Col>
              <Col>
                <span>會員中心</span>
              </Col>
              <Col>
                <span>追蹤清單</span>
              </Col>
              <Col>
                <span>訂單系統</span>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="gy-2" xs={1}>
              <Col>
                <h5>聯絡我們</h5>
              </Col>
              <Col>
                <span>聯絡方式</span>
              </Col>
              <Col>
                <span>加入我們</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Footer;