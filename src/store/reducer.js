import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import entitiesReducer from "./entities";

export default combineReducers({
  entities: entitiesReducer,
  auth: authReducer,
});
