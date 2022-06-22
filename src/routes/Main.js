import React, { useEffect, useReducer, useState } from "react";
import Header from "../components/Header";
import ContentsBox from "../components/ContentsBox";
import styled from "styled-components";
import StoriesBox from "../components/StoriesBox";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import ContentsListBox from "../components/ContentsListBox";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadContentsDB } from "../redux/modules/post";
import { useRecoilValue } from "recoil";
import {isUpdate} from "../recoil"
import { useNavigate } from "react-router-dom";

// main route, 나머지 component에 추가 예정
const Wrap = styled.div`
    background-color: #eff2f5;
    height:100vh;
`

const MainBox = styled.div`
    height:100vh;
`

const Main = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const observerRef = React.useRef();
    // const boxRef = React.useRef(null);

    const [isLogin, setIsLogin] = useState(true)
    //무한 스크롤 관련
    // const [isData, setIsData] = useState(false);
    // const [infoArray, setInfoArray] = useState([]);
    // const isUpadate = useRecoilValue(isUpdate)
    // useEffect(() => {
    //         getInfo();
    // }, [])
    

    // const getInfo = async () => {
    //     const res = await axios.get('http://localhost:5001/postContents'); // 서버에서 데이터 가져오기
    //     setInfoArray((curInfoArray) => [...curInfoArray, ...res.data]); // state에 추가
    //     console.log('info data add...');
    // }

    // const intersectionObserver = (entries, io) => {
    //     entries.forEach((entry) => {
    //         if(entry.isIntersecting) { // 관찰하고 있는 entry가 화면에 보여지는 경우
    //             io.unobserve(entry.target); // entry 관찰 해제
    //             // dispatch(loadContentsDB)(setInfoArray); // 데이터 가져오기
    //             getInfo();
    //         }
    //     })
    // }
    //// 무한 스크롤 관련
    const token = localStorage.getItem("user_token"); 
    const list = useSelector((state) => state.post.data);
    
    
    
    useEffect(() => {
        dispatch(loadContentsDB());
        if(token == null){
            setIsLogin(false)
        }else{
            setIsLogin(true);
        }
    },[])
    // useEffect(() => {
    //     observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
    //     boxRef.current && observerRef.current.observe(boxRef.current);
    // }, [list])
    
    // const intersectionObserver = (entries, io) => {
    //     entries.forEach((entry) => {
    //         if(entry.isIntersecting) { // 관찰하고 있는 entry가 화면에 보여지는 경우
    //             io.unobserve(entry.target); // entry 관찰 해제
    //             // dispatch(loadContentsDB)(setInfoArray); // 데이터 가져오기
    //             // getInfo();
    //             dispatch(loadContentsDB())
    //         }
    //     })
    // }
    
  
//    console.log(token)
    
    return(
        <>
        {isLogin ? (
        <Wrap>
            <div>
        <Header/>
            </div>
            <LeftSide/>
            <RightSide/>
            <MainBox>
        <StoriesBox/>
        <ContentsBox />
        <ContentsListBox  />
        </MainBox>
        </Wrap>) : (navigate("/"))}
        </>
    );
};

export default Main;
