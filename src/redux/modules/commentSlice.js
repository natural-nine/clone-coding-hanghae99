import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import instance from '../../shared/Request';


//미들웨어
//post id값 넣어주기
export const loadCommentAX = (contentsId) =>{
  return function(dispatch){
    //http://54.180.114.134
      axios.get(`http://54.180.121.151/board/get/${contentsId}`)
      // axios.get(` http://localhost:5001/comments$`)
      .then(response =>dispatch(loadComments(response.data)))
      
  }
}
export const createCommentAX = (comments, commentsId) => {
  return function (dispatch) {
      instance.post(`http://54.180.121.151/api/board/post/${commentsId}`, comments)
      // axios.post(` http://localhost:5001/comments`, comments)
    .then(() => dispatch(createComment(comments)))
  }
}

export const deleteCommentAX = (comment) => {
  return function(dispatch){
    axios.delete(`http://localhost:5001/comments`, comment)
    .then((response)=> dispatch(loadComments(response.data)))
    .catch((error)=>{
      console.log(error.response.data)
    })
  }
}

//action.payload = 내가 보내주는 값
// state = initialState
const commentSlice = createSlice({
  name: 'comment',
  initialState:  {comments:[]},
  reducers: {
    // 댓글 뿌려주는 함수 store에 넣기
    loadComments(state,action) {
      state.comments = action.payload
    },
    // 댓글 생성하는 함수 store에 넣기
    createComment(state, action){
      state.comments.push(action.payload)
    }

  }


})

export const {loadComments, createComment} = commentSlice.actions
export default commentSlice.reducer