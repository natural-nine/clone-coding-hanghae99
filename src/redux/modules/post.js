import axios from "axios";
import instance from "../../shared/Request";
import { createSlice } from '@reduxjs/toolkit'



const LOAD = 'contents/LOAD';
const CREATE = 'contents/CREATE';
//컨텐츠 삭제
const DELETE = 'contents/DELETE';


const initialState = {
    data:[]
}


// 게시글 포스트
export const createContentsDB = (data) => {
    return function (dispatch){
        instance.post("/api/board", data)
    .then((res)=>{
        console.log(data, "img")
        console.log(res, "response")
        console.log(res.data, "test") 
        dispatch(createContents(res.data))
    })
    .catch((error)=>{
        console.log(error)
    });
    } 
}

//게시글 불러오기
export const loadContentsDB =  () => {
    return function(dispatch){ 
        axios.get("http://54.180.114.134/board")
        .then((res)=>{
            console.log(res.data ,"리덕스 로드")
            dispatch(loadContents(res.data))
            
        });
        
        // contentsList((cur)=> [...cur, ...res.data])
        // setInfoArray((curInfoArray)=> [...curInfoArray, ...res.data]);
        // res.forEach((con)=>{
        //     contentsList.push({...con.data})
        // })
        
        
    }
}

//게시글 삭제
export const deleteContentsDB = (pid) => {
    return function (dispatch) {
        instance.delete(`http://54.180.114.134/api/board/${pid}`)
        .then((res) => {
          console.log(res);
          window.alert("게시글이 삭제되었습니다.");
          // 새로고침을 하면 안되지만 시간이 부족한 관계상 새로고침...
          window.location.replace('/main');
        //   dispatch(deleteContents());
        })
        .catch((err) => {
          console.log("fucking error");
        });
    };
  };
  

// const getInfo = async () => {
//     const res = await axios.get('http://localhost:5001/postContents'); // 서버에서 데이터 가져오기
//     setInfoArray((curInfoArray) => [...curInfoArray, ...res.data]); // state에 추가
//     console.log('info data add...');
// }

export default function reducer(state = initialState, action = {}) {
    switch(action.type){
        case "contents/LOAD": {
            return {data :action.data}
        }
        case "contents/CREATE":{
            const new_data = [action.data, ...state.data];
            return { data: new_data };
        }
        // case "contents/CREATE": {

        // }
        default:
        return state;
    }
    
}

// 컨텐츠 삭제
export function deleteContents(uid) {
    return { type: DELETE, uid}
};

export function createContents(data ) {
    return {type:CREATE, data};
};

export function loadContents (data) {
    return { type: LOAD, data };
  }

// const postSlice = createSlice({
//     name : "contents",
//     initialState: {
//         data:[] 
//     },
//     reducers:{
//         loadContents: (state, action) => {
//             state.data = action.payload;
//           },
//         createContents: (state, action) => {
//             state.data = action.payload;
//           },
//     }
// })

// export const {loadContents,createContents} = postSlice.actions;

// export default postSlice.reducer;