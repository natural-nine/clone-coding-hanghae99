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

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    loadComments(state,action) {
      state.comments = action.payload
    }
  },
})

export const {loadComments} = commentSlice.actions
export default commentSlice.reducer