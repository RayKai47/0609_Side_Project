import { Container, Row, Col } from 'react-bootstrap';
import goodsData from "../../infra/store/goodsData";
import Goods from '../../infra/commonComponents/Goods';

const GoodsList = () => {
  // const switchHeart = () => {}
  
  return(
    <Container>
      <Row xs={1} className="mt-5 justify-content-center">
        <Col md={7} className="shop_title text-light mb-3">
          <h3>New Arrival</h3>
        </Col>
        <Col>
          <Row lg={4} md={3} sm={2} xs={2}>
            {goodsData.map((good) => (
              good.state.includes("NEW") ?
                <Goods good={good} key={good.name}/>
              :
                null
            ))}
          </Row>
        </Col>
      </Row>

      <Row xs={1} className="mt-5 justify-content-center">
        <Col md={7} className="shop_title text-light mb-3">
          <h3>Top Sales</h3>
        </Col>
        <Col>
          <Row lg={4} md={3} sm={2} xs={2}>
            {goodsData.map((good) => (
              good.state.includes("HOT") ?
                <Goods good={good} key={good.name}/>
              :
                null
            ))}
          </Row>
        </Col>
      </Row>

      <Row xs={1} className="mt-5 justify-content-center">
        <Col md={7} className="shop_title text-light mb-3">
          <h3>All Products</h3>
        </Col>
        <Col>
          <Row lg={4} md={3} sm={2} xs={2}>
            {goodsData.map((good) => (
              // 因為我把Goods裡面的props={good}，所以帶入的變數名要是good(前面的good)
              // 後面的good為map的參數
              <Goods good={good} key={good.name}/>
            ))}
          </Row>
        </Col>
      </Row>
      
      
    </Container>
  )
}

export default GoodsList;