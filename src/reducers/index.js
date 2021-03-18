import posts from "./posts";
import auth from "./auth";
import reg from "./reg";
import { combineReducers } from "redux";

export default combineReducers({
  posts,
  auth,
  reg,
});
