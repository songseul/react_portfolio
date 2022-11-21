import { MdWebAsset } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';
import { useState } from 'react';
import styled from 'styled-components';
import '../style/Nav.css';
import { NavLink } from 'react-router-dom';
import MobileNav from './MobileNav';

const Nav = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { name: 'Home', element: '/' },
    { name: 'About', element: '/about' },
    { name: 'Project', element: '/project' },
  ];

  const selectMenuHandler = index => {
    // TIP: parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않습니다
    // TODO : 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신되도록 함수를 완성하세요.
    setCurrentTab(index);
  };
  return (
    <Container>
      <MobileNav />
      <NavBox>
        {menuArr.map((el, index) => {
          return (
            <NavLink to={el.element} className="nav-link">
              <List key={index} onClick={() => selectMenuHandler(index)}>
                {el.name}
              </List>
            </NavLink>
          );
        })}
      </NavBox>
      <ul>
        <IconBox>
          <div>
            <a href="https://songsari.tistory.com/">
              <MdWebAsset />
            </a>
          </div>

          <div>
            <a href="https://github.com/songseul">
              <AiOutlineGithub />
            </a>
          </div>
        </IconBox>
      </ul>
    </Container>
  );
};

export default Nav;

// 네비게이션 전체 박스
const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  //border-bottom: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding-left: 20px;
  @media (max-width: 800px) {
    & {
      justify-content: left;
    }
  }
`;

export const NavBox = styled.ul`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-family: 'Cormorant SC', serif;
  @media (max-width: 800px) {
    & {
      display: none;
    }
  }
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
