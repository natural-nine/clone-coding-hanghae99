import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import user from "../images/init-user.png"
import { createContentsDB } from "../redux/modules/post";

const Wrap = styled.div`
    
`
const H1 = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`
const UserBox = styled.div`
    display: flex;
    align-items: center;
    
`
const Img = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`
const Span = styled.span`
    font-size: 13px;
    margin-left: 5px;
`
const ContentsForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 380px;
    margin-top: 10px;
`
const TextInput = styled.input`
`
const ConImg = styled.img`
    width: auto;
    height: 300px;
`
const SelectImgBox = styled.div`
    width: auto;
    height: 300px;
    background-color: #e3e6ea;;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Span2 = styled.span`

`

const Input = styled.input`
    display: none;
`

const Btn = styled.button`
    height: 30px;
    border-radius: 20px;
    background-color: #087cea;
    color:#fff;
    margin-top: 20px;
`


const ContentsPost = (props) => {
    
    const textRef = useRef(null);
    const conImg = useRef(null);
    
    const [defaultImg, setDefaultImg] = useState(false);
    const [isImg, setIsImg] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(textRef.current.value);
        const textValue = textRef.current.value
        props.close(false);
        console.log(isImg, textValue);

        let data = {
            contents:textValue,
            image:isImg
        };
        dispatch(createContentsDB(data));   
    };

    const onImgChange = async (e) => {
        const reader = new FileReader();
        const file = conImg.current.files[0];
        console.log(file);
    
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setIsImg(reader.result);
          console.log("이미지주소", reader.result);
        };
        setDefaultImg(true);
    }
    const imgClick = () => {
        conImg.current.click();
    };
    return(
        <Wrap>
            <H1>게시물 만들기</H1>
            <hr/>
            <UserBox>
                <Img src={user}/>
                <Span>내츄럴</Span>
            </UserBox>
            <ContentsForm onSubmit={onSubmit}>
                <TextInput ref={textRef}/>
                <Input onChange={onImgChange} ref={conImg} type={"file"} accept="image/*"/>
                {defaultImg ? (<ConImg src={isImg}/>):
                (<SelectImgBox onClick={imgClick}>
                    <Span2>이미지를 선택해 주세요.</Span2>
                </SelectImgBox>)}
                <Btn >게시</Btn>
            </ContentsForm>
        </Wrap>
    );
};

export default ContentsPost;