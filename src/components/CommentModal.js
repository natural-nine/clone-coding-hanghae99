import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import option from '../images/option.png'
import { add_user_AX } from "../redux/modules/user";
import { deleteCommentAX } from "../redux/modules/commentSlice";

//수정삭제 모달창 띄우기
function CommentModal(props) {
  console.log(props, '프롭스 2')
  const dispatch = useDispatch();

  const [modal,setmodal] = useState(false);

  const delete_comment=()=>{
    dispatch(deleteCommentAX())
  }

  return (
    <div>
      <OptonButton onClick={()=>{
        setmodal(!modal);
        // !뭐시기 = 뭐시기가 true면 false로, false면 true로
      }}><img src={option} alt=''/>
      </OptonButton>
      <Container modal={modal}>
      <button>수정</button>
      <button onClick={delete_comment}>삭제</button>
    </Container>
    </div>
  );
}

const Container = styled.div`
  width: 200px;
  height: 80px;
  background-color: white;
  /* border: 1px solid black; */
  box-shadow: 5px 5px 10px 0.5px #ddd;
  border-radius: 10px;
  position: fixed;
  z-index: 999;
  top: 23%;
  left: 26%;
  transform: translate(-50%, -50%);
  padding: 8px;
  display: ${({modal})=>(
    modal === false ? 'none' : 'block'
  )};
  button{
    width: 200px;
    height: 40px;
    border: none;
    background-color: white;
    display: flex;
    font-size: 15px;
    padding-top: 10px;
    :hover{
      border-radius: 10px;
      background-color: #F2F2F2;
    }
  }
`
const OptonButton= styled.button`
width: 18px;
height: 18px;
margin-top: 12px;

img{
  padding: 5px;
  width: 20px;
  height: 20px;
  opacity: 0;
}
:hover {
img{
  border-radius: 25px;
  opacity: 1;
  background-color: #F2F2F2;
}
}
border: none;
background-color: transparent;
`
;

export default CommentModal;
