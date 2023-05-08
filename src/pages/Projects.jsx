import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { RiWindowFill } from 'react-icons/ri';
import { ProjectList } from './ProjectsList';

function Projects() {
  // const [position, setPosition] = useState(0);
  // function onScroll() {
  //   // console.log(window.scrollY);
  //   setPosition(window.scrollY - 0);
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, []);
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
            {/*project1*/}
            {ProjectList.map((Project) => {
              // console.log(
              //   Project.CardNumber.map((x) => {
              //     console.log(x.Number);
              //   })
              // );
              return (
                <ProjectWrap>
                  <ProjectIntroWrap>
                    <ProjectPost>
                      <ProjectTitle>{Project.Title}</ProjectTitle>
                      <ProjectSubTitle>{Project.SubTitle}</ProjectSubTitle>

                      <ProjectAbout>About</ProjectAbout>
                      <ProjectIntroduce>{Project.Introduce}</ProjectIntroduce>
                      {Project.CardNumber.map((List) => {
                        return (
                          <CardLeftcontent>
                            <CardTexBold>{List.Number}&nbsp;</CardTexBold>
                            <CardTexBold2>{List.Content}</CardTexBold2>
                          </CardLeftcontent>
                        );
                      })}

                      <ProjectSkils>Technologies</ProjectSkils>
                      <ProjectSkilsItem>
                        {Project.SkilsItem.map((Item) => {
                          return (
                            <>
                              <ProjectItem>{Item}</ProjectItem>
                            </>
                          );
                        })}
                      </ProjectSkilsItem>
                      <ProjectSite>
                        {Project.Site.map((Web) => {
                          return (
                            <>
                              <Website href={Web.Site} target='_blank'>
                                <ProjectIcon>{Web.Icon_name}</ProjectIcon>
                              </Website>
                            </>
                          );
                        })}
                      </ProjectSite>
                    </ProjectPost>
                  </ProjectIntroWrap>

                  <ProjectIntroWrap2>
                    <ProjectImg src='/assets/por2.gif' />
                  </ProjectIntroWrap2>
                </ProjectWrap>
              );
            })}
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
  /* grid-template-rows: 40rem; */
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
  transform: translate3d(-6rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
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
  transform: translate3d(6rem, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;
export const ProjectTitle = styled.h3`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 50px;
  color: #af9fff;
`;
export const ProjectSubTitle = styled.p`
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 20px;
  color: #fff;
  margin-bottom: 25px;
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
  margin-bottom: 25px;
`;
export const ProjectSkils = styled.h4`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #af9fff;
  margin-top: 25px;
  margin-bottom: 15px;
`;
export const ProjectSkilsItem = styled.p`
  max-width: 462px;
  /* width: fit-content; */
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 10px;
`;
export const ProjectItem = styled.span`
  width: max-content;
  line-height: 1;
  background: #af9fff;
  font-family: 'Darker Grotesque', sans-serif;
  padding: 6px 8px;
  border-radius: 30px;
  font-size: 14px;
  margin-right: 5px;
  color: black;
  font-weight: 700;
`;
export const ProjectSite = styled.div`
  display: flex;
`;
export const ProjectIcon = styled.div`
  margin-top: 20px;
  margin-right: 15px;
  display: flex;
  padding: 10px 100px;
  border-radius: 30px;
  border: #eeff04 solid 1px;
  color: #eeff04;
  cursor: pointer;
  line-height: 0.15;
  transition: all 0.3s ease;

  @-webkit-keyframes ProjectIcon {
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
  @keyframes ProjectIcon {
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
    -webkit-animation: ProjectIcon 1s ease;
    animation: ProjectIcon 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    border: black solid 1px;
    background-color: #eeff04;
    color: black;
  }
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
  -webkit-box-align: center;
  -ms-flex-align: center;
  border-bottom: 1px solid #7b7b7b;
  margin-top: 10px;
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
// export const Arrow = styled.div`
//   position: relative;
//   right: 110px;
//   top: 25px;
//   transform: translate3d(0px, 0px, 0px) rotate(45deg);
// `;
export const Website = styled.a``;
