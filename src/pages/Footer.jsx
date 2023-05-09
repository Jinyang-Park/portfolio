import React from 'react';
import styled from 'styled-components';
function Footer() {
  return (
    <>
      <ProjectBackground>
        <IntroCardPaddingGlobal></IntroCardPaddingGlobal>
      </ProjectBackground>
    </>
  );
}

export default Footer;
export const ProjectBackground = styled.div`
  height: 10vh;
  background-color: black;
`;
export const IntroCardPaddingGlobal = styled.div`
  padding-top: 0px;

  padding-left: 130px;
  padding-right: 130px;
`;
