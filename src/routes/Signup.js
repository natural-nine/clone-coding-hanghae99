import React, { useState } from "react";
import styled from "styled-components";
//로고 이미지
import logo from "../images/logo-signup.png";
//모달 컴포넌트
import Modal from "../components/Modal";

function Signup() {
  let [modal, setModal] = useState(false);

  //
  return (
    <All>
      {modal && <Test />}
      {modal && <Modal />}
      <Box>
        <Lcontainer>
          <Logo src={logo} />
          <p>
            Facebook에서 전 세계에 있는 친구, 가족, 지인들과 함께 이야기를
            나눠보세요
          </p>
        </Lcontainer>
        <Container>
          <div>
            <input placeholder="이메일 또는 전화번호"></input>
            <input placeholder="비밀번호"></input>
          </div>
          <Lobutton> 로그인 </Lobutton>

          <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">
            비밀번호를 잊으셨나요?{" "}
          </a>

          <hr />

          <ModalButton
            onClick={() => {
              setModal(true);
            }}
          >
            새 계정 만들기
          </ModalButton>
        </Container>
    
      </Box>
      <Footer>
        <p>
          한국어 English (US) Tiếng Việt Bahasa Indonesia ภาษาไทย Español
          中文(简体) 日本語 Português (Brasil) Français (France) Deutsch
          <button> + </button>
        </p>
        <hr />
        <p>
          가입하기 로그인 Messenger Facebook Lite Watch 장소 게임 Marketplace
          Facebook Pay Oculus Portal Instagram Bulletin 지역 기부 캠페인 서비스
          투표 정보 센터 그룹 정보 광고 만들기 페이지 만들기 개발자 채용 정보
          개인정보처리방침 쿠키 AdChoices 이용 약관 고객 센터 연락처 업로드 및
          비사용자{" "}
        </p>
      </Footer>
    </All>
  );
}

const Test = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.8;
`;

const Lcontainer = styled.div`
  margin: 50px;
  padding: 100px;

  @media screen and (max-width: 960px) {
    padding: 0;
  }

  p {
    padding-top: 15px;
    font-size: 25px;
  }
`;
const Logo = styled.img`
  width: 250px;
`;

const Container = styled.div`
  align-items: center;
  width: 400px;
  height: 360px;
  margin: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 5px 5px 20px 0.5px #ddd;
  background-color: white;
  a {
    text-decoration: none;
    padding: 15px;
    font-size: 14px;
    color: #1877f2;
    :hover {
      text-decoration: underline;
    }
  }
  div {
    width: 400px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px;
    input {
      height: 50px;
      font-size: 17px;
      border-radius: 5px;
      border: 1px solid #ddd;
      margin: 10px 0px;
    }
    input:focus {
      outline: 2px solid #1877f2;
    }
  }
  button {
    font-weight: 800;
    border: none;
    border-radius: 5px;
    height: 50px;
  }
  hr {
    width: 95%;
  }
`;
const Lobutton = styled.button`
  color: white;
  background-color: #1877f2;
  font-size: 20px;
  width: 400px;
`;

const ModalButton = styled.button`
  color: white;
  background-color: #42b72a;
  font-size: 17px;
  width: 200px;
  margin-top: 20px;
`;

const Box = styled.div`
  max-width: 70vw;
  min-height: 85vh;
  display: flex;
  flex-direction: row;
  margin: auto;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const All = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Footer = styled.div`
  height: 200px;
  padding: 0px 150px;
  margin-top: 50px;

  background-color: white;
  button {
    margin-left: 10px;
  }

  p {
    font-size: 12px;
    color: grey;
    padding: 5px;
  }
`;

export default Signup;
