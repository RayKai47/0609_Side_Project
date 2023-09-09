import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import './css/shopItem.css';
import {Heart} from 'phosphor-react';
import goodsData from '../homePage/data/goodsData';

const ShopItem = () => {
  const [itemNum, setItemNum] = useState(1);
  const {id} = useParams();
  // 1.因為預設值是null,所以此值為空 (以換selectedGood用法)
  // const [selectGood, setSelectGood] = useState(null);
  const selectedGood = goodsData.find(good => good.id == id);
  // 3. useEffect在執行完第一次渲染之後，才會執行（抓到資料
  // 更動之後selectGood就會有值，再次渲染時則不為空了
  // useEffect(() => {
  //   setSelectGood(selectedGood);
  //   console.log(selectedGood);
  //   console.log(selectGood);
  // }, [id]);
  const [selectedType, setSelectedType] = useState(null);

  const handleSelected = (type) => {
    if(selectedType == type){
      setSelectedType(null)
    } else {
      setSelectedType(type)
    };
  };

  const dispatch = useDispatch()

  const addOrder = (good, type) => {
    selectedType == null ? 
      alert("請選擇樣式")
    :
      dispatch({
        type: "ADD_ORDER",
        payload:{
          itemData: good,
          material: type,
          itemNum: itemNum,
        }
      })
  }

  return (
    <Container className="shopItem">
      <Row>
        <Col md={6} className="shopItem_img">
          <img src={`/img/${selectedGood.img}`} alt=""/>
        </Col>
        <Col md={6} className="shopItem_content">
          <Row className="h-100">
            {/* 上標題與內文 */}
            <Row className="shopItem_content_block align-self-start">
              <Col xs={12} className="shopItem_content_title">
                {/* 2.「？」是如果沒值先返回，因為預設值為空，所以先行返回，繼續執行（繼續執行 
                4.再次執行後有值，渲染出指定值*/}
                <h1 className="fs-3">{selectedGood.name}</h1>
                <h4 className="fs-5 text-dark-emphasis">{selectedGood.subTitle}</h4>
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
                  {selectedGood.material.map((type,idx)=>(
                    <Col
                      xs={1}
                      key={idx}
                      className={selectedType === type ? "type_material type_selected": "type_material"}
                      style={{backgroundColor: type}}
                      onClick={()=> handleSelected(type)}/>
                  ))}
                </Row>
              </Col>

              <Col xs={12} sm={6} md={4} className="shopItem_content_num">
                <h6>數量：</h6>
                <InputGroup size="sm" className="mt-3">
                  {itemNum == 0 ? 
                    <Button
                      onClick={()=>setItemNum((num)=>num-1)}
                      variant="secondary"
                      id="button-addon2"
                      disabled
                    >
                      -
                    </Button>
                  : 
                    <Button
                      onClick={()=>setItemNum((num)=>num-1)}
                      variant="secondary"
                      id="button-addon2"
                    >-
                    </Button>
                  }
                  <Form.Control
                    className="text-center"
                    value={itemNum}
                    onChange={(e)=>(setItemNum(e.target.value))}
                  />
                  <Button onClick={()=>setItemNum((num)=>num+1)} variant="secondary" id="button-addon1">+</Button>
                </InputGroup>
              </Col>
              <Col xs={12} sm={6} className="shopItem_content_price align-self-end">
                <h4 className="text-end mb-1">${selectedGood.price.toLocaleString()}<span className="text-secondary">/件</span></h4>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={2}>
                    <Button size="sm" variant="outline-danger"><Heart size={24}/></Button>
                  </Col>
                  <Col xs={5}>
                    <Button variant="outline-success" onClick={()=>addOrder(selectedGood, selectedType)}>加入購物車</Button>
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