import React, { useState } from "react";
import styled from "styled-components";
import user from "../images/init-user.png"
import ContentsModal from "./ContentsModal";
import ContentsPost from "./ContentsPost";

const MainBox = styled.div`
    width: 500px;
    height: 75px;
    border: 1px solid black;
    margin: auto;
    margin-top: 50px;
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

`

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
            <BottomBox>
                
            </BottomBox>
        </MainBox>
    )
};

export default ContentsBox;