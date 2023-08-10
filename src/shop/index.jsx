import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import './css/shop.css'
import Banner from './component/Banner';
import GoodsList from './component/GoodsList';
import Menu from './component/Menu';
import fadeIn from './asset/fadeIn.jpg';
import store from './redux/store';




const Shop = () => {
  let goods = {};
  
  // let addGoods = {
  //   name: "",
  //   price: 10,
  //   info: ""
  // }
  // const [goodsName, setGoodsName] = useState();
  // const [name, setName] = useState();
  // const [price, setPrice] = useState();
  // const [info, setInfo] = useState();
  // const [productList, setproductList] = useState();

  // function addGoods(name, price, info) {

  //   return (

  //   )
  // }

  

  return (
      <div className="shop">
        <Banner/>
          <Container className="p-0" fluid>
            <Row>
              <Col style={{backgroundImage: `url(${fadeIn})`}} className="shop_intro"/>
            </Row>
          </Container>
          <GoodsList/>

        {/* 商品新增表單 */}
        {/* <div className="goodsAdd">
          <div className="goods_name">
            <h5>商品名稱</h5>
            <input type="text" name="good_name" value=""/>
          </div>
          <div className="goods_price">
            <h5>商品價格</h5>
            <input type="text" name="good_price" />
          </div>
          <div className="goods_info">
            <h5>商品資訊</h5>
            <input type="text" name="good_info"/>
          </div>
          <button type="submit">確定新增</button>
        </div> */}
        <Menu/>
      </div>
  )
};

export default Shop;