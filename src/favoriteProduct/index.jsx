import React from 'react';
import { useSelector } from "react-redux"
import styled from 'styled-components';
import "./css/favoriteProduct.css"
import TableBody from './component/TableBody';

const FavoriteProduct = () => {
  const FavoriteContainer = styled.div`
    padding: 40px 80px;
    background-color: #ccc;
    min-height: 60vh;
  `;

  const favoriteList = useSelector(state=>state.favoriteList);

  return (
    <FavoriteContainer>
      {favoriteList.itemData == null ?  <h2 className="text-danger">尚未新增最愛商品</h2> : <TableBody/>}
    </FavoriteContainer>
  )
};

export default FavoriteProduct;