import { Container, Row, Col } from 'react-bootstrap';
import { Heart } from 'phosphor-react';
import goodsData from "../data/goodsData";

const GoodsList = () => {
  // const switchHeart = () => {}
  return(
    <Container>
      <Row lg={4} md={3} sm={2} xs={2}>
        {goodsData.map((good) => (
          <Col key={good.id}>
            <div className="shop_list-item">
              <img className="shop_list-item-img" src={require(`../asset/${good.img}`)} alt="" />
              <div className="shop_list-content p-2">
                <div className="shop_list-content-header d-flex justify-content-between">
                  <h6 className="shop_list-content-title">{good.name}</h6>
                  <h6
                    className="shop_list-content-state goods_state"
                    data-goods-state={
                      good.state == "HOT" ? "hot": "new" 
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
        ))}
      </Row>
    </Container>
  )
}

export default GoodsList;