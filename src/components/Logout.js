import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import option from '../images/option.png'
import { add_user_AX } from "../redux/modules/user";
import { deleteCommentAX } from "../redux/modules/commentSlice";

import instance from "../shared/Request";

function Logout() {
    const logoutButton=()=>{
      window.localStorage.removeItem("user_name")
      window.localStorage.removeItem("user_token")
      window.localStorage.removeItem("familyName")
      window.localStorage.removeItem("givenName")
      window.localStorage.removeItem("user_mail")

      window.location.replace('/*')
    }
  return (
    <>
    <Button onClick={logoutButton}>로그아웃</Button>
    </>
  );
}

const Button = styled.button`
width: 240px;
height: 50px;
border: none;
background-color : white;
font-size: 15px;
font-weight: 900;
:hover{
  background-color: #F2F2F2;
}
`

export default Logout;