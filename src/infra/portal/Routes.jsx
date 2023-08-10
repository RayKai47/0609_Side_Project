import { Routes , Route } from 'react-router-dom';
import Header from './Header';
import Home from '../../homePage';
import NoMatch from './NoMatch';
import Category from '../../category';
import ShopItem from '../../shopItem';
import ShopCart from '../../shopCart';
import ShopCartTwo from '../../shopCart2';

const RoutesWarp = () => {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/shopItem" element={<ShopItem/>}/>
        <Route path="/shopCart" element={<ShopCart/>}/>
        <Route path="/shopCart2" element={<ShopCartTwo/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Route>
    </Routes>
  )
};

export default RoutesWarp;