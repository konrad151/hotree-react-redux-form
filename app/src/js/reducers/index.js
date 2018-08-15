import { combineReducers } from "redux";
import { reducer as reducerForm } from 'redux-form';
import { categories } from './categories';
import { employes } from './employes';

export default combineReducers({
  form: reducerForm,
  categories,
  employes
});