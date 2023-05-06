import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function About() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY - 800);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <AboutBackground>
        <Left>
          <ScrollLeftText style={{ transform: `translateX(${-position}px)` }}>
            ATTENTION TO-DETAIL&nbsp;
            <ScrollLeftBlack>ATTENTION TO-DETAIL</ScrollLeftBlack>
            ATENTION TO-DETAIL ATTENTION TO-DETAIL ATTENTION TO-DETAIL ATTENTION
            TO-DETAIL ATTENTION TO-DETAIL ATTENTION TO-DETAIL ATTENTION
            TO-DETAIL ATTENTION TO-DETAIL
          </ScrollLeftText>
        </Left>
        <Right>
          <ScrollrightText style={{ transform: `translateX(${position}px)` }}>
            RESPONSIVE DESIGN RESPONSIVE DESIGN RESPONSIVE DESIGN RESPONSIVE
            DESIGN RESPONSIVE DESIGN RESPONSIVE DESIGN RESPONSIVE DESIGN
            RESPONSIVE DESIGN RESPONSIVE DESIGN RESPONSIVE DESIGN RESPONSIVE
          </ScrollrightText>
        </Right>
        <Left>
          <ScrollLeftText style={{ transform: `translateX(${-position}px)` }}>
            <ScrollLeftBlack>TEAM ORIENTED TEAM ORIENTED&nbsp;</ScrollLeftBlack>
            TEAM ORIENTED TEAM ORIENTED TEAM ORIENTED TEAM ORIENTED TEAM
            ORIENTED TEAM ORIENTED TEAM ORIENTED TEAM ORIENTED TEAM ORIENTED
          </ScrollLeftText>
        </Left>
        <Right>
          <ScrollrightText style={{ transform: `translateX(${position}px)` }}>
            DEVELOPED WITH SKILL & PASSION DEVELOPED WITH SKILL & PASSION
            DEVELOPED WITH SKILL & PASSION DEVELOPED WITH SKILL & PASSION
            DEVELOPED WITH SKILL & PASSION DEVELOPED WITH SKILL & PASSION
          </ScrollrightText>
        </Right>
        <IntroCardPaddingGlobal>
          <IntroCardWrap style={{ opacity: (position - 100) / 50 }}>
            <IntroCardSection>
              <IntroCardMyname>
                Hello,
                <br />
                I'm Jinyang
              </IntroCardMyname>

              <IntromyselfWrap>
                <IntroCardMyself>
                  Hi, I'm Dylan, the programme director at LIM.
                  <br />
                  <br />
                  I completed my studies in Music Business Management at the
                  University of Westminster and later specialised in Music
                  Production & Sound Engineering at Abbey Road Institute in
                  London. I've also been active in the music industry for more
                  than 10 years, be that as a producer, performer or music
                  journalist.
                  <br />I created LIM to share my experience and synthesised it
                  into an intensive 3-months-course to kickstart your music
                  career. The target is to guide you through the essential
                  skills of an industry professional and answer any question
                  that a beginner might have. Let's save you the struggle of
                  navigating your career blindly - by delivering a clear and
                  structured way of learning.
                </IntroCardMyself>
              </IntromyselfWrap>
              <ResumeBtn
                href='/assets/resume.pdf'
                target='_blank'
                rel='noreferrer'
              >
                Resume
                <Arrow>
                  <ArrowSvg
                    width='21'
                    height='16'
                    viewBox='0 0 21 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    data-v-64da5e37=''
                  >
                    <ArrowPath
                      d='M13.216 0H11.474C11.942 3.12 13.554 5.772 15.998 7.124L0 7.046V8.736L15.998 8.658C13.554 10.01 11.942 12.662 11.474 15.782H13.216C13.762 11.804 16.57 8.58 20.626 8.58V7.202C16.57 7.202 13.762 3.978 13.216 0Z'
                      fill='#222222'
                      data-v-1e2ff580=''
                    ></ArrowPath>
                  </ArrowSvg>
                </Arrow>
              </ResumeBtn>
            </IntroCardSection>
            <Intropic />
          </IntroCardWrap>
        </IntroCardPaddingGlobal>
      </AboutBackground>
    </>
  );
}

export default About;
export const AboutBackground = styled.div`
  /* width: 100%; */
  overflow: hidden;
  height: 230vh;
  /* overflow: hidden; */
  background-color: #af9fff;
`;
export const Left = styled.div`
  top: 100%;
  width: 1050vw;
`;
export const ScrollLeftText = styled.div`
  font-size: 100px;
  font-family: 'Darker Grotesque', sans-serif;
  color: white;
  font-weight: 600;
`;
export const ScrollLeftBlack = styled.span`
  color: black;
`;
export const Right = styled.div`
  /* position: relative; */
  /* width: 1050vw; */
  top: 100%;
  width: 1050vw;
  /* right: -800px;
  white-space: nowrap; */
`;
export const ScrollrightText = styled.div`
  font-size: 100px;
  font-family: 'Darker Grotesque', sans-serif;
  color: white;
  font-weight: 600;
`;
export const IntroCardPaddingGlobal = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`;
export const IntroCardWrap = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  padding: 4rem;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 672px;
  border-radius: 50px;
  background-color: #f5f5f5;
  top: -150px;
  animation: 100s ease-in-out;
`;
export const IntroCardSection = styled.div`
  /* padding-left: 20px;
  padding-right: 20px; */
`;
export const IntroCardMyname = styled.h3`
  font-size: 70px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -3.5px;
  margin-bottom: 64px;
`;
export const IntromyselfWrap = styled.div`
  width: 100%;
  max-width: 480px;
`;
export const IntroCardMyself = styled.p`
  margin-top: 0;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -1px;
`;
export const Intropic = styled.figure`
  width: 100%;
  height: 100%;
  background-image: url('/assets/jinyangpark.jpg');
  background-repeat: no-repeat;
`;

export const ResumeDownload = styled.span`
  font-size: 20px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 0;
  color: #222;
  cursor: pointer;
`;

export const ResumeBtn = styled.a`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: #eeff04;
  padding: 20px 40px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 22px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 0;
  color: #222;
  cursor: pointer;
  line-height: 0.15;
  transition: all 0.3s ease;

  @-webkit-keyframes ResumeBtn {
    15% {
      -webkit-transform: translateY(5px);
      transform: translateY(5px);
    }
    30% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
    50% {
      -webkit-transform: translateY(3px);
      transform: translateY(3px);
    }
    65% {
      -webkit-transform: translateY(-3px);
      transform: translateY(-3px);
    }
    80% {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes ResumeBtn {
    15% {
      -webkit-transform: translateY(5px);
      transform: translateY(5px);
    }
    30% {
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
    50% {
      -webkit-transform: translateY(3px);
      transform: translateY(3px);
    }
    65% {
      -webkit-transform: translateY(-3px);
      transform: translateY(-3px);
    }
    80% {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  &:hover {
    -webkit-animation: ResumeBtn 1s ease;
    animation: ResumeBtn 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
`;
export const Arrow = styled.div`
  margin-left: 15px;
  margin-top: 5px;
`;
export const ArrowSvg = styled.svg``;
export const ArrowPath = styled.path``;
