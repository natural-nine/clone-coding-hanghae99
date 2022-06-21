import React from "react";
import styled from "styled-components";
import user from "../images/init-user.png"
import one from "../images/1.png"
import two from "../images/2.png"
import three from "../images/3.png"
import four from "../images/4.png"
import five from "../images/5.png"
import six from "../images/6.png"
import seven from "../images/7.png"
import eight from "../images/8.png"
import nine from "../images/9.png"
import ten from "../images/10.png"
import {FaSortDown} from "react-icons/fa";

const Wrap = styled.div`
    width: 300px;
    height: 90vh;
    
    position: absolute;
    left: 0;
    margin-top:10px;
    display: flex;
    flex-direction: column;
`

const EtcBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 13px;
    margin-left: 10px;
`
const Img = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const Span = styled.span`
    font-size: 13px;
    margin-left: 10px; 
`
const Circle = styled.div`
    width: 30px;
    height: 30px;
    background-color: #e3e6ea;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Down = styled(FaSortDown)`
    font-size: 15px;
    margin-top: -6px;
`

const LeftSide = () => {
    return(
        <Wrap>
            <EtcBox>
                <Img src={user}/>
                <Span>홍길동</Span>
            </EtcBox>
            <EtcBox>
                <Img src={one}/>
                <Span>친구</Span>
            </EtcBox>
            <EtcBox>
                <Img src={two}/>
                <Span>그룹</Span>
            </EtcBox>
            <EtcBox>
                <Img src={three}/>
                <Span>Watch</Span>
            </EtcBox>
            <EtcBox>
                <Img src={four}/>
                <Span>과거의 오늘</Span>
            </EtcBox>
            <EtcBox>
                <Img src={five}/>
                <Span>저장됨</Span>
            </EtcBox>
            <EtcBox>
                <Img src={six}/>
                <Span>페이지</Span>
            </EtcBox>
            <EtcBox>
                <Img src={seven}/>
                <Span>이벤트</Span>
            </EtcBox>
            <EtcBox>
                <Img src={eight}/>
                <Span>최신</Span>
            </EtcBox>
            <EtcBox>
                <Img src={nine}/>
                <Span>즐겨찾기</Span>
            </EtcBox>
            <EtcBox>
                <Img src={ten}/>
                <Span>광고 관리자</Span>
            </EtcBox>
            <EtcBox>
                <Circle>
                <Down/>
                </Circle>
                <Span>더보기</Span>
            </EtcBox>
        </Wrap>
    );
};

export default LeftSide;