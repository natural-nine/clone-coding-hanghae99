import axios from 'axios'
import instance from '../../shared/Request'
import { createSlice } from '@reduxjs/toolkit'



// http://54.180.114.134/

// 미들웨어

// 회원정보 저장
export const add_user_AX = (post_info) => {
  return function (dispatch) {
    axios.post('http://54.180.114.134/user/signup', post_info)
      .then((response) => {
        dispatch(createUser(post_info))
        window.alert("회원가입 완료!")
        window.location.replace('/*')
      })
      .catch((error) => {
      console.log(error.response.data)
      })
  }
}

// 로그인 요청 확인
//로컬스토리지에 저장하는거
export const LoginDB = (login_info) => {
  return function (dispatch) {
    axios.post('http://54.180.114.134/user/login', login_info)
      .then((response) => {
        localStorage.setItem("user_token", response.data.token);
        window.alert("로그인 완료!")
        window.location.replace('/main')
      })
      .catch((error) => alert(error.response.data));
  }
}

// 현재 유저 정보 확인
// export const loginCheckDB = () => {
//   return function (dispatch) {
//     instance.get('/api/user/me')
//       .then((response) => {
//         dispatch(set_user({
//           nickname: response.data.user.nickname,
//           profile_img: response.data.user.profile_img,
//           user_id: response.data.user.user_id,
//         }))
//       })
//       .catch((error) => console.log(error));
//   }
// }


const userSlice = createSlice({
  name: 'user',
  initialState : {
    user_info: []
  },
  reducers: {
    //회원가입
    createUser :(state,action) => {
      state.user_info.push(action.payload)
    }
  },
})

export const {createUser} = userSlice.actions;

export default userSlice.reducer;