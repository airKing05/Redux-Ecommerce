import {combineReducers} from 'redux';
import { setProductReducer, selectedProductReducer } from './productReducer';

const rootReducers = combineReducers ({
    allProducts:  setProductReducer,
    product : selectedProductReducer
})

export default rootReducers;