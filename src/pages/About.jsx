import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function About() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
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
            Welcome Welcome Welcome
          </ScrollLeftText>
        </Left>
        <Right>
          <ScrollrightText style={{ transform: `translateX(${position}px)` }}>
            Welcome Welcome Welcome
          </ScrollrightText>
        </Right>
      </AboutBackground>
    </>
  );
}

export default About;
export const AboutBackground = styled.div`
  /* width: 100%; */
  overflow: hidden;
  height: 100vh;
  /* overflow: hidden; */
  background-color: #af9fff;
`;
export const Left = styled.div`
  /* position: relative; */
  /* width: 1050vw; */
  top: 100%;
  /* left: -800px;
  white-space: nowrap; */
`;
export const ScrollLeftText = styled.div`
  font-size: 100px;
`;
export const Right = styled.div`
  /* position: relative; */
  /* width: 1050vw; */
  top: 100%;
  /* right: -800px;
  white-space: nowrap; */
`;
export const ScrollrightText = styled.div`
  font-size: 100px;
`;
