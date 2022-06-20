import React from 'react';
import styled from 'styled-components';
import '../css/contentsModal.css';

const BtnBox = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Btn = styled.button`
    font-size: 20px;
    width: 20px;
    height: 20px;
    border: 50%;
    margin-right: 2px;
`

const ContentsModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          {/* <header style={{"alignItems":"center", "justifyContent":"center"}}>
            {header}  */}
            <BtnBox>
            <Btn className="close" onClick={close}>
              &times;
            </Btn>
            </BtnBox>
          {/* </header> */}
          <main>{props.children}</main>
          <footer>
            {/* <button className="close" onClick={close}>
              close
            </button> */}
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ContentsModal;