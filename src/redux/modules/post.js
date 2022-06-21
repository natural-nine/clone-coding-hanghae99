import axios from "axios";



const initialState = {
    list:[]
}



export const createContentsDB = (data) => {
    return function (dispatch, navigate){
        axios.post("http://localhost:5001/postContents", data)
    .then((res)=>{
        console.log(res)
        // dispatch(createContents)
        navigate("/main")
    })
    .catch((error)=>{
        console.log(error)
    });
    } 
}

// export const loadContentsDB = () => {
//     return function(dispatch){
//         const res = axios.get("http://localhost:5001/postContents");
//         let contentsList = [];
//         // contentsList((cur)=> [...cur, ...res.data])
//         // setInfoArray((curInfoArray)=> [...curInfoArray, ...res.data]);
//         console.log("load data")
//     }
// }

// const getInfo = async () => {
//     const res = await axios.get('http://localhost:5001/postContents'); // 서버에서 데이터 가져오기
//     setInfoArray((curInfoArray) => [...curInfoArray, ...res.data]); // state에 추가
//     console.log('info data add...');
// }

export default function reducer(state = initialState, action = {}) {
    return state;
}


// export function createContents(data) {
//     return {type:create, data};
// };