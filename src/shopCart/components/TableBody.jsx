import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, InputGroup} from 'react-bootstrap';
import styled from 'styled-components';

const GoodsImg = styled.img`
    width: 60px;
    height: 80px;
`

const goodsList = [
  {
    id: 1,
    img: "clothes1.jpeg",
    goodsName: "秋季西裝外套",
    goodsNums: 2,
    price: 2990,
    
  },
  {
    id: 2,
    img: "clothes2.jpeg",
    goodsName: "秋季風衣",
    goodsNums: 2,
    price: 3590,
    
  },
  {
    id: 3,
    img: "clothes3.jpeg",
    goodsName: "日式大衣",
    goodsNums: 2,
    price: 3290,
    
  },
  {
    id: 4,
    img: "clothes4.jpeg",
    goodsName: "黑色牛仔褲",
    goodsNums: 2,
    price: 2590,
  }
]

const TableBody = () => {
  const cartList = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  const handleUpdate = (product, count) => (
    dispatch({ type:"UPDATE_ORDER", payload:{itemData:product,count:product.count+count}})
  )
  const handleDel = (product) =>(
    dispatch ({ type:"DEL_ORDER", payload:product })
  )
  
  return (
    <tbody>
      {goodsList.map((good)=>(
        <tr key={good.id}>
          <td>
            <Form.Group className="mb-3">
              <Form.Check/>
            </Form.Group>
          </td>
          <td><GoodsImg src={require(`../../homePage/asset/${good.img}`)}/></td>
          {/* <td><GoodsImg><img src={require(`../homePage/asset/${good.img}`)}/></GoodsImg></td> */}
          <td>{good.goodsName}</td>

          <td>
            <InputGroup className="mb-3">
              <Button variant="secondary" onClick={()=>handleUpdate(good,1)}>+</Button>
              <Form.Control
                className="text-center"
                placeholder="商品數量"
                aria-label="itemsCount"
                value={good.goodsNums}
              />
              <Button variant="secondary" onClick={()=>handleUpdate(good,-1)}>-</Button>
            </InputGroup>
            
          </td>
          <td>{good.price}</td>
          <td>{good.price*good.goodsNums}</td>
          <td><Button variant="danger" onClick={()=>handleDel(good)}>刪除</Button></td>
        </tr>
      ))}
      <tr>
        <td colSpan={3}></td>
        <td>總數量</td>
        <td colSpan={2}>總價格：</td>
        <td></td>
      </tr>
    </tbody>
  )
};

export default TableBody;