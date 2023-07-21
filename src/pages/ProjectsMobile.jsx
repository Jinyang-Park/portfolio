import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { BsGithub } from 'react-icons/bs';
import { RiWindowFill } from 'react-icons/ri';

function ProjectsMobile() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <ProjectBackground id='projects'>
        {/* <GloblaPadding> */}
        <IntroCardPaddingGlobal>
          <ProjectIntroText>
            <LogoImg src='/assets/star2.png' />
            <ProjectIntro>Featured Projects</ProjectIntro>
          </ProjectIntroText>
          <ProjectIntroText2>
            <ProjectIntrodetail>
              Each project is unique.
              <br />
              Here are some of my works.
            </ProjectIntrodetail>
          </ProjectIntroText2>
          {/*project1*/}
          {t('translationList', { returnObjects: true }).map((Project) => {
            return (
              <ProjectWrap key={Project.id}>
                <ProjectIntroWrap
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-offset='300'
                  data-aos-easing='ease-in-sine'
                >
                  <ProjectPost>
                    <ProjectTitle>{Project.Title}</ProjectTitle>
                    <ProjectSubTitle>{Project.SubTitle}</ProjectSubTitle>

                    <ProjectAbout>About</ProjectAbout>
                    <ProjectIntroduce>{Project.Introduce}</ProjectIntroduce>
                    {Project.CardNumber.map((List) => {
                      return (
                        <CardLeftcontent key={List.id}>
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
                            <ProjectItem key={Item.id}>{Item}</ProjectItem>
                          </>
                        );
                      })}
                    </ProjectSkilsItem>
                    <ProjectSite>
                      {Project.Site.map((Web) => {
                        return (
                          <>
                            <Website
                              kye={Web.id}
                              href={Web.Site}
                              target='_blank'
                            >
                              {/*더 좋은 삼항연산자 생각해보기*/}
                              {Web.Icon_name === '<BsGithub />' ? (
                                <ProjectIcon></ProjectIcon>
                              ) : (
                                <ProjectIcon2></ProjectIcon2>
                              )}
                            </Website>
                          </>
                        );
                      })}
                    </ProjectSite>
                  </ProjectPost>
                </ProjectIntroWrap>

                <ProjectIntroWrap2
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-offset='300'
                  data-aos-easing='ease-in-sine'
                >
                  {/*img 파일에 따라 ObjectFit css 다르게 주는 방법*/}
                  {/*1. alt을 추가 2.style에 Project.Alt가 OlleaGrid이면 objectFit이 cover가 되게끔 삼항연산자사용*/}
                  <ProjectImg
                    src={Project.Img}
                    alt={Project.Alt}
                    style={{
                      objectFit:
                        Project.Alt === 'OlleaGrid' ? 'cover' : 'contain',
                    }}
                  />
                </ProjectIntroWrap2>
              </ProjectWrap>
            );
          })}
          <MinimeHoduWrap>
            <MinimeHouduImg />
          </MinimeHoduWrap>
          <TitleBallon>
            <TitleTxtCol>
              <TitleTxt>Hire Jinyang!</TitleTxt>
            </TitleTxtCol>
            <TitleTail>
              <TitleSvg
                width='14'
                height='16'
                viewBox='0 0 14 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-v-31c4c148=''
              >
                <TitlePath
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0 0.516602C0 9.06769 3.26836 15.9997 13.7618 15.9997L14 16.0005C13.0623 15.2567 12.2689 14.3944 11.6314 13.4229C10.4112 11.5638 10 9.73924 10 5.406V0.516602H0Z'
                  fill='#A6814C'
                  data-v-31c4c148=''
                ></TitlePath>
              </TitleSvg>
            </TitleTail>
          </TitleBallon>
        </IntroCardPaddingGlobal>
        {/* </GloblaPadding> */}
      </ProjectBackground>
    </>
  );
}

export default ProjectsMobile;
export const GloblaPadding = styled.div`
  /* width: 100%; */
`;
export const ProjectBackground = styled.div`
  padding-bottom: 20px;
  background-color: black;
`;
export const ProjectIntro = styled.h3`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 2.15rem;
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
  font-size: 1.2rem;
  color: #fff;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;
export const ProjectIntroText = styled.div`
  position: relative;
  max-width: 100%;
  /* padding-right: 70px; */
  display: flex;
  flex-wrap: wrap;
  padding-top: 110px;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
