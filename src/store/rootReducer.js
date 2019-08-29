import {combineReducers} from "redux";
import {cartReducer} from "../Panier/store/reducer"

const rootReducer = combineReducers({
  cartReducer
});
export default rootReducer;