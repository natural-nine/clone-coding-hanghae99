import axios from "axios";

const LOAD = 'contents/LOAD';
const CREATE = 'contents/CREATE';
//컨텐츠 삭제
// const DELETE = 'contents/DELETE';


const initialState = {
    list:[]
}



export const createContentsDB = (data) => {
    return function (dispatch, navigate){
        axios.post("http://54.180.114.134/api/board", data)
    .then((res)=>{
        console.log(res)
        dispatch(createContents(data))
        navigate("/main")
    })
    .catch((error)=>{
        console.log(error)
    });
    } 
}

export const loadContentsDB =  () => {
    return function(dispatch){
        axios.get("http://54.180.114.134/api/board")
        .then((res)=>{
            dispatch(loadContents(res.data))
            console.log(res.data ,"리덕스 로드")
        });
        
        // contentsList((cur)=> [...cur, ...res.data])
        // setInfoArray((curInfoArray)=> [...curInfoArray, ...res.data]);
        // res.forEach((con)=>{
        //     contentsList.push({...con.data})
        // })
        
        
    }
}

 //컨텐츠 삭제
// export const deleteContentsDB = (uid) => {
//     return function (dispatch) {
//       axios
//         .delete(`http://localhost:5001/postContents${uid}`)
//         .then((res) => {
//           console.log(res);
//           window.alert("게시글이 삭제되었습니다.");
//           dispatch(deleteContents());
//         })
//         .catch((err) => {
//           console.log("fucking error");
//         });
//     };
//   };
  

// const getInfo = async () => {
//     const res = await axios.get('http://localhost:5001/postContents'); // 서버에서 데이터 가져오기
//     setInfoArray((curInfoArray) => [...curInfoArray, ...res.data]); // state에 추가
//     console.log('info data add...');
// }

export default function reducer(state = initialState, action = {}) {
    switch(action.type){
        case "contents/LOAD": {
            return {list :action.data}
        }
        case "contents/CREATE":{
            const new_data = [...state.list, action.data];
            return { list: new_data };
        }
        // case "contents/CREATE": {

        // }
        default:
        return state;
    }
    
}

//컨텐츠 삭제
// export function deleteContents(uid) {
//     return { type: DELETE, uid}
// };

export function createContents(data) {
    return {type:CREATE, data};
};

export function loadContents (data) {
    return { type: LOAD, data };
  }