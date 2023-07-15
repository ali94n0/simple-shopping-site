import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cardReducer from "./cards/cardReducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  card: cardReducer,
});
