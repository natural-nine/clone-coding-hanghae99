import React from "react";
import styled from "styled-components";
import criminal from "../images/풍문으로.jpeg"
import user from "../images/init-user.png"
import beom from "../images/범석.jpeg"
import pan from "../images/판호.jpeg"
import hyeong from "../images/행배.jpeg"
import {FaPlus} from "react-icons/fa"
import prada from "../images/prada-model.jpeg"
import fendi from "../images/fendi-model.jpeg"
import sant from "../images/sant.jpeg"

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    
    margin-top: 7px;
    width: 500px;
    height:170px;
    margin: auto;
    margin-top: 10px;
`
const ImgBox = styled.div` 
    width: 100px;  
    border-radius: 15px;
    
`
const MyImg = styled.img`
    width: 100px;
     height:150px;
     border-radius: 15px;
     
`

const H3 = styled.h3`
    margin-top: 25px;
    margin-left: 5px;
`
const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2.5px solid #fff;
    margin-top: -25px;
    margin-left: 32px;
`
const Plus = styled(FaPlus)`
    color: #087cea;
    font-size: 20px;
`

const ImgBox2 = styled.div` 
    position: absolute;
    z-index: 2;
`

const Img2 = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2.5px solid #087cea;
    margin: 7px 0px 0px 7px;
`
const Img = styled.img`
    border-radius: 15px;
     width: 100px;
     height:200px;
`
const StoriesBox = () => {
    return(
        <Wrap>
            <ImgBox>
            
                <MyImg src={user} />
                <Circle><Plus/></Circle>
                <H3>스토리 만들기</H3>
            </ImgBox>
            <ImgBox>
                <ImgBox2>
                    <Img2 src={prada} />
                </ImgBox2>
                <Img src={prada}/>
            </ImgBox>
            <ImgBox>
                <ImgBox2>
                    <Img2 src={fendi} />
                </ImgBox2>
                <Img src={fendi}/>
            </ImgBox>
            <ImgBox>
                <ImgBox2>
                    <Img2 src={sant} />
                </ImgBox2>
                <Img src={sant}/>
            </ImgBox>
        </Wrap>
    );
};

export default StoriesBox;