import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CommentInput from "../components/CommentInput";
import option from '../images/option.png'
import { loadCommentAX } from "../redux/modules/commentSlice";

const Comment = () => {
  const dispatch = useDispatch();
  //댓글 데이터 가져오기
  const comments = useSelector((state)=> state.commentSlice.comments)
  React.useEffect(()=>{
    dispatch(loadCommentAX())
    
  },[])
  // console.log(comments)
  return(
     <>
     
     <Container>
      <CommentInput/>
      {/* 댓글뿌려주기 */}
      {comments.map((c,i)=>{return(  
      <div key={i}>
      <div>
     <CommentBox >
      <p>{c.lastName}{c.firstName}</p>
        <div>{c.contents}</div>
      </CommentBox>
      <OptonButton><img src={option} alt=''/></OptonButton>
     </div>
     <Likebutton>좋아요</Likebutton>
     </div>)})}
     </Container>
     </>
  );
};

const Container =styled.div`
padding: 35px;
border-radius: 10px;
box-shadow: 5px 5px 20px 0.5px #ddd;
width: 600px;
height: 500px;
`

const CommentBox = styled.div`
p{
  font-size: 13px;
  font-weight: 600;
  :hover{
    text-decoration: underline;
  }
}
div{
  margin-top: 5px;
}
display: inline-block;
padding: 10px;
border-radius: 15px;
background-color: #F0F2F5;

`
const OptonButton= styled.button`
width: 18px;
height: 18px;

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

const Likebutton = styled.button`
border: none;
background-color: transparent;
font-weight: 600;
:hover{
  text-decoration: underline;
}
:focus{
  color: #2078F4;
}
`
export default Comment;
