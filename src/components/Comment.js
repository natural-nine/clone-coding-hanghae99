import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled,{css} from "styled-components";
import { loadCommentAX, putCommentAX } from "../redux/modules/commentSlice";
//컴포넌트
import CommentInput from "../components/CommentInput";
import CommentModal from "./CommentModal";
import likeimg from '../images/like.png';
import instance from "../shared/Request";
import { current } from "@reduxjs/toolkit";


//댓글 칸 컴포넌트
const CommentsBox = ({c}) => {
  const dispatch =useDispatch();
  const [mode, setmode]= useState('View')
  const commentRef = useRef(null);
  //수정함수 미들웨어 보낼때 id값 인자로 넣어주기
  // const id = c.id
  const comment = commentRef.current.value
  console.log (c)

  const editButton = ()=>{
    setmode('Edit')
    commentRef.current.value = c.comments;
    dispatch(putCommentAX(comment))
  }

  const deleteButton=()=>{
    
  }
  return(
    <CommentBox mode={mode}>
    <p>
    {c.lastName}
    {c.firstName}
    </p>
    <div>
    {c.comments}
    </div>
    <input type="text" ref={commentRef}/>
    <button onClick={editButton}>수정</button>
    <button onClick={deleteButton}>삭제</button>
  </CommentBox>
  )
  

}





const Comment = () => {
  const dispatch = useDispatch();
  //댓글 데이터 가져오기
  const comments = useSelector((state) => state.commentSlice.comments);
  React.useEffect(() => {
    dispatch(loadCommentAX());
  }, []);
  // console.log(comments)

  //좋아요 가져오기
  // React.useEffect((comment_id)=>{
  //    instance.get(`http://54.180.114.134/comment/like/1`)
  //     .then((response) => {const like_num= response.data})
  // },[])

  //좋아요 버튼 눌렀을때 변경
  const [like, setLike] = useState(false);
  
  const toggleLike=()=>{
      setLike(current=>!current)
      //current 는 like
    }
  //수정 버튼 눌렀을 때 commentBox가 아닌 commentInput이 나와야 해요
  const [put, setPut]= useState(false);

  return (
    <>
      <Container>
        <CommentInput />
        {/* 댓글뿌려주기 */}
        {comments.map((c, i) => {
          return (
            <div key={i} className='row'>
              <div>
                <div>
                
                { !put ? <CommentsBox c={c}/> : <CommentInput/>}
              </div>
              
              <Likebutton onClick={toggleLike} >
                {like && <Like src={likeimg} alt=''/>}
                좋아요</Likebutton>
              </div>
              <CommentModal setPut={setPut}/>
            </div>
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 35px;
  border-radius: 10px;
  box-shadow: 5px 5px 20px 0.5px #ddd;
  width: 600px;
  height: 500px;
  div {
    position: relative;
  }

  .row{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
`;

const CommentBox = styled.div`
  p {
    font-size: 13px;
    font-weight: 600;
    :hover {
      text-decoration: underline;
    }
  }
  div {
    margin-top: 5px;
  }
  display: inline-block;
  padding: 10px;
  border-radius: 15px;
  background-color: #f0f2f5;
  ${props => props.mode === "VIEW" && css`
    div { display: block };
    input { display: none };
  `}

  ${props => props.mode === "EDIT" && css`
    div { display: none };
    input { display: block };
  `}
`;

const Like =styled.img`
width: 17px;
height: 17px;
position: fixed;
left: 13%;
`

const Likebutton = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 600;
  :hover {
    text-decoration: underline;
  }
  :focus {
    color: #2078f4;
  }
`;
export default Comment;
