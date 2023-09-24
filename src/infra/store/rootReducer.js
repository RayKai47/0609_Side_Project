import { combineReducers } from "redux";
import { cart } from "../redux/cart/reducer";
import { preferences } from "../redux/preferences/reducer";

const rootReducer = combineReducers({
  cart: cart,
  favoriteList: preferences
});

export default rootReducer;