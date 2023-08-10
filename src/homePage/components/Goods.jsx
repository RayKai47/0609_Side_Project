import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Heart } from 'phosphor-react';

const Goods = (props) => {
  const {good} = props
  return (
    <Col key={good.id} className="text-light">
      <div className="shop_list-item">
        <img className="shop_list-item-img" src={require(`../asset/${good.img}`)} alt="" />
        <div className="shop_list-content p-2">
          <div className="shop_list-content-header d-flex justify-content-between">
            <h6 className="shop_list-content-title">{good.name}</h6>
            <h6
              className="shop_list-content-state goods_state"
              data-goods-state={
                good.state !== "" ? 
                  good.state =="HOT" ? "hot": "new" 
                : ""
              }
            >
              {good.state !== "" ? good.state : ""}
            </h6>
          </div>
          <div className="d-flex justify-content-between">
            <p className="shop_list-content-price">NT${good.price}</p>
            <p className="shop_list-content-favorite"><Heart size={16}/></p>
          </div>
        </div>
      </div>
    </Col>
  )
};

export default Goods;