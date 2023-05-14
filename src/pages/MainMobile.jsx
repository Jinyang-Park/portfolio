import React from 'react';
import styled from 'styled-components';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Contact2 from './Contact2';
import Footer from './Footer';
function MainMobile() {
  return (
    <>
      <Introduce>
        {/* <GloblaPadding> */}
        <IntroCardPaddingGlobal>
          <MinimeHoduWrap>
            <MinimeHouduImg />
          </MinimeHoduWrap>
          <IntroContent>
            <IntronameWrap>
              <Introname>Hi. I'm Jinyang.</Introname>
            </IntronameWrap>
            <IntrojobWrap>
              <Introjob3>Developer</Introjob3>
              <Progress>
                <Introjob4>Developer </Introjob4>
                <Introjob>A Frontend </Introjob>
              </Progress>
            </IntrojobWrap>
            <IntrojobWrap2>
              <Introjob2>& Designer.</Introjob2>
            </IntrojobWrap2>
          </IntroContent>
          <MinimeWrap>
            <MinimeImg />
          </MinimeWrap>
          <TitleBallon2>
            <TitleTxtCol2>
              <TitleTxt>Hello, There :)</TitleTxt>
            </TitleTxtCol2>
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
          </TitleBallon2>
        </IntroCardPaddingGlobal>
        {/* </GloblaPadding> */}
      </Introduce>
      <About id='About' />
      <Projects />
      <Contact />
      <Contact2 />
      <Footer />
    </>
  );
}

export default MainMobile;
export const IntroCardPaddingGlobal = styled.div`
  /* padding-top: 0px;
  padding-left: 80px;
  padding-right: 8px; */
`;
export const GloblaPadding = styled.div`
  width: 100%;
  /* max-width: 90rem; */
`;
export const Introduce = styled.div`
  padding-top: 100px;
  margin-bottom: 500px;
  background-color: #f5f5f5;
`;
export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
`;
export const TitleBallon = styled.div`
  position: absolute;
  display: flex;
  margin-top: -120px;
  margin-left: 20px;
`;
export const TitleBallon2 = styled.div`
  position: absolute;
  display: flex;
  margin-top: 50px;
  margin-left: 210px;
`;
export const TitleTxtCol2 = styled.span`
  background-color: #a6814c;
  /* font-size: 25px; */
  line-height: 30px;
  padding: 5px 10px;
  border-radius: 8px;
  text-align: left;
  color: #f9f5ef;
  white-space: nowrap;
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
export const IntronameWrap = styled.div`
  width: 200x;
  height: 70px;
  justify-content: center;
  align-items: center;
  color: #af9fff;
  border-radius: 100px;
  background-color: black;
  padding: 0px 30px;
`;
export const Introname = styled.span`
  font-size: 30px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 2.2;
  display: flex;
  font-weight: 600;
  justify-content: center;
`;
export const IntrojobWrap = styled.div`
  width: 320px;
  height: 70px;
  color: #af9fff;
  background-color: black;
  border-radius: 0px 100px 100px 0px;
  overflow: hidden;
  position: relative;
`;

export const IntrojobWrap2 = styled.div`
  width: 180px;
  justify-content: center;
  align-items: center;
  height: 70px;
  color: #af9fff;
  border-radius: 100px;
  background-color: black;
  padding: 0px 20px;
`;
export const Introjob = styled.h3`
  font-size: 30px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 2.2;
`;
export const Introjob3 = styled.h3`
  position: absolute;
  font-size: 30px;
  font-family: 'Darker Grotesque', sans-serif;
  left: 180px;
  line-height: 2.5;
  justify-content: center;
`;
export const Introjob4 = styled.h3`
  position: absolute;
  /* font-weight: 500; */
  font-size: 30px;
  font-family: 'Darker Grotesque', sans-serif;
  justify-content: center;
  left: 180px;
  line-height: 2.5;
`;

export const Progress = styled.div`
  position: relative;
  height: 70px;
  color: black;
  border-radius: 0px 100px 100px 0px;
  background-color: #af9fff;
  overflow: hidden;
  width: 600px;
  padding: 0px 25px;
  animation: Progress 4s ease-in-out Infinite alternate;

  @keyframes Progress {
    from {
      width: 55%;
    }
    to {
      width: 105%;
    }
  }
`;

export const Introjob2 = styled.h6`
  font-size: 30px;
  /* font-weight: 500; */
  font-family: 'Darker Grotesque', sans-serif;
  display: flex;
  justify-content: center;
  line-height: 2.2;
`;
export const MinimeWrap = styled.div`
  position: absolute;
  top: 600px;
  left: -10px;
`;

export const MinimeImg = styled.figure`
  @-webkit-keyframes jin {
    from {
      background-position: 0px;
    }
    to {
      background-position: -3000px;
    } /* <-- width of spritesheet*/
  }

  @-moz-keyframes jin {
    from {
      background-position: 0px;
    }
    to {
      background-position: -3000px;
    } /* <-- width of spritesheet*/
  }

  @-o-keyframes jin {
    from {
      background-position: 0px;
    }
    to {
      background-position: -3000px;
    } /* <-- width of spritesheet*/
  }

  @keyframes jin {
    from {
      background-position: 0px;
    }
    to {
      background-position: -3000px;
    } /* <-- width of spritesheet*/
  }
  /* width: 375px;
  height: 405px; */
  width: 400px;
  height: 300px;
  /* background-image: url('/assets/jin.png'); */
  background-image: url('/assets/82.png');

  -webkit-animation: jin 2s steps(8) infinite;
  -moz-animation: jin 2s steps(8) infinite;
  -o-animation: jin 2s steps(8) infinite;
  animation: jin 2s steps(8) infinite;
`;
export const MinimeHoduWrap = styled.div`
  width: 60%;
`;
export const MinimeHouduImg = styled.figure`
  @-webkit-keyframes hodu7 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -2358px;
    } /* <-- width of spritesheet*/
  }

  @-moz-keyframes hodu7 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -2358px;
    } /* <-- width of spritesheet*/
  }

  @-o-keyframes hodu7 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -2358px;
    } /* <-- width of spritesheet*/
  }

  @keyframes hodu7 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -2358px;
    } /* <-- width of spritesheet*/
  }
  width: 131px;
  height: 100px;
  /* width: 50%;
  height: 50%; */
  /* background-image: url('/assets/hodu4.png'); */
  margin: 0 auto;
  background-image: url('/assets/hodu7.png');
  -webkit-animation: hodu7 2s steps(18) infinite;
  -moz-animation: hodu7 2s steps(18) infinite;
  -o-animation: hodu7 2s steps(18) infinite;
  animation: hodu7 2s steps(18) infinite;
`;
