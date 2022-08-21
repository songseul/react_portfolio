import React, { useEffect, useCallback, useState } from "react";
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function MobileNav() {
  const [currentTab, setCurrentTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const menuArr = [
    { name: "Home", element: "/" },
    { name: "About", element: "/about" },
    { name: "Project", element: "/project" },
    { name: "Chat", element: "/chat" },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  const handlePopupClick = (e) => e.stopPropagation();

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <MobileNavContainer className="userMenu">
      <button className="iconButton" onClick={handleButtonClick}>
        <GiHamburgerMenu size="2x" />
      </button>

      {isOpen && (
        <ul className="popup" onClick={handlePopupClick}>
          {menuArr.map((el, index) => {
            return (
              <NavLink to={el.element} className="mobile">
                <li
                  key={index}
                  // className={`${index === currentTab ? "mobile" : ""}`}
                  onClick={() => selectMenuHandler(index)}
                >
                  {el.name}
                </li>
              </NavLink>
            );
          })}
        </ul>
      )}
    </MobileNavContainer>
  );
}

export default MobileNav;

const MobileNavContainer = styled.div`
  font-family: "Cormorant SC", serif;
`;
