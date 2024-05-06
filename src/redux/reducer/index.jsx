import { combineReducers } from "redux";
import { likeReducer } from "./LikeReducer";
import { boughtProduct } from "./BoughtReducer";

const rootReducer = combineReducers({
  likeList: likeReducer,
  boughtList: boughtProduct,
});

export default rootReducer;
