import React from "react";
import styled from "styled-components";
//이미지
import emoji from "../images/emoji.png";
import camera from "../images/camera.png";
import gif from '../images/gif.png';
import sticker from "../images/sticker.png";



const CommentInput = () => {
  return(
     <>
     <Box>
     <Input placeholder="댓글을 입력하세요..." ></Input>
     <p>글을 게시하려면 Enter 키를 누르세요</p>
     </Box>
     
     <Button>
      <button><img src={emoji} alt=''/></button>
      <button><img src={camera} alt=''/></button>
      <button><img src={gif} alt=''/></button>
      <button><img src={sticker} alt=''/></button>
     </Button>
     </>
  );
};

const Box = styled.div`
p{
  font-size: 12px;
}
`

const Input = styled.input`
width: 500px;
height: 35px;
border-radius: 20px;
font-size: 15px;
background-color: #F0F2F5;
/* background-color: gold; */
border: none;
:focus{
  outline: none;
}
`

const Button =styled.div`
button{
  border: 0px;
  border-radius: 50px;
  position: relative;
  left: 370px;
  bottom: 41px;
  :hover{
    background-color: #E4E6E9;
  }
  img{
    
    width: 20px;
    height: 20px;
  }
}
`
export default CommentInput;
