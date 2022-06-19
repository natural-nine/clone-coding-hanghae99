import styled from "styled-components";
import { useEffect, useRef } from "react";

//회원가입 모달창 띄우기
function Modal() {
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
          <input placeholder="성(性)" />
          <input placeholder="이름(성은 제외)" />
        </Name>
        <input className="name" placeholder="휴대폰 번호 또는 이메일" />
        <input className="name" placeholder="새 비밀번호" />
        <Bir>
          <div>생일</div>
          <select ref={year_ref}>
            {ymd.year.map((year, idx) => {
              return (
                <option key={idx} value={year}>
                  {year}
                </option>
              );
            })}
          </select>

          <select ref={month_ref}>
            {ymd.month.map((mon, idx) => {
              return (
                <option key={idx} value={mon}>
                  {mon}
                </option>
              );
            })}
          </select>

          <select ref={day_ref}>
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
            <input name="test" type="radio" />
          </label>
          <label>
            남성
            <input name="test" type="radio" />
          </label>
        </Gender>
      </Body>
      <Footer>
        <p>서비스를 이용하는 사람이 회원님의 연락처 정보를 Facebook에 업로드했을 수도 있습니다</p>
        <p>가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다</p>
        <button>가입하기</button>
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

  select {
    border: 1px solid #CCD0D5;
    :focus{
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
div{
  font-size: 12px;
  margin-bottom: 8px;
}
label{
  margin: 0px 13px 0px 5px;
  padding: 0px 0px 0px 10px;
  line-height: 36px;
  text-align: left;
  
  display:inline-block;
  width: 160px;
  height: 33px;
  border: 1px solid #CCD0D5;
  border-radius: 3px;
}
input{
  position: relative;
  left: 97px;
}
`;

//가입하기 발 부분
const Footer = styled.div`

p{
  font-size: 10px;
  color: #777777;
  margin: 15px;
}
button{
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
`


export default Modal;
