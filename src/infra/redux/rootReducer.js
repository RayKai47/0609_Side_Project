import { combineReducers } from "redux";
import { cart } from "../../shopCart/redux/reducer";

const rootReducer = combineReducers(
  cart,
);

export default rootReducer;