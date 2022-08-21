import React, { useState } from "react";
import Modals from "../components/Modal";
import { aboutdata } from "../data/data.js";
import styled from "styled-components";
import "./About.scss";

import skillIcon from "../assets/skill.png";
import linkIcon from "../assets/link.png";
import skillJsIcon from "../assets/skill_icon_1.png";
import skillReactIcon from "../assets/skill_icon_2.png";
import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

function About() {
  const items = aboutdata.data;
  const [imgModalOn, setImgModalOn] = useState(false);
  const [img, setImg] = useState(
    "https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
  );

  return (
    <>
      <Modals show={imgModalOn} onHide={() => setImgModalOn(false)} src={img} />
      <AboutContainer>
        <AboutLeftScroll>
          <div class="message">
            Sorry, your browser does not support CSS Grid. 😅
          </div>

          <section class="section">
            <h1>내가 나타나 볼께 얍!</h1>

            <ul class="grid">
              {items.map((item) => (
                <React.Fragment>
                  <li class={item.class} key={`data-${item.id}`}>
                    <img src={item.src} />
                    <button
                      onClick={() => {
                        setImgModalOn(true);
                        setImg(item.src);
                      }}
                      class="item__details"
                    >
                      {item.name}
                    </button>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </section>
        </AboutLeftScroll>
        <AboutRightProfile>
          <AboutRightProfileTop>
            <div className="about_left_skill">
              <div>
                <img src={skillIcon} className="skill_icon" />
              </div>
              <div className="about_skill_icons">
                <img src={skillJsIcon} /> <img src={skillReactIcon} />
              </div>
            </div>

            <div className="about_right_link">
              <div>
                <img src={linkIcon} className="link_icon" />
              </div>
              <div className="about_link_icon">
                <AboutIconBox>
                  <div>
                    <FiInstagram />
                  </div>
                  <div>
                    <BsYoutube />
                  </div>
                  <div>
                    <AiOutlineGithub />
                  </div>
                </AboutIconBox>
              </div>
            </div>
          </AboutRightProfileTop>

          <AboutRightProfileBottom>
            <div>
              <h2> • SSG • </h2>
              <h3>현재 프론트엔드 개발자를 지망하고 있습니다.</h3> <br />
              <p>
                디자인과 영상에도 관심이 많으며, <br /> <br />
                자체 쇼핑 애플리케이션을 개발 하여 <br /> <br />
                저만의 브랜드 쇼핑몰을 만들줄 아는 프론트엔드 개발자와
                디자이너가
                <br /> <br />
                되는 것을 꿈꾸고 있습니다.
              </p>
            </div>
          </AboutRightProfileBottom>
        </AboutRightProfile>
      </AboutContainer>
    </>
  );
}

export default About;

const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
  /* height: 100vh; */
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    & {
      flex-direction: column;
    }
  }
`;

const AboutLeftScroll = styled.div`
  width: 65%;

  box-sizing: border-box;
  overflow: auto;
  @media (max-width: 800px) {
    & {
      width: 100%;
    }
  }
`;

const AboutRightProfile = styled.div`
  margin-top: 10%;
  z-index: 9;

  width: 45%;
  padding: 1rem;
  box-sizing: border-box;
  margin-top: 0;
  @media (max-width: 800px) {
    & {
      width: 100%;
      height: 100vh;
    }
  }
`;

const AboutRightProfileTop = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  /* background-color: blue; */
  padding-bottom: 50px;
  box-sizing: border-box;
  align-items: flex-end;

  & .about_left_skill {
    width: 50%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    .skill_icon {
      width: 100%;
    }
    & .about_skill_icons img {
      margin-top: 10px;
      width: 50px;
    }
  }
  & .about_right_link {
    width: 50%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .link_icon {
    width: 100%;
  }
`;
const AboutIconBox = styled.div`
  font-size: 40px;
  margin-top: 10px;
  display: flex;
`;

const AboutRightProfileBottom = styled.div`
  height: 50%;
  width: 100%;
  border-top: 1px solid #0e5ddd;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & h2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #0e5ddd;
    font-family: "Cormorant SC", serif;
  }
  & h3 {
    margin-top: 1rem;
    font-size: 2rem;
    color: #0e5ddd;
  }
  & p {
    margin-top: 1rem;
    font-size: 1.3rem;
  }
`;
