import { combineReducers } from "redux";
import { reducer as reducerForm } from 'redux-form';
import { categories } from './categories';
// import { forms } from "./forms";

export default combineReducers({
  form: reducerForm,
  categories
});