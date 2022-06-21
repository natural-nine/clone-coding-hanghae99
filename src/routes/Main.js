import React from "react";
import Header from "../components/Header";
import ContentsBox from "../components/ContentsBox";
import styled from "styled-components";
import StoriesBox from "../components/StoriesBox";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

// main route, 나머지 component에 추가 예정
const Wrap = styled.div`
    background-color: #eff2f5;
    height:100vh;
`

const Main = () => {
    // const [modalOpen, setModalOpen] = useState(false);

    return(
        
        <Wrap>
            <div>
        <Header/>
            </div>
            <LeftSide/>
            <RightSide/>
        <StoriesBox/>
        <ContentsBox/>
        </Wrap>
        
    );
};

export default Main;
