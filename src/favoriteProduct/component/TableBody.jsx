import React from 'react';
import { useSelector } from "react-redux"
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const TableBody = () => {
  
  const ProductImg = styled.img`
    width: 60px;
    height: 80px;
  `;
  const ProductType = styled.span`
    font-size: 14px;
    display: block;
  `;

  const title = ["選取", "商品圖片", "商品名稱", "價格", "刪除" ];
  
  const favoriteList = useSelector(state=>state.favoriteList);
  return (
    <Table striped bordered hover>
        <thead>
          <tr>
            {title.map((name,idx) =>(
              <th key={idx}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {favoriteList.map((product)=>(
            <tr key={product.id}>
              <td>
                <Form>
                  <Form.Check type="checkbox" id="custom-checkbox"/>
                </Form>
              </td>
              <td><ProductImg src={require(`../../infra/asset/${product.img}`)}/></td>
              <td>
                {product.name}
                <ProductType className="text-secondary">{product.material}</ProductType>
              </td>
              <td>{product.price.toLocaleString()}</td>
              <td><Button variant="danger">刪除</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
  )
};

export default TableBody;