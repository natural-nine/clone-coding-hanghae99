import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteContentsDB, loadContentsDB } from "../redux/modules/post";
import user from "../images/init-user.png";
import eight from "../images/8.png"
import pan from "../images/판호.jpeg"
import axios from "axios";
//댓글 컴포넌트 입니다.
import Comment from "./Comment";

const MainBox = styled.div`
    width: 500px;
    height: 350px;
    margin: auto;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
   
    /* box-shadow:  0px 2px 8px 0px #7f8fa6;; */
    /* box-shadow: 0px 4px 12px #7f8fa6; */
    /* box-shadow: 0px 48px 100px 0px #7f8fa6;; */
    box-shadow: 1px 0px -5px -5px #7f8fa6;
    
`

const ContentsBox = styled.div`
    width: 490px;
    border: 1px solid black;
`
const UserBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
`

const UserImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
`
const UserInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Span = styled.span`
    font-size: 12px;
    margin-top: 5px;
`

const ImgBox = styled.div`
    width: 450px;
    height: auto;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentsListBox = () => {
    const observerRef = React.useRef();
    const boxRef = React.useRef(null);
    const list = useSelector((state) => state.post.data);
    const [isMail, isSetMail] = useState("");
    const [isDelete, isSetDelete] = useState(false)
    const userMail = localStorage.getItem("user_mail"); 
    console.log(userMail, "list mail")
    const dispatch = useDispatch();
   
    useEffect(() => {
        isSetMail(userMail);
        if(isMail == userMail){
            isSetDelete(true)
        }else{
            isSetDelete(false)
        }
    },[])
    console.log(isMail, "ismail mail")
    console.log(isDelete, "ismail mail")
    // useEffect(() => {
    //     observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
    //     boxRef.current && observerRef.current.observe(boxRef.current);
    // }, [list])

    // const intersectionObserver = (entries, io) => {
    //     entries.forEach((entry) => {
    //         if(entry.isIntersecting) { // 관찰하고 있는 entry가 화면에 보여지는 경우
    //             io.unobserve(entry.target); // entry 관찰 해제
    //             // dispatch(loadContentsDB)(setInfoArray); // 데이터 가져오기
    //             dispatch(loadContentsDB())
    //         }
    //     })
    // }
    
    const onClick = (pid) => {
        dispatch(deleteContentsDB(pid))
    }
    
    return(
        <MainBox>
            {/* {list.map((item, idx)=> {
                if(list.length-5 === idx){
                    return(
                        <ContentsBox ref={boxRef} key={idx}>
                        <UserBox>
                            <UserImg src={user}/>
                            <UserInfoBox>
                            <Span>{item.familyName}{item.givenName}</Span>
                            <Span>{item.createdAt}</Span>
                            </UserInfoBox>
                        </UserBox>
                       <ImgBox>
                            <Img src={pan}/>
                       </ImgBox>
                       <h3>{item.content}</h3>
                        <hr />
                    </ContentsBox>
                    )
                }else{
                    return(
                        <ContentsBox key={idx}>
                        <UserBox>
                            <UserImg src={user}/>
                            <UserInfoBox>
                            <Span>{item.familyName}{item.givenName}</Span>
                            <Span>{item.createdAt}</Span>
                            </UserInfoBox>
                        </UserBox>
                       <ImgBox>
                            <Img src={pan}/>
                       </ImgBox>
                       <h3>{item.content}</h3>
                        <hr />
                    </ContentsBox>
                    )
                }
            })} */}
            {list.map((item, idx)=>{
                return(
                    <ContentsBox key={idx}>
                        <UserBox>
                            <UserImg src={user}/>
                            <UserInfoBox>
                            <Span>{item.familyName}{item.givenName}</Span>
                            <Span>{item.createdAt}</Span>
                            </UserInfoBox>
                            {}
                            <div>
                                <button onClick={()=>{onClick(list[idx].postId)}}>hello</button>
                                <span>2</span>
                            </div>
                        </UserBox>
                       <ImgBox>
                            <Img src={pan}/>
                       </ImgBox>
                       <h3>{item.content}</h3>
                        <hr />
                        <Comment post_id={list[idx].postId}/>
                        {/* 상기 댓글 컴포넌트 입니다. */}
                    </ContentsBox >
                )
            })}
            
        </MainBox>
    )
};

export default ContentsListBox;