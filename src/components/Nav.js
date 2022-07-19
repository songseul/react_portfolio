import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { useState } from "react";
import styled from "styled-components";
import "../style/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { name: "Home", element: "/" },
    { name: "About", element: "/about" },
    { name: "Project", element: "/project" },
    { name: "Chat", element: "/chat" },
  ];

  const selectMenuHandler = (index) => {
    // TIP: parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않습니다
    // TODO : 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신되도록 함수를 완성하세요.
    setCurrentTab(index);
  };
  return (
    <Container>
      <NavBox>
        {menuArr.map((el, index) => {
          return (
            <Link to={el.element}>
              <List
                key={index}
                className={`${index === currentTab ? "select" : ""}`}
                onClick={() => selectMenuHandler(index)}
              >
                {el.name}
              </List>
            </Link>
          );
        })}
      </NavBox>
      <ul>
        <IconBox>
          <div>
            <FiInstagram />
          </div>
          <div>
            <BsYoutube />
          </div>
          <div>
            <AiOutlineGithub />
          </div>
        </IconBox>
      </ul>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  width: 100%;
  height: 80px;
  //border-bottom: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 800px) {
    & {
      background-color: red;
    }
  }
`;

const NavBox = styled.ul`
  display: flex;
  align-items: center;
  font-size: 2.3rem;
  font-family: "Cormorant SC", serif;
`;

const List = styled.li`
  cursor: pointer;
  margin-right: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconBox = styled.div`
  font-size: 3rem;
  display: flex;
  position: absolute;
  right: 5%;
  top: 0;
  transform: translateY(50%);
  & div {
    margin-right: 1rem;
    cursor: pointer;
  }
`;
