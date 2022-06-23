import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { loadCommentAX } from "../redux/modules/commentSlice";
//컴포넌트
import CommentInput from "../components/CommentInput";
import CommentModal from "./CommentModal";
import likeimg from '../images/like.png';


const Comment = (props) => {
  // console.log(props.post_id,'프롭스')
  const dispatch = useDispatch();
  //댓글 데이터 가져오기
  const comments = useSelector((state) => state.commentSlice.comments);
  React.useEffect(() => {
    dispatch(loadCommentAX(props.post_id));
  }, []);

  
  // console.log(comments)

  //좋아요 가져오기
  // React.useEffect((comment_id)=>{
  //    instance.get(`http://54.180.114.134/comment/like/1`)
  //     .then((response) => {const like_num= response.data})
  // },[])

  //좋아요 버튼 눌렀을때 변경
  // const [like, setLike] = useState(false);
 
  // const toggleLike=()=>{
  //     setLike(current=>!current)
  //     //current 는 like
  //   }

  return (
    <>
      <Container>
        <CommentInput post_id={props} />
        {/* 댓글뿌려주기 */}
        {comments.map((c, i) => {
          return (
            <div key={i} className='row'>
              <div>
                <div>
                <CommentBox>
                  <p>
                    {c.lastName}
                    {c.firstName}
                  </p>
                  <div>{c.comments}</div>
                </CommentBox>
              </div>
              
              {/* <Likebutton onClick={toggleLike} >
                {like && <Like src={likeimg} alt=''/>}
                좋아요</Likebutton> */}
              </div>
              <CommentModal post_id={props}/>
            </div>
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 35px;
  background-color: white;
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
