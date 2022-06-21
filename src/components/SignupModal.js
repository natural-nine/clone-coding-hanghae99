import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { add_user_AX } from "../redux/modules/user";

//회원가입 모달창 띄우기
function Modal() {
  const dispatch = useDispatch();
  //회원정보 state
  const [user, setuser] = useState({
    familyName: "",
    givenName: "",
    mail: "",
    password: "",
    year: "",
    month: "",
    day: "",
    gender: "",
  });

  // 유저 데이터 input 입력값 넣어두기
  const handleChange = (prop) => (e) => {
    setuser({ ...user, [prop]: e.target.value });
  };

  // 유효성 검사

  //생일 선택박스 만들기
  const year_ref = useRef(null);
  const month_ref = useRef(null);
  const day_ref = useRef(null);

  //array로 빈배열 118개를 만들고, key값을 가져와서 117개의 숫자를 배열화 한다.
  const ymd = {
    //1905년부터 2022년 까지 나올수 있게 key값에 1905를 더함
    //최신연도가 위로 올라가게 reverse 사용
    year: [...Array(118).keys()].map((key) => key + 1905).reverse(),
    //나머지 month랑 day도 같은 방식으로 배열화 해준다
    month: [...Array(12).keys()].map((key) => key + 1),
    day: [...Array(31).keys()].map((key) => key + 1),
  };
  //오늘 날짜가 위로 올라가도록 설정해주기
  const date = new Date();
  useEffect(() => {
    // console.log(date.getDate());
    // month는 1더해줘야함
    // console.log(date.getMonth() + 1);
    // console.log(date.getFullYear());
    year_ref.current.value = date.getFullYear();
    month_ref.current.value = date.getMonth() + 1;
    day_ref.current.value = date.getDate();
  }, []);

  const signUp = () => {
    // validation 체크
    if(!/^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(user.mail)) {
      alert("이메일만 입력해 주세요!");
      return;
    }

    // 하기 코드는 테스트 및 분석해봐야 함
    if(!/^[a-zA-Z0-9!@#$%^*+=-]{4,16}$/.test(user.password)){ // 안에 소문자,대문자,숫자, 특수문자 '!' ~ '+' (괄호 제외)를 제외한 값이 있을 경우
      alert("비밀번호는 숫자와 영문자, 특수문자(!@#$%^&*+=-) 조합으로 사용할 수 있으며 4~16자리로 입력해야 합니다.");
      return;
    }

    //dispatch해서 유저정보 보내기
    dispatch(add_user_AX(user));
  };

  return (
    <Container>
      <Header>
        <div>
          <h1>가입하기</h1>
          <p>빠르고 쉽습니다.</p>
        </div>
        <button
          onClick={() => {
            alert(`버튼을 눌렀어!`);
          }}
        >
          X
        </button>
      </Header>
      <hr />
      <Body>
        <Name>
          <input placeholder="성(性)" onChange={handleChange("familyName")} />
          <input
            placeholder="이름(성은 제외)"
            onChange={handleChange("givenName")}
          />
        </Name>
        <input
          className="name"
          placeholder="휴대폰 번호 또는 이메일"
          onChange={handleChange("mail")}
        />
        <input
          className="name"
          placeholder="새 비밀번호"
          onChange={handleChange("password")}
        />
        <Bir>
          <div>생일</div>
          <select ref={year_ref} onChange={handleChange("year")}>
            {ymd.year.map((year, idx) => {
              return (
                <option key={idx} value={year}>
                  {year}
                </option>
              );
            })}
          </select>

          <select ref={month_ref} onChange={handleChange("month")}>
            {ymd.month.map((mon, idx) => {
              return (
                <option key={idx} value={mon}>
                  {mon}
                </option>
              );
            })}
          </select>

          <select ref={day_ref} onChange={handleChange("day")}>
            {ymd.day.map((day, idx) => {
              return (
                <option key={idx} value={day}>
                  {day}
                </option>
              );
            })}
          </select>
        </Bir>
        <Gender>
          <div>성별</div>
          <label>
            여성
            <input
              name="test"
              value={"woman"}
              type="radio"
              onChange={handleChange("gender")}
            />
          </label>
          <label>
            남성
            <input
              name="test"
              type="radio"
              value={"man"}
              onChange={handleChange("gender")}
            />
          </label>
        </Gender>
      </Body>
      <Footer>
        <p>
          서비스를 이용하는 사람이 회원님의 연락처 정보를 Facebook에 업로드했을
          수도 있습니다
        </p>
        <p>
          가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키 정책에
          동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며 알림은
          언제든지 옵트 아웃할 수 있습니다
        </p>
        <button type="submit" onClick={signUp}>
          가입하기
        </button>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  height: 515px;
  background-color: white;
  box-shadow: 5px 5px 20px 0.5px #ddd;
  border-radius: 5px;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
`;
//가입하기 헤더부분
const Header = styled.div`
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  h1 {
    font-weight: 550;
    font-size: 30px;
  }
  p {
    color: gray;
    font-size: 15px;
    margin-top: 10px;
  }
  button {
    width: 25px;
    height: 25px;
    top: 10px;
    right: 10px;
    position: absolute;
  }
`;
//가입하기 몸통부분
const Body = styled.div`
  font-size: 15px;
  .name {
    height: 33px;
    display: flex;
    width: 360px;
    margin: 5px auto 10px auto;
  }
  input {
    margin: auto;
    font-size: 15px;
    border: 0.5px solid #ccd0d5;
    border-radius: 5px;
    background-color: #f5f6f7;
    :focus {
      outline: none;
    }
  }
`;

const Name = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  input {
    margin: 10px 8px 0px 8px;
    width: 170px;
    height: 30px;
    font-size: 15px;
  }
`;

const Bir = styled.div`
  font-size: 12px;
  margin: 9px;
  div {
    margin-left: 6px;
  }
  select {
    border: 1px solid #ccd0d5;
    :focus {
      outline: none;
    }
    align-items: center;
    width: 115px;
    height: 36px;
    border-radius: 3px;
    margin: 5px;
  }
`;
const Gender = styled.div`
  margin-left: 10px;
  div {
    font-size: 12px;
    margin-bottom: 8px;
    margin-left: 6px;
  }
  label {
    margin: 0px 13px 0px 5px;
    padding: 0px 0px 0px 10px;
    line-height: 36px;
    text-align: left;

    display: inline-block;
    width: 160px;
    height: 33px;
    border: 1px solid #ccd0d5;
    border-radius: 3px;
  }
  input {
    position: relative;
    left: 97px;
  }
`;

//가입하기 발 부분
const Footer = styled.div`
  p {
    font-size: 10px;
    color: #777777;
    margin: 15px;
  }
  button {
    position: relative;
    left: 103px;
    width: 194px;
    height: 36px;
    font-weight: 700;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    background-color: #42b72a;
    color: white;
  }
`;

export default Modal;
