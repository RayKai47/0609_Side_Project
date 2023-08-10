import { Container, Row, Col } from 'react-bootstrap';
import goodsData from "../data/goodsData";
import Goods from './Goods';

const GoodsList = () => {
  // const switchHeart = () => {}
  
  return(
    <Container>
      <Row lg={4} md={3} sm={2} xs={2}>
        {goodsData.map((good) => (
          // 因為我把Goods裡面的props={good}，所以帶入的變數名要是good(前面的good)
          // 後面的good為map的參數
          <Goods good={good}/>
        ))}
      </Row>
    </Container>
  )
}

export default GoodsList;