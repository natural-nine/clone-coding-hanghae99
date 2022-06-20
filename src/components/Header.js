import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {FaPlus,
    FaSortDown,
    FaSistrix,
    FaFacebook, 
    FaHome,
    FaUserFriends,
    FaUsers,
    FaTh,
    FaPlay,
    FaFacebookMessenger,
    FaBell} from "react-icons/fa";
import Profile from "./Profile";
//main page header

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    margin-top: 7px;
`

const SlideBar = styled.div`
    
`
const HeaderBocx = styled.div`
    display: flex;
`
const FbIcon = styled(FaFacebook)`
    color: #087cea;
    font-size: 35px;
    margin-left: 10px;
`
const SerachBar = styled.div`
    width: 170px;
    height: 30px;
    background-color: #e3e6ea;
    border-radius: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    .serach{
        color: #a4a7aa;
        font-size: 12px;
    }
    margin-left: 10px;
    margin-top: 4px;
`

const SerachIcon = styled(FaSistrix)`
    margin-left: 5px;
    margin-top: -2px;
`
const Span = styled.span`
    
    margin-left: 5px;
    /* color: #a4a7aa; */
`

const HeaderMidBox = styled.div`
 .icon{
    margin-right: 75px;
    font-size: 25px;
 }
`


const HomeIcon = styled(FaHome)`
   color: #087cea;
`
const FriendIcon = styled(FaUserFriends)`

`
const PlayIocn = styled(FaPlay)`

`
const GroupIcon = styled(FaUsers)`

`

const EtcIcon = styled(FaTh)`

`
const CircleBox = styled.div`
    display: flex;
    
`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    background-color: #e3e6ea;
    border-radius: 50%;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Plus = styled(FaPlus)`

`
const Messenger = styled(FaFacebookMessenger)`
`
const Bell = styled(FaBell)`
`

const Down = styled(FaSortDown)`
    margin-top: -5px;
    font-size: 20px;
`
const Header = () => {
    const [profile, setProfile ] = useState(false);

    const onClick = () => {
        setProfile((prev)=>!prev)
        console.log(profile)
    }

    return(
        <>
        <Wrap>
            <HeaderBocx>
                <FbIcon/>
                <SerachBar>
                    <SerachIcon className="serach"/>
                    <Span className="serach">Facebook 검색</Span>
                </SerachBar>
            </HeaderBocx>
            <HeaderMidBox>
                <HomeIcon className="icon"/>
                <FriendIcon className="icon"/>
                <PlayIocn className="icon"/>
                <GroupIcon className="icon"/>
                <EtcIcon className="icon"/>
            </HeaderMidBox>
            <CircleBox>
                <Circle>
                    <Plus/>
                </Circle>
                <Circle>
                    <Messenger/>
                </Circle>
                <Circle>
                    <Bell/>
                </Circle>
                <Circle>
                    <Down onClick={onClick}/>
                </Circle>
            </CircleBox>
            
        </Wrap>
        {profile ? (<Profile/>):("")}
        </>
    );
};

export default Header;