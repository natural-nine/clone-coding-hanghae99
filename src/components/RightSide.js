import React from "react";
import styled from "styled-components";
import fendi from "../images/fendi.png"
import gucci from "../images/gucci.png"
import valentino from "../images/valentino.png"
import prada from "../images/prada.png"
import balenciaga from "../images/balenciaga.png"


const Wrap = styled.div`
    width: 200px;
    height: 65vh;
    
    position: absolute;
    right: 0;
    margin-top:10px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`
const AdBox = styled.div`
    width: 50px;
    height: 50px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`
const AdImg = styled.img`
    box-sizing: border-box;
    width: 55px;
    height: 55px;
    border-radius: 10px ;
    box-shadow: 1px 0px -5px -5px #7f8fa6;
`
const Span = styled.span`
`
const Span2 = styled.span`
`

const RightSide = () => {
    return(
    <Wrap>
        <span style={{"marginTop":"10px", "marginBottom":"15px"}}>광고</span>
        <AdBox>
            <AdImg src={fendi}/>
            <div>
            </div>
        </AdBox>
        <AdBox>
            <AdImg src={gucci}/>
           
        </AdBox>
        <AdBox>
            <AdImg src={balenciaga}/>
            <div>
            </div>
        </AdBox>
        <AdBox>
            <AdImg src={prada}/>
            <div>
            </div>
        </AdBox>
        <AdBox>
            <AdImg src={valentino}/>
            <div>
            </div>
        </AdBox>
    </Wrap>
    );
};

export default RightSide;