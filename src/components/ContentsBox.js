import React, { useState } from "react";
import styled from "styled-components";
import user from "../images/init-user.png"
import ContentsModal from "./ContentsModal";
import ContentsPost from "./ContentsPost";
import { FcCamcorderPro,FcMms,FcLike } from "react-icons/fc";


const MainBox = styled.div`
    width: 500px;
    height: 90px;
    margin: auto;
    margin-top: 50px;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
    /* box-shadow:  0px 2px 8px 0px #7f8fa6;; */
    /* box-shadow: 0px 4px 12px #7f8fa6; */
    /* box-shadow: 0px 48px 100px 0px #7f8fa6;; */
    box-shadow: 1px 0px -5px -5px #7f8fa6;
`
const TopBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`

const Img = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
    
`

const WriteBox = styled.div`
    width: 450px;
    height: 35px;
    background-color: #e3e6ea;
    border-radius: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
`
const Span = styled.span`
    margin-left: 8px;
    font-size: 13px;
    color: #a4a7aa;
    width: 440px;
    cursor: pointer;
`

const BottomBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
   
`
const Span2 =styled.span`
    font-size: 13px;
    margin-top: 5px;
    margin-left: 7px;
`

const VideoIcon = styled(FcCamcorderPro)`
   
`
const PottoIcon = styled(FcMms)``

const StatusIcon = styled(FcLike)``

const ContentsBox = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    return(
        <MainBox>
            <TopBox>
            <Img src={user}/>
            <WriteBox >
                <Span onClick={openModal}>?? 님, 무슨 생각을 하고 계신가요?</Span>
                <ContentsModal open={modalOpen} close={closeModal} header="">
                    <ContentsPost  close={setModalOpen}/>
                </ContentsModal>
                </WriteBox>
            </TopBox>
            <hr/>
            <BottomBox>
                <IconBox><VideoIcon/><Span2>라이브 방송</Span2></IconBox>
                <IconBox><PottoIcon/><Span2>사진/동영상</Span2></IconBox>
                <IconBox><StatusIcon/><Span2>기분/활동</Span2></IconBox>
            </BottomBox>
        </MainBox>
    )
};

export default ContentsBox;