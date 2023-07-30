import { combineReducers, createStore } from "redux";
import loading from "./reducers/loading";
import tokenInfo from "./reducers/tokenInfo";
import isLogged from "./reducers/isLogged";
const rootReducer = combineReducers({
  loading,
  isLogged,
  tokenInfo,
});
const store = createStore(rootReducer);
export default store;
