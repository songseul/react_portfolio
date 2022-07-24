import React from "react";
import { NavBox } from "./Nav";
import styled from "styled-components";

function MobileNav() {
  return (
    <MobileNavContainer>
      <NavBox />
    </MobileNavContainer>
  );
}

export default MobileNav;

const MobileNavContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;
