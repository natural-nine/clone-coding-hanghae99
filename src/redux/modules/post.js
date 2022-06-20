import axios from "axios";
const initialState = {
    
}

export const createContentsDB = (data) => {
    return function (dispatch){
        axios.post("http://localhost:5001/postContents", data)
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)
    });
    } 
}

export default function reducer(state = initialState, action = {}) {
    return state;
}
