import { createStore, combineReducers, applyMiddleware } from 'redux'
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

import thunk from 'redux-thunk'

import user from "../redux/modules/user";
import post from "../redux/modules/post";

//만든 모듈 import하고 combineReducers({ }); 안에 넣어주기

const firebaseConfig = {
    apiKey: "AIzaSyAUZHz2UAXJOo5p3oufPiuBFPQD1l67jkc",
    authDomain: "react-week5-6acfb.firebaseapp.com",
    projectId: "react-week5-6acfb",
    storageBucket: "react-week5-6acfb.appspot.com",
    messagingSenderId: "49204740083",
    appId: "1:49204740083:web:3087eb0c0c88c3661f1c86",
    measurementId: "G-MB2Q141N7N",
  };


const app = initializeApp(firebaseConfig);


const middlewares = [thunk]
const rootReducer = combineReducers({});
const enhancer = applyMiddleware(...middlewares)


const store = createStore(rootReducer, enhancer);

export const storage = getStorage(app)

export default store;