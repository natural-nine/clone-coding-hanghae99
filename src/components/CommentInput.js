import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
//이미지
import emoji from "../images/emoji.png";
import camera from "../images/camera.png";
import gif from "../images/gif.png";
import sticker from "../images/sticker.png";
import { createCommentAX } from "../redux/modules/commentSlice";

const CommentInput = () => {
  const dispatch = useDispatch();

  //댓글 생성
  const comment_ref = useRef(null);
  //인풋 엔터 누를시에 실행되는 함수
  const Entercheck = (e) => {
    if(e.key ==='Enter'){
      const new_comment = { 
        lastName: "김",
        firstName: "수박", 
        contents : comment_ref.current.value,
      }
      dispatch(createCommentAX(new_comment))
      e.target.value='';
    }
  }
  return (
    <>
      <Box>
        <Input onKeyUp={Entercheck} ref={comment_ref} placeholder="댓글을 입력하세요..."></Input>
        <p>글을 게시하려면 Enter 키를 누르세요</p>
      </Box>

      <Button>
        <button>
          <img src={emoji} alt="" />
        </button>
        <button>
          <img src={camera} alt="" />
        </button>
        <button>
          <img src={gif} alt="" />
        </button>
        <button>
          <img src={sticker} alt="" />
        </button>
      </Button>
    </>
  );
};

const Box = styled.div`
  p {
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 500px;
  height: 35px;
  border-radius: 20px;
  font-size: 15px;
  background-color: #f0f2f5;
  /* background-color: gold; */
  border: none;
  :focus {
    outline: none;
  }
`;

const Button = styled.div`
  button {
    border: 0px;
    border-radius: 50px;
    position: relative;
    left: 370px;
    bottom: 41px;
    :hover {
      background-color: #e4e6e9;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
export default CommentInput;
