import { combineReducers } from "redux";

import lstShortItem from "./shortItemSlice";
import cart from "./cartSlice";
import constants from "./constantSlice";
import login from "./loginSlice";
import currentPhone from "./currentPhoneSlice"; 
import filter from './filterSlice';

export default combineReducers({
  lstShortItem,
  cart,
  constants,
  login,
  currentPhone, 
  filter
});
