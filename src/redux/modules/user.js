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
        window.alert("회원가입 완료!")
        window.location.replace('/*')
        //replace 지양 (새로고침시 리덕스 데이터 날아감)
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
        localStorage.setItem("user_name", response.data.familyName+response.data.givenName);
        localStorage.setItem("user_mail", response.data.mail);
        window.alert("로그인 완료!")
        console.log(response.data)
        dispatch(setUser(response.data))
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
    user_info: {}
  },
  reducers: {

    setUser: (state, action)=>{
    state.user_info = action.payload
    // console.log(action.payload)
  }
  }
})

export const { setUser} = userSlice.actions;

export default userSlice.reducer;