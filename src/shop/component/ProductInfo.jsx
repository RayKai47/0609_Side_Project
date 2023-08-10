import { React, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import goodsData from '../data/goodsData';
// import id from 'uuid';

const ProductInfo = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const {id} = useParams();
  const productInfo = goodsData.find((value) => {
    return value.id == id;
  });
  const handleAddOrder = () => {
    dispatch({
      type:"ADD_ORDER",
      payload:{
        itemData:productInfo,
        count:count
      }})
    // 這裡也等於
    // const action = {
    //   type:"ADD_CART",
    //   payload:productInfo,
    // }
    // dispatch(action)
  };

  return (
    <div>
      商品資訊
      id:{id}
      {productInfo.name}
      <button onClick={()=>setCount((pre)=>pre+1)}>+</button>
      <input value={count} onChange={(e)=>setCount(e.target.value)} type="text" />
      <button onClick={()=>setCount((pre)=>pre-1)}>-</button>
      <button onClick={handleAddOrder}>加入購物車</button>
    </div>
  )
};

export default ProductInfo;