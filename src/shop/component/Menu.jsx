import React from 'react'
import { Link } from 'react-router-dom'
import goodsData from '../data/goodsData';

const Menu = () => {
  return (
    <>
      <div>菜單</div>
      {
        goodsData && goodsData.length>0 &&
        goodsData.map((item) => {
          return (
            <div>
              {item.name}
              <Link to={"productInfo/"+item.id}><button>商品詳情</button></Link>
            </div>
          )
        })
      }
    </>
  )
}

export default Menu;