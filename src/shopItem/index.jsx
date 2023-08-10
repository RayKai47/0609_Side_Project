import {React, useState} from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import './css/shopItem.css';
import {Heart} from 'phosphor-react';

const ShopItem = () => {
  const [itemNum, setItemNum] = useState(0);
  return (
    <Container className="shopItem">
      <Row>
        <Col md={6} className="shopItem_img">
          <img src="img/clothes7.jpeg" alt=""/>
        </Col>
        <Col md={6} className="shopItem_content">
          <Row className="h-100">
            {/* 上標題與內文 */}
            <Row className="shopItem_content_block align-self-start">
              <Col xs={12} className="shopItem_content_title">
                <h1 className="fs-3">灰色西裝外套</h1>
                <h4 className="fs-5 text-dark-emphasis">不失莊嚴的極簡風格</h4>
              </Col>
              <Col xs={12} className="mt-3">
                <div className="shopItem_content_info text-dark-emphasis">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam doloremque, doloribus quibusdam debitis enim autem hic possimus culpa fuga dicta nam. Harum expedita sunt libero temporibus modi distinctio blanditiis pariatur?
                </div>
              </Col>
            </Row>
            {/* 下樣式與數量、價格設定 */}
            <Row className="shopItem_content_block gy-4 justify-content-between align-self-end">
              <Col xs={12} className="shopItem_content_select">
                <h6>請選擇顏色</h6>
                <Row className="shopItem_content_type mt-3 px-3">
                  <Col xs={1} className="type_material"/>
                  <Col xs={1} className="type_material"/>
                  <Col xs={1} className="type_material"/>
                </Row>
              </Col>
              <Col xs={12} sm={6} md={4} className="shopItem_content_num">
                <h6>數量：</h6>
                <InputGroup size="sm" className="mt-3">
                  <Button onClick={()=>setItemNum((num)=>num+1)} variant="outline-secondary" id="button-addon1">+</Button>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    className="text-center"
                    value={itemNum}
                  />
                  {itemNum == 0 ? 
                    <Button
                      onClick={()=>setItemNum((num)=>num-1)}
                      variant="outline-secondary"
                      id="button-addon2"
                      disabled
                    >
                      -
                    </Button>
                  : 
                    <Button
                      onClick={()=>setItemNum((num)=>num-1)}
                      variant="outline-secondary"
                      id="button-addon2"
                    >-
                    </Button>
                  }
                </InputGroup>
              </Col>
              <Col xs={12} sm={6} className="shopItem_content_price align-self-end">
                <h4 className="text-end mb-1">NT$600<span className="text-secondary">/件</span></h4>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={2}>
                    <Button size="sm" variant="outline-danger"><Heart size={24}/></Button>
                  </Col>
                  <Col xs={5}>
                    <Button variant="outline-success">加入購物車</Button>
                  </Col>
                  <Col xs={5}>
                    <Button variant="outline-primary">直接購買</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  )
};

export default ShopItem;