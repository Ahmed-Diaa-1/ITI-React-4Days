import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./reducer";
import logger from "redux-logger";
import carReducer from "./carReducer";
import thunk from "redux-thunk";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  theCounter: counterReducer,

  theCar: carReducer,
  thePosts: postsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
