// import { createStore, combineReducers, applyMiddleware } from 'redux'
//툴킷 사용시 import
import { configureStore } from "@reduxjs/toolkit";

// import { getStorage } from "firebase/storage";
// import { initializeApp } from "firebase/app";

// import thunk from 'redux-thunk'

import user from "../redux/modules/user";
import post from "../redux/modules/post";
import commentSlice from "./modules/commentSlice";
import profile from "../redux/modules/profile";

//만든 모듈 import하고 combineReducers({ }); 안에 넣어주기

// 이미지 처리하기 위해 임시로 firestore 사용 변경할 수 있음.
// const firebaseConfig = {
//     apiKey: "AIzaSyAUZHz2UAXJOo5p3oufPiuBFPQD1l67jkc",
//     authDomain: "react-week5-6acfb.firebaseapp.com",
//     projectId: "react-week5-6acfb",
//     storageBucket: "react-week5-6acfb.appspot.com",
//     messagingSenderId: "49204740083",
//     appId: "1:49204740083:web:3087eb0c0c88c3661f1c86",
//     measurementId: "G-MB2Q141N7N",
//   };

// const app = initializeApp(firebaseConfig);

//툴킷에는 thunk 포함되어있으므로 필요없음
// const middlewares = [thunk]
// const rootReducer = combineReducers({user, post});
// const enhancer = applyMiddleware(...middlewares)

const store = configureStore({
  reducer: {
    commentSlice,
    user,
    post,
    profile,
  },
});

// export const storage = getStorage(app)

export default store;
