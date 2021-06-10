import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import productReducer from './product/productReducer';
import customerReducer from './customer/customerReducer';
import categoryReducer from './category/categoryReducer';



const rootReducer = combineReducers({
	customer:customerReducer,
	product:productReducer,
	category:categoryReducer

})

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));


export default store;