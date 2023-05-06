import React from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { RiWindowFill } from 'react-icons/ri';

function Projects() {
  return (
    <>
      <ProjectBackground>
        <IntroCardPaddingGlobal>
          <ProjectWrap>
            <ProjectIntroWrap>
              <ProjectPost>
                <ProjectTitle>Ollea</ProjectTitle>
                <ProjectSubTitle>
                  The Gradients and colors for the next smart creator
                </ProjectSubTitle>

                <ProjectAbout>About</ProjectAbout>
                <ProjectIntroduce>
                  Piggment is a curated collection of amazingly colored
                  gradients for designers, developers, and smart creators over
                  the world. now you can generate, explore, save, easy CSS
                  cross-browser gradient codes all in one place.
                </ProjectIntroduce>
                <ProjectSkils>Technologies</ProjectSkils>
                <ProjectSkilsItem>
                  <ProjectItem>React</ProjectItem>
                  <ProjectItem>TypeScript</ProjectItem>
                  <ProjectItem>React-Qurey</ProjectItem>
                  <ProjectItem>React-Native</ProjectItem>
                </ProjectSkilsItem>
                <ProjectSite>
                  <ProjectGithubIcon></ProjectGithubIcon>
                  <ProjectWebsiteIcon></ProjectWebsiteIcon>
                </ProjectSite>
              </ProjectPost>
            </ProjectIntroWrap>
            <ProjectIntroWrap2>
              <ProjectImg src='/assets/por2.gif' />
            </ProjectIntroWrap2>
          </ProjectWrap>
        </IntroCardPaddingGlobal>
      </ProjectBackground>
    </>
  );
}

export default Projects;
export const ProjectBackground = styled.div`
  height: 220vh;
  background-color: black;
`;
export const IntroCardPaddingGlobal = styled.div`
  padding-top: 0px;
  margin: 0 auto;
  padding-left: 180px;
  padding-right: 180px;
`;

export const ProjectWrap = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 7.75rem;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: 40rem;
  grid-template-rows: 40rem;
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  transition: transform 0.4s, -webkit-transform 0.4s;
`;

export const ProjectIntroWrap2 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  /* padding: 1rem; */
  border-radius: 4.375rem;
  background-color: #fff;
`;
export const ProjectIntroWrap = styled.div`
  position: relative;
  z-index: 2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 4rem;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  border-radius: 4.375rem;
  background-color: #1b1b1f;
`;
export const ProjectTitle = styled.h3`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 70px;
  color: #af9fff;
`;
export const ProjectSubTitle = styled.p`
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 20px;
  color: #fff;
`;
export const ProjectPost = styled.div``;

export const ProjectAbout = styled.h4`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #af9fff;
`;
export const ProjectIntroduce = styled.p`
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 20px;
  color: #fff;
`;
export const ProjectSkils = styled.h4`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #af9fff;
`;
export const ProjectSkilsItem = styled.p`
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 20px;
  color: #fff;
`;
export const ProjectItem = styled.span``;
export const ProjectSite = styled.div`
  font-family: 'Darker Grotesque', sans-serif;
  color: #fff;
`;
export const ProjectGithubIcon = styled(BsGithub)`
  /* font-size: 26px; */
  color: #af9fff;
  cursor: pointer;
`;
export const ProjectWebsiteIcon = styled(RiWindowFill)`
  /* font-size: 26px; */
  color: #af9fff;
  cursor: pointer;
`;
export const ProjectImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 4.375rem;
`;
