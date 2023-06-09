import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // 1. react-i18next import

function AboutMobile() {
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

  return (
    <div id='about'>
      <AboutBackground>
        <Left>
          <ScrollLeftText style={{ transform: `translateX(${-position}px)` }}>
            ATTENTION TO-DETAIL&nbsp;
            <ScrollLeftBlack>ATTENTION TO-DETAIL</ScrollLeftBlack>
            ATENTION
          </ScrollLeftText>
        </Left>
        <Right>
          <ScrollrightText style={{ transform: `translateX(${position}px)` }}>
            RESPONSIVE DESIGN RESPONSIVE DESIGN RESPONSIVE
          </ScrollrightText>
        </Right>
        <Left>
          <ScrollLeftText style={{ transform: `translateX(${-position}px)` }}>
            <ScrollLeftBlack>TEAM ORIENTED TEAM ORIENTED&nbsp;</ScrollLeftBlack>
            TEAM
          </ScrollLeftText>
        </Left>
        <Right>
          <ScrollrightText style={{ transform: `translateX(${position}px)` }}>
            DEVELOPED WITH SKILL & PASSION DEVELOPED WITH SKILL
          </ScrollrightText>
        </Right>
        {/* <GloblaPadding> */}
        <IntroCardPaddingGlobal>
          <IntroCardWrap>
            <IntroCardSection>
              <IntroCardMyname>
                Hello,
                <br />
                I'm Jinyang
              </IntroCardMyname>

              <IntromyselfWrap
                style={{ maxWidth: i18n.language === 'ko' ? '490px' : '480px' }}
              >
                <IntroCardMyself>
                  {t('aboutdescription.part1')}
                  <br />
                  {i18n.language === 'en' ? <br /> : ''}
                  {i18n
                    .t('aboutdescription.part2')
                    .split('\n')
                    .map((line) => (
                      <div>{line}</div>
                    ))}
                  {/* <p>{t('aboutdescription.part2')}</p> */}

                  {i18n.language === 'ko' ? <br /> : ''}
                  {i18n
                    .t('aboutdescription.part3')
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
        </IntroCardPaddingGlobal>
        {/* </GloblaPadding> */}
      </AboutBackground>
    </div>
  );
}

export default AboutMobile;
export const GloblaPadding = styled.div`
  width: 100%;
  /* max-width: 90rem; */
  margin-right: auto;
  margin-left: auto;
`;
export const AboutBackground = styled.div`
  /* width: 100%; */
  overflow: hidden;
  padding-bottom: 110px;
  padding-top: 110px;
  /* overflow: hidden; */
  background-color: #af9fff;
`;
export const Left = styled.div`
  width: 800vw;
  overflow-x: hidden;
`;
export const ScrollLeftText = styled.div`
  font-size: 3.2rem;
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

  width: 1500vw;
  overflow-x: hidden;
  /* right: -800px;
  white-space: nowrap; */
`;
export const ScrollrightText = styled.div`
  font-size: 3.2rem;
  font-family: 'Darker Grotesque', sans-serif;
  color: white;
  font-weight: 600;
`;
export const IntroCardPaddingGlobal = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-top: 0px;
  max-width: 90rem;
  padding-left: 15px;
  padding-right: 15px;
`;
export const IntroCardWrap = styled.div`
  display: grid;
  margin: 0 auto;
  width: 100%;
  padding: 1rem;
  /* grid-auto-columns: 1fr; */
  grid-column-gap: 2rem;
  /* grid-row-gap: 16px; */
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  border-radius: 0.875rem;
  background-color: #f5f5f5;
  top: -150px;
  animation: 100s ease-in-out;
`;
export const IntroCardSection = styled.div`
  /* padding-left: 20px;
  padding-right: 20px; */
`;
export const IntroCardMyname = styled.h3`
  font-size: 2.15rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -3.5px;
  margin-bottom: 6rem;
`;
export const IntromyselfWrap = styled.div`
  width: 100%;
`;
export const IntroCardMyself = styled.p`
  margin-top: 0;
  font-size: 16px;
  line-height: 1.2;

  /* font-family: 'Darker Grotesque', sans-serif; */
`;
export const Intropic = styled.figure`
  position: absolute;
  left: 220px;
  display: block;
  width: 7.75rem;
  height: 7.75rem;
  border-radius: 0.9rem;
  background-size: cover;
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
  font-size: 16px;

  padding: 15px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: #eeff04;

  border-radius: 30px;
  font-weight: 600;

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
