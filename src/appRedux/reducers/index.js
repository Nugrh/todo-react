import {combineReducers} from "redux";
import Settings from "./Settings";
import Common from "./Common";
import {connectRouter} from 'connected-react-router';
import todoSlice from "../../features/Todos";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  common: Common,
  todos: todoSlice
});

export default createRootReducer;
