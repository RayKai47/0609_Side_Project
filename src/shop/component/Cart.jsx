import {useSelector} from 'react-redux';

const Cart = () => {
  const orderList = useSelector((state)=>state)
  return (
    {orderList.map((item)=>(
      item.count
    ))}
  )
};

export default Cart;