// import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Table} from 'react-bootstrap';
import TableBody from './components/TableBody';

const tableTitle = [
  "選取",
  "圖片",
  "品名",
  "數量",
  "單價",
  "總價",
  "刪除",
]

const ShopCart = () => {
  // const [totalPrice, setTotalPrice] = useState(0);

  // const handleTotalPrice = () => {

  // }

  // useEffect(()=>{
  //   handleTotalPrice()
  // },[totalPrice])
  
  return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
            {tableTitle.map((title) => (
              <th key={title}>{title}</th>
            ))}
            </tr>  
          </thead>
          <TableBody/>
        </Table>
      </Container>
  )
};



export default ShopCart;