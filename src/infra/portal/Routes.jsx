import { Routes , Route } from 'react-router-dom';
import Header from './Header';
import Home from '../../homePage';
import NoMatch from './NoMatch';
import MemberCenter from '../../memberCenter';
import Category from '../../category';
import ShopItem from '../../shopItem';
import ShopCart from '../../shopCart';
import FavoriteProduct from '../../favoriteProduct';

const RoutesWarp = () => {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/memberCenter" element={<MemberCenter/>}/>
        <Route path="/memberCenter/FavoriteProduct" element={<FavoriteProduct/>}/>
        <Route path="/memberCenter/shopCart" element={<ShopCart/>}/>
        <Route path="/category/:category" element={<Category/>}/>
        <Route path="/shopItem/:id" element={<ShopItem/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Route>
    </Routes>
  )
};

export default RoutesWarp;