import { combineReducers } from "redux";
import { cart } from "../../homePage/redux/reducer";

const rootReducer = combineReducers({
  cart: cart,
});

export default rootReducer;