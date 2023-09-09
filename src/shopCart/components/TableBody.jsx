import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, InputGroup} from 'react-bootstrap';
import styled from 'styled-components';

const GoodsImg = styled.img`
    width: 60px;
    height: 80px;
`

const GoodsType = styled.span`
  font-size: 14px;
  display: block;
`

const TableBody = () => {
  const cartList = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  // acc是累計狀態值，good是帶入的參數，而最後的0是初始值
  // 所以第一次執行acc為0，然後數量與價格相乘之後，再加上累計值，
  const total = cartList.reduce((acc, good) => acc + good.price * good.itemNum, 0);

  const handleUpdate = (good, count) => (
    dispatch({
      type:"UPDATE_ORDER",
      payload:{
        itemData: {
          ...good,
          itemNum:good.itemNum+count,
        }
        
      }})
  )
  const handleDel = (good) =>(
    dispatch ({ type:"DEL_ORDER", payload:good })
  )
  
  return (
    <tbody>
      {cartList.map((good)=>(
        <tr key={good.id}>
          <td>
            <Form.Group className="mb-3">
              <Form.Check/>
            </Form.Group>
          </td>
          <td><GoodsImg src={require(`../../homePage/asset/${good.img}`)}/></td>
          {/* <td><GoodsImg><img src={require(`../homePage/asset/${good.img}`)}/></GoodsImg></td> */}
            <td>
              {good.name}
              {good.material ? <GoodsType className="text-secondary">樣式：{good.material}</GoodsType> : null}
            </td>
          <td>
            <InputGroup className="mb-3">
              <Button variant="secondary" onClick={()=>handleUpdate(good,1)}>+</Button>
              <Form.Control
                className="text-center"
                placeholder="商品數量"
                aria-label="itemsCount"
                value={good.itemNum}
              />
              <Button variant="secondary" onClick={()=>handleUpdate(good,-1)}>-</Button>
            </InputGroup>
          </td>
          <td>{good.price.toLocaleString()}</td>
          <td>{(good.price*good.itemNum).toLocaleString()}</td>
          <td><Button variant="danger" onClick={()=>handleDel(good)}>刪除</Button></td>
        </tr>
      ))}
      <tr>
        <td colSpan={3}></td>
        <td>總數量</td>
        <td colSpan={2}>總價格：<span>{total.toLocaleString()}</span></td>
        <td></td>
      </tr>
    </tbody>
  )
};

export default TableBody;