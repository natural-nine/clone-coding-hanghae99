import React from "react";
import Header from "../components/Header";
import ContentsBox from "../components/ContentsBox";
import styled from "styled-components";
import StoriesBox from "../components/StoriesBox";

// main route, 나머지 component에 추가 예정
const Wrap = styled.div`
    
`

const Main = () => {
    // const [modalOpen, setModalOpen] = useState(false);

    return(
        
        <Wrap>
            <div>
        <Header/>
            </div>
        <StoriesBox/>
        <ContentsBox/>
        </Wrap>
        
    );
};

export default Main;
