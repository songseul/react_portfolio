import React from "react";
import { FiShare } from "react-icons/fi";
import styled from "styled-components";
import Button from "../components/Button";

function Home() {
  return (
    <HomeBox>
      <HomeContainer>
        <Line></Line>
        <HomeFont>
          Frontend Developer
          <br />& Fashion Designer
        </HomeFont>
        <HomeImg></HomeImg>
        <Ssg>SSG</Ssg>
        <ShareButton>
          <Button text="Link" />{" "}
          <ShareIcon>
            <FiShare />
          </ShareIcon>
        </ShareButton>
      </HomeContainer>

      <TranformText>
        just <BlueColor>S</BlueColor>mile & <BlueColor>S</BlueColor>tart <br />
        for my <BlueColor>G</BlueColor>oal
      </TranformText>
    </HomeBox>
  );
}

export default Home;

const HomeBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  padding: 2rem;
  box-sizing: border-box;
`;

const HomeContainer = styled.div`
  box-sizing: border-box;
  padding: 15px;
  /* overflow: hidden; */
  width: 80%;
  height: 100vh;
  /* background-color: #999; */
  position: relative;
  @media (max-width: 1200px) {
    & {
      width: 100%;
      /* background-color: green; */
    }
  }
  @media (max-width: 800px) {
    & {
      width: 100%;
      /* background-color: blue; */
    }
  }
`;

const Line = styled.div`
  width: 90%;
  height: 50px;
  border-bottom: 1px solid #444;
  margin-top: 15rem;
  @media (max-width: 800px) {
    & {
      display: none;
    }
  }
`;
const HomeFont = styled.h1`
  font-size: 5.5rem;
  font-family: "Cormorant SC", serif;

  margin-top: 10rem;
  margin-left: 20rem;
  @media (max-width: 1200px) {
    & {
      margin-left: 50px;
      font-size: 4rem;
    }
  }
  @media (max-width: 800px) {
    & {
      width: 50%;
      font-size: 5vw;
      transition: 0.5s;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      margin-top: 3rem;
    }
  }
`;

const HomeImg = styled.div`
  width: 400px;
  height: 550px;
  border-radius: 47% 47% 0 0;
  position: absolute;
  top: 10rem;
  right: 1rem;
  background-image: url(https://images.unsplash.com/photo-1611244420182-82cc3323eadc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbmtpbmclMjB0ZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.5);
  @media (max-width: 800px) {
    & {
      width: 90%;
      height: 420px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 10rem;
      margin: auto;
      transition: 0.5s;
      box-shadow: -10px -20px 15px 15px rgba(255, 255, 255, 0.5) inset;
    }
  }
`;

const Ssg = styled.h2`
  font-size: 5rem;
  font-family: "Cormorant SC", serif;
  color: #0e5ddd;
  position: absolute;
  bottom: 18rem;
  right: 30rem;
  @media (max-width: 1200px) {
    & {
      left: 4rem;
    }
  }
`;
const ShareButton = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ShareIcon = styled.span`
  font-size: 3rem;
  margin-left: 1rem;
`;

const TranformText = styled.div`
  font-size: 4rem;
  width: 350px;
  height: 100px;

  font-family: "Cormorant SC", serif;
  transform: rotate(90deg);
  position: absolute;
  bottom: 380px;
  right: 0px;

  @media (max-width: 1200px) {
    & {
      font-size: 2.5rem;
      bottom: 50px;
      right: 0;
      transition: 0.5s;
      transform: rotate(0deg);
    }
  }
`;

const BlueColor = styled.span`
  color: #0e5ddd;
`;
