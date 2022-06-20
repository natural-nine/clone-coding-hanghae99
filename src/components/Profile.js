import React, { useRef, useState } from "react";
import styled from "styled-components";
import user from "../images/init-user.png"

const Wrap = styled.div`
    width: 250px;
    height: 300px;
    border: 1px solid black;
    position: absolute;
    z-index: 2;
    right: 5px;
    border-radius: 10px;
`

const ProfileBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
`
const UserBox = styled.div`
    display: flex;
    align-items: center;
`
const Span = styled.span`
    font-size: 13px;

`

const Img = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0px 7px 0px 5px;
`
const BtnBox = styled.div`

`
// const ImgSelectBox = styled.div`
//     width: 240px;
//     height: 240px;
// `

const Input = styled.input`
    display: none;
`
const Btn = styled.button`
    font-size: 10px;
    margin: 0px 5px 0px 5px;
    border: none;
    cursor: pointer;
`
const Profile = () => {
    const [isImg, setIsImg] = useState("");
    const [defaultImg, setDefaultImg] = useState(false);
    const profileImg = useRef(null);
    const imgClick = () => {
        profileImg.current.click();
    };
    const onImgChange = async (e) => {
        const reader = new FileReader();
        const file = profileImg.current.files[0];
        console.log(file);
    
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setIsImg(reader.result);
          console.log("이미지주소", reader.result);
        };
        setDefaultImg(true);
    }
    return(
        <Wrap>
            <ProfileBox>
                <UserBox>
                    {defaultImg ? (<Img src={isImg}/>):<Img src={user}/>}    
                    <Span>홍길동</Span>
                </UserBox>
                <BtnBox>
                    <Input onChange={onImgChange} ref={profileImg} type={"file"} accept="image/*"/>
                    <Btn onClick={imgClick}>수정</Btn>
                    <Btn>저장</Btn>
                </BtnBox>
            </ProfileBox>
        </Wrap>
    );
};

export default Profile;

