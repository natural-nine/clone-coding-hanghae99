import React, { useReducer, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import user from "../images/init-user.png"
import { createContentsDB } from "../redux/modules/post";
import {isUpdate} from "../recoil";
import { storage } from "../redux/configStore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


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
    padding:30px;
    border: none;
    height: 30px;
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
    outline: none;
`

const Btn = styled.button`
    height: 40px;
    border-radius: 20px;
    background-color: #087cea;
    color:#fff;
    margin-top: 20px;
    
`


const ContentsPost = (props) => {
    
    const textRef = useRef(null);
    const conImg = useRef(null);
    const navigate = useNavigate();
    const [defaultImg, setDefaultImg] = useState(false);
    const [isImg, setIsImg] = useState("");
    const dispatch = useDispatch();
    const [isupdate, isSetUpdate] = useRecoilState(isUpdate)
    const [isFileUrl, setIsFileUrl] = useState("");

    let fileUrl = "";
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
        const uploadFile = await uploadBytes(
            ref(storage, `images/${e.target.files[0].name}`),
            e.target.files[0]
          );
      
          fileUrl = await getDownloadURL(uploadFile.ref);
          conImg.current = { url: fileUrl };
          console.log(e.target.files[0], "this is ffile");
      
          //파일 url state에 저장
          setIsFileUrl(fileUrl);
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(textRef.current.value);
        const textValue = textRef.current.value
        if(textValue == ""){
            alert("글을 작성하지 않았습니다.")
        }else{
            props.close(false);
        console.log(isImg, textValue, "is img url");

        let data = {
            content:textValue,
            imageURL:isImg,
        };
        console.log(data, "this is database")
        dispatch(createContentsDB(data));  
        }
        isSetUpdate((prev)=>!prev)
         
         navigate("/main")
         alert("게시글 등록 완료.")
    };

    
    const imgClick = () => {
        conImg.current.click();
    };
    // console.log(props.close,props.update.update, "this is post props")
    return(
        <Wrap>
            <H1>게시물 만들기</H1>
            <hr/>
            <UserBox>
                <Img src={user}/>
                <Span>{localStorage.getItem("user_name")}</Span>
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