import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { loadCommentAX } from "../redux/modules/commentSlice";
//컴포넌트
import CommentInput from "../components/CommentInput";
import CommentModal from "./CommentModal";
import likeimg from '../images/like.png';
import instance from "../shared/Request";


const Comment = (props) => {
  const post_id = props.post_id
  
  // console.log(data)
  const dispatch = useDispatch();
  //댓글 데이터 
  // 리덕스를 사용하면 initialState에 댓글을 담는 영역이 하나밖에 없어서 다 덮어진다.
  // const comments = useSelector((state) => state.commentSlice.comments);
  // comments state만들고
  const [comments, setComments] = useState([]);
  //데이터 가져와서 setcomments에 넣어주기, 뿌려주기
  const getComments = async () => {
    const response = await instance.get(`http://54.180.114.134/api/board/get/${post_id}`);
    console.log(response.data);
    setComments(response.data);
  }


  const addComments = async (comment) => {
    instance.post(`http://54.180.114.134/api/board/post/${post_id}`, comment) 
    .then((response) => {
      setComments(current => [...current, {id: response.data, familyName: localStorage.getItem("familyName"), givenName: localStorage.getItem("givenName"), ...comment}]);
    })
    .catch((error)=>{
      console.log(error.response.data)
    });
  }

  const removeComments = async (comment_id) => { 
    instance.delete(`http://54.180.114.134/api/board/delete/${post_id}/${comment_id}`) // 삭제 버튼 위치좀
    .then((response)=> {
      setComments(current => current.filter(v => v.id !== comment_id));
    })
    .catch((error)=>{
      console.log(error.response.data)
    });
  }

  // const modifyComments = async () => {

  // }

  React.useEffect(() => {
    // dispatch(loadCommentAX(post_id));
    // console.log(post_id)
    getComments();

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
        <CommentInput addFunc={addComments} post_id={post_id} />
        {/* 댓글뿌려주기*/}
        {comments.map((c, i) => {
          return (
            <div key={i} className='row'>
              <div>
                <div>
                <CommentBox>
                  <p>
                    {c.familyName}
                    {c.givenName}
                  </p>
                  <div>{c.comment}</div>
                </CommentBox>
              </div>
              
              {/* <Likebutton onClick={toggleLike} >
                {like && <Like src={likeimg} alt=''/>}
                좋아요</Likebutton> */}

              </div>
              <CommentModal removeFunc={removeComments} comment_id={c.id} />
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
