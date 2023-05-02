import React, { useEffect, useRef, useState } from 'react';
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
                career. The target is to guide you through the essential skills
                of an industry professional and answer any question that a
                beginner might have. Let's save you the struggle of navigating
                your career blindly - by delivering a clear and structured way
                of learning.
              </IntroCardMyself>
            </IntromyselfWrap>
            <IntroResumeBtn>
              <ResumeDownload href='/assets/resume.pdf' download='resume.pdf'>
                Resume
              </ResumeDownload>
            </IntroResumeBtn>
          </IntroCardSection>

          <Intropic />
        </IntroCardWrap>
      </AboutBackground>
    </>
  );
}

export default About;
export const AboutBackground = styled.div`
  /* width: 100%; */
  overflow: hidden;
  height: 200vh;
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
export const IntroCardWrap = styled.div`
  display: grid;
  margin: 0 auto;
  width: 80%;
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
export const IntroCardSection = styled.div``;
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
export const IntroResumeBtn = styled.button``;
export const ResumeDownload = styled.a``;