`;
export const LogoImg = styled.img`
  /* position: absolute; */
  width: 50px;
  height: 50px;
  margin-bottom: 50px;
`;
export const ProjectIntroText2 = styled.div`
  display: flex;
`;
export const IntroCardPaddingGlobal = styled.div`
  padding-top: 0px;

  padding-left: 20px;
  padding-right: 20px;
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
`;

export const ProjectWrap = styled.div`
  margin-top: 80px;
  /* display: grid; */
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
  /* width: 100%; */
  position: relative;
  display: flex;
  /* padding: 1rem; */
  border-radius: 1.8rem;
  background-color: #eeeded;
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
  padding: 1rem;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  border-radius: 1.8rem;
  background-color: #1b1b1f;
  -webkit-transition: -webkit-transform 0.1s;
  transition: transform 0.1s;
  transition: transform 0.1s, -webkit-transform 0.1s;
`;
export const ProjectTitle = styled.h3`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: #af9fff;
`;
export const ProjectSubTitle = styled.p`
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 16px;
  color: #fff;
  margin-bottom: 25px;
`;
export const ProjectPost = styled.div``;

export const ProjectAbout = styled.h4`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #af9fff;
`;
export const ProjectIntroduce = styled.p`
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 16px;
  color: #fff;
  margin-bottom: 25px;
`;
export const ProjectSkils = styled.h4`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #af9fff;
  margin-top: 25px;
  margin-bottom: 15px;
`;
export const ProjectSkilsItem = styled.p`
  /* max-width: 462px; */
  /* width: fit-content; */
  display: grid;
  /* -webkit-box-align: center;
  align-items: center; */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* justify-items: center; */
  grid-row-gap: 8px;
  justify-items: start;
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
  justify-content: space-between;
  align-items: center;
`;
export const ProjectIconTitle = styled.div`
  font-family: 'Darker Grotesque', sans-serif;
  color: #eeff04;
`;
export const ProjectIcon = styled(BsGithub)`
  margin-top: 20px;
  margin-right: 15px;
  display: flex;
  padding: 10px 60px;
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
export const ProjectIcon2 = styled(RiWindowFill)`
  margin-top: 20px;
  margin-right: 15px;
  display: flex;
  padding: 10px 60px;
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
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 1.8rem;
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
export const Website = styled.a`
  display: flex;
`;
export const MinimeHoduWrap = styled.div`
  padding-left: 5%;
  /* width: -80%; */
`;
export const MinimeHouduImg = styled.figure`
  @-webkit-keyframes hodu8 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -1424px;
    } /* <-- width of spritesheet*/
  }

  @-moz-keyframes hodu8 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -1424px;
    } /* <-- width of spritesheet*/
  }

  @-o-keyframes hodu8 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -1424px;
    } /* <-- width of spritesheet*/
  }

  @keyframes hodu8 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -1424px;
    } /* <-- width of spritesheet*/
  }
  width: 178px;
  height: 315px;
  /* width: 50%;
  height: 50%; */
  /* background-image: url('/assets/hodu4.png'); */
  margin: 0 auto;
  background-image: url('/assets/hodu8.png');
  -webkit-animation: hodu8 2s steps(8) infinite;
  -moz-animation: hodu8 2s steps(8) infinite;
  -o-animation: hodu8 2s steps(8) infinite;
  animation: hodu8 2s steps(8) infinite;
`;
export const TitleBallon = styled.div`
  position: absolute;
  display: flex;
  margin-top: -300px;
  margin-left: 210px;
`;
export const TitleTxtCol = styled.span`
  background-color: #a6814c;
  /* font-size: 25px; */
  line-height: 30px;
  padding: 5px 10px;
  border-radius: 8px;
  text-align: left;
  color: #f9f5ef;
  white-space: nowrap;
`;
export const TitleTxt = styled.span`
  position: relative;
  font-family: 'Darker Grotesque', sans-serif;
  display: block;
  font-size: 20px;
`;
export const TitleTail = styled.i`
  position: absolute;
  width: 14px;
  height: 17px;
  transform: scaleX(-1);
  bottom: -2px;
  left: -4px;
`;
export const TitleSvg = styled.svg``;
export const TitlePath = styled.path``;
