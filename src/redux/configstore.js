import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//만든 모듈 import하고 combineReducers({ }); 안에 넣어주기

const middlewares = [thunk]
const rootReducer = combineReducers({ });
const enhancer = applyMiddleware(...middlewares)


const store = createStore(rootReducer, enhancer);

export default store;