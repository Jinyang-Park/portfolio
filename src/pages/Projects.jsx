import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { RiWindowFill } from 'react-icons/ri';

function Projects() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    console.log(window.scrollY);
    setPosition(window.scrollY - 2900);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <>
      <ProjectBackground>
        <GloblaPadding>
          <IntroCardPaddingGlobal>
            <ProjectIntroText>
              <LogoImg src='/assets/star2.png' />
              <ProjectIntro>Featured Projects</ProjectIntro>
            </ProjectIntroText>
            <ProjectIntroText2>
              <ProjectIntrodetail>
                Each project is unique. Here are some of my works.
              </ProjectIntrodetail>
            </ProjectIntroText2>

            <ProjectWrap>
              <ProjectIntroWrap
                style={{
                  transform: `translateX(${-position / 30}px)`,
                }}
              >
                <ProjectPost>
                  <ProjectTitle>Ollae</ProjectTitle>
                  <ProjectSubTitle>
                    Loaction based community platform
                  </ProjectSubTitle>

                  <ProjectAbout>About</ProjectAbout>
                  <ProjectIntroduce>
                    It is a platform that provides dating services to members of
                    single households or new generations who want to start a
                    relationship with a casual meeting that is not deeply
                    related to their personal lives.
                  </ProjectIntroduce>
                  <CardLeftcontent>
                    <CardTexBold>1&nbsp;</CardTexBold>
                    <CardTexBold2>
                      Categories allow you to find people or gatherings to take
                      a walk by choosing the topic you want.
                    </CardTexBold2>
                  </CardLeftcontent>
                  <CardLeftcontent>
                    <CardTexBold>2&nbsp;</CardTexBold>
                    <CardTexBold2>
                      With the map view, you can easily find the meeting place
                      and see the meeting walking around you.
                    </CardTexBold2>
                  </CardLeftcontent>
                  <CardLeftcontent>
                    <CardTexBold>3&nbsp;</CardTexBold>
                    <CardTexBold2>
                      Live chat allows you to arrange a specific meeting with
                      the person you want to walk with.
                    </CardTexBold2>
                  </CardLeftcontent>
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

              <ProjectIntroWrap2
                style={{ transform: `translateX(${position / 30}px)` }}
              >
                <ProjectImg src='/assets/por2.gif' />
              </ProjectIntroWrap2>
            </ProjectWrap>
          </IntroCardPaddingGlobal>
        </GloblaPadding>
      </ProjectBackground>
    </>
  );
}

export default Projects;
export const GloblaPadding = styled.div`
  width: 100%;
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
`;
export const ProjectBackground = styled.div`
  height: 220vh;
  background-color: black;
`;
export const ProjectIntro = styled.h3`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 88px;
  color: #af9fff;
  /* margin-bottom: 0px 0px 50px 0px; */
  animation: 100s ease-in-out;
`;
export const ProjectIntrodetail = styled.span`
  text-align: center;
  margin: 0 auto;
  font-family: 'Darker Grotesque', sans-serif;
  /* font-weight: 600; */
  line-height: 0.76;
  font-size: 28px;
  color: #fff;
  letter-spacing: -1px;
  margin-bottom: 50px;
`;
export const ProjectIntroText = styled.div`
  position: relative;
  max-width: 100%;
  padding-left: 70px;
  padding-right: 70px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 192px;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
`;
export const LogoImg = styled.img`
  /* position: absolute; */
  width: 70px;
  height: 70px;
  margin-bottom: 50px;
`;
export const ProjectIntroText2 = styled.div`
  display: flex;
`;
export const IntroCardPaddingGlobal = styled.div`
  padding-top: 0px;

  padding-left: 130px;
  padding-right: 130px;
`;

export const ProjectWrap = styled.div`
  margin-top: 128px;
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
`;

export const ProjectIntroWrap2 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  /* padding: 1rem; */
  border-radius: 4.375rem;
  background-color: #fff;
  -webkit-transition: -webkit-transform 0.1s ease;
  transition: transform 0.1s ease;
  transition: transform 0.1s, -webkit-transform 0.1s ease;
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
  -webkit-transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
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
  margin-bottom: 20px;
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
  margin-bottom: 15px;
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
export const CardLeftcontent = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  /* padding-top: 1rem;
  padding-bottom: 1rem; */
  -webkit-box-align: center;
  -ms-flex-align: center;

  border-bottom: 1px solid #7b7b7b;
`;
export const CardTexBold = styled.div`
  font-weight: 700;
  font-size: 25px;
  line-height: 1;
  letter-spacing: -2px;
  font-family: 'Darker Grotesque', sans-serif;

  color: #fff;
`;
export const CardTexBold2 = styled.div`
  letter-spacing: -0.1px;
  margin-left: 20px;
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
`;
