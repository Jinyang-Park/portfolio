import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import AboutMobile from './AboutMobile';
import { useTranslation } from 'react-i18next'; // 1. react-i18next import

function About() {
  const { i18n, t } = useTranslation();

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

  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  // 모바일일 경우
  if (isMobile) {
    return (
      <>
        <AboutMobile />
      </>
    );
  }

  return (
    <div id='about'>
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
        {/* <GloblaPadding> */}
        <IntroCardPaddingGlobal>
          <IntroCardWrap style={{ opacity: (position - 100) / 50 }}>
            <IntroCardSection>
              <IntroCardMyname>
                Hello,
                <br />
                I'm Jinyang
              </IntroCardMyname>

              <IntromyselfWrap
                style={{ maxWidth: i18n.language === 'ko' ? '490px' : '480px' }}
              >
                <IntroCardMyself
                  style={{
                    letterSpacing: i18n.language === 'ko' ? '0px' : '-0.45px',
                  }}
                >
                  {t('aboutdescription.part1')}
                  <br />
                  {i18n.language === 'en' ? <br /> : ''}

                  {t('aboutdescription.part2', { returnObjects: true })
                    .split('\n')
                    .map((line) => (
                      <div>{line}</div>
                    ))}
                  {/* <p>{t('aboutdescription.part2')}</p> */}

                  <br />
                  {t('aboutdescription.part3', { returnObjects: true })
                    .split('\n')
                    .map((line) => (
                      <div>{line}</div>
                    ))}
                  {/* {t('aboutdescription.part3')} */}

                  <br />
                  {t('aboutdescription.part4')}
                  <br />
                  <br />
                  {t('aboutdescription.part5')}
                </IntroCardMyself>
              </IntromyselfWrap>
              <ResumeBtn
                href={
                  i18n.language === 'ko'
                    ? '/assets/JIN YANG PARK(KOR).pdf'
                    : '/assets/JIN YANG(English).pdf'
                }
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
          {/* <ToolWrap>
            <ToolText>Tool & Technologies</ToolText>
          </ToolWrap> */}
        </IntroCardPaddingGlobal>
        {/* <AnimatedWrap>
          <AnimateTrack>
            <MarqueeInner>
              {SkilsList.map((skils) => {
                return (
                  <IconWapper key={skils.id}>
                    <Icon>{skils.Icon}</Icon>
                    <IconText>{skils.Text}</IconText>
                  </IconWapper>
                );
              })}
            </MarqueeInner>
          </AnimateTrack>
        </AnimatedWrap> */}
        {/* </GloblaPadding> */}
      </AboutBackground>
    </div>
  );
}

export default About;
export const ToolWrap = styled.div`
  display: flex;
  justify-content: center;
  /* padding-top: 160px; */
`;
export const ToolText = styled.h3`
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 40px;
  line-height: 1.2;
  font-weight: 700;
`;
export const AnimatedWrap = styled.div`
  padding-top: 150px;
  position: relative;
  height: auto;

  @keyframes marquee {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
`;
export const AnimateTrack = styled.marquee`
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const MarqueeInner = styled.div`
  position: relative;
  display: flex;
  width: 300%;
  /* animation: marquee 5s linear infinite; */
`;
export const Icon = styled.div`
  font-size: 50px;
`;

export const IconText = styled.h6`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Darker Grotesque', sans-serif;
`;
export const IconWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const GloblaPadding = styled.div`
  width: 100%;
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
`;
export const AboutBackground = styled.div`
  /* width: 100%; */
  overflow: hidden;
  padding-bottom: 280px;
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
  margin-right: auto;
  margin-left: auto;
  padding-top: 0px;
  max-width: 90rem;
  padding-left: 130px;
  padding-right: 130px;
`;
export const IntroCardWrap = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  /* padding: 4rem 2.5rem; */
  padding: 4rem;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  /* grid-row-gap: 25px; */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 780px;
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
  font-size: 50px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -3.5px;
  margin-bottom: 44px;
`;
export const IntromyselfWrap = styled.div`
  width: 100%;
`;
export const IntroCardMyself = styled.p`
  margin-top: 0;
  font-size: 18px;
  /* line-height: 1.2; */

  /* font-family: 'Darker Grotesque', sans-serif; */
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
  margin-top: 40px;
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
