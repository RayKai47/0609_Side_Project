import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./css/memberCenter.css";

const MemberCenter = () => {
  return (
    <div className="memberCenter">
      <div className="memberCenter_aside">
        <Accordion className="memberCenter_aside">
          <Accordion.Item eventKey="0">
            <Accordion.Header>會員中心</Accordion.Header>
            <Accordion.Body>
            <Link className="memberCenter_aside_link" to="/memberCenter">會員首頁</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>會員功能</Accordion.Header>
            <Accordion.Body>
              <Link className="memberCenter_aside_link" to="/memberCenter/shopCart">購物車</Link>
              <Link className="memberCenter_aside_link" to="/memberCenter/favoriteProduct">喜好項目</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="memberCenter_panel">
        <h4>Panel</h4>
      </div>
    </div>
  )
}

export default MemberCenter