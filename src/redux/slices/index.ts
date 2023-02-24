import { combineReducers, Reducer } from 'redux';
import { RootState } from 'types';
import productsReducer from './products'


const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    products: productsReducer
})

export default rootReducer;