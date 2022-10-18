import React from 'react';
import './Project.scss';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import nullyImg from '../assets/project_01.png';
import lulusImg from '../assets/project_02.png';
import windsorImg from '../assets/project_03.jpg';
import bodysuitImg from '../assets/project_04.jpg';
import StayImageOne from '../assets/project02.png';
import StayImageTwo from '../assets/project02_2.png';

import Button from '../components/Button';
import styled from 'styled-components';

function Project() {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <ProjectContainer>
      <FirstProject>
        <ProjectLeft>
          <div>
            <h2>No.01 / Cherished</h2>
            <p>
              LA 에서 3년간 의상 디자이너로 직접 디자인하고 브랜드에 입점하게된
              <br />
              스토리를 브랜드별 이미지를 테마로 하여
              <br />
              Western Fashion Style을 프로젝트 주제로 작업 하였습니다.
            </p>
            <a href="http://songsg93.com/songseulgi/main.html">
              <Button text="link" />
            </a>
          </div>
        </ProjectLeft>

        <div class="container">
          <Swiper
            class="swiper-container"
            spaceBetween={1}
            slidesPerView={0.9}
            scrollbar={{ draggable: true }}
            navigation
          >
            <div class="swiper-wrapper">
              <SwiperSlide class="swiper-slide">
                <div class="slide-full-image">
                  <img src={nullyImg} alt="nullyimage" />
                </div>

                <div class="slide-full-image">
                  <img src={lulusImg} alt="lulusimage" />
                </div>
              </SwiperSlide>

              <SwiperSlide class="swiper-slide">
                <div class="slide-full-image">
                  <img src={windsorImg} alt="windsorimage" />
                </div>

                <div class="slide-full-image">
                  <img
                    src={bodysuitImg}
                    data-swiper-parallax="100%"
                    alt="웹사이트 이미지"
                  />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </FirstProject>
      <Line> </Line>
      <SecondProject>
        <div class="container">
          <Swiper
            class="swiper-container"
            spaceBetween={1}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            navigation
          >
            <div class="swiper-wrapper">
              <SwiperSlide class="swiper-slide">
                <div class="slide-full-image">
                  <img src={StayImageOne} alt="staybuddy" />
                </div>

                <div class="slide-full-image">
                  <img src={StayImageTwo} alt="staybuddy" />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <ProjectLeft>
          <div>
            <h2>No.02 / STAY, BUDDY</h2>
            <p>
              스테이버디는 반려견이 있는 유저들이 서로의 애완동물에 관한 정보와
              <br />
              소식을 공유하는 애완동물 소셜 커뮤니티며 유기견에 대한 정보를
              드러내 <br />
              반려동물의 입양을 장려하는 프로그레시브 웹 앱(progressive web app)
              입니다.
            </p>
            <a href="https://staybuddy.netlify.app/">
              <Button text="link" />
            </a>
          </div>
        </ProjectLeft>
      </SecondProject>
    </ProjectContainer>
  );
}

export default Project;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ProjectLeft = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  width: 29%;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: 40vh;
  }

  & div {
    padding: 2rem;
    @media (max-width: 1200px) {
      text-align: center;
    }
  }

  & h2 {
    font-family: 'Cormorant SC', serif;
    margin-top: 10%;
    font-size: 3rem;
    color: #0e5ddd;
  }
  & p {
    margin-top: 5%;
    font-size: 1.2rem;
    line-height: 2rem;
  }
  & Button {
    margin-top: 5%;
    cursor: pointer;
  }
`;

const FirstProject = styled.div`
  display: flex;
`;

const Line = styled.div`
  width: 98%;
  margin: auto;
  margin-top: 50px;
  border-bottom: 1px solid #0e5ddd;
`;
const SecondProject = styled.div`
  display: flex;
  margin-top: 50px;
`;
