import React from "react";
import styled from "styled-components";


const MainBox = styled.div`
    width: 500px;
    height: 350px;
    margin: auto;
    margin-top: 50px;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
    border: 1px solid black;
    /* box-shadow:  0px 2px 8px 0px #7f8fa6;; */
    /* box-shadow: 0px 4px 12px #7f8fa6; */
    /* box-shadow: 0px 48px 100px 0px #7f8fa6;; */
    box-shadow: 1px 0px -5px -5px #7f8fa6;
`

const ContentsListBox = () => {
    return(
        <MainBox></MainBox>
    )
};

export default ContentsListBox;