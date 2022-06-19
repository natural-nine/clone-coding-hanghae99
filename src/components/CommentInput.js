import React from "react";
import styled from "styled-components";

const CommentInput = () => {
  return(
     <>
     <Container placeholder="댓글을 입력하세요..."></Container>
     </>
  );
};

const Container = styled.input`
width: 500px;
height: 35px;
border-radius: 20px;
font-size: 15px;
/* background-color: #F0F2F5; */
background-color: gold;
border: none;
:focus{
  outline: none;
}
`
export default CommentInput;
