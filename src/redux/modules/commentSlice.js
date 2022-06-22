import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {comments:[]}

//미들웨어
//post id값 넣어주기
export const loadCommentAX = () =>{
  return function(dispatch){
    //http://54.180.114.134
      // axios.get(`http://54.180.121.151/api/comment/${post_id}`)
      axios.get(` http://localhost:5001/comments`)
      .then(response =>dispatch(loadComments(response.data)))
  }
}
export const createCommentAX = (comments) => {
  return function (dispatch) {
      // axios.post(`http://54.180.121.151/api/comment/${post_id}`, comments)
      axios.post(` http://localhost:5001/comments`, comments)
    .then(() => dispatch(createComment(comments)))
  }
}

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    // 댓글 뿌려주는 함수 store에 넣기
    loadComments(state,action) {
      state.comments = action.payload
    },
    // 댓글 생성하는 함수 store에 넣기
    createComment(state, action){
      state.comments.push(action.payload)
    }
  },
})

export const {loadComments, createComment} = commentSlice.actions
export default commentSlice.reducer