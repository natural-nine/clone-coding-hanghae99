import React from "react";
import styled from "styled-components";


const Wrap = styled.div`
    width: 300px;
    height: 90vh;
    border: 1px solid black;
    position: absolute;
    right: 0;
    margin-top:10px;
    display: flex;
    flex-direction: column;
`

const RightSide = () => {
    return(<Wrap></Wrap>);
};

export default RightSide;