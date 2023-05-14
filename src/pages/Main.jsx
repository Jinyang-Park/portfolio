import React from 'react';
import styled from 'styled-components';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Contact2 from './Contact2';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';
import MainMobile from './MainMobile';

function Main() {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  // 모바일일 경우
  if (isMobile) {
    return (
      <>
        <MainMobile />
      </>
    );
  }
  return (
    <>
      <Introduce>
        {/* <GloblaPadding> */}
        <IntroCardPaddingGlobal>
          <MinimeHoduWrap>
            <MinimeHouduImg />
          </MinimeHoduWrap>
          {/* <TitleBallon>
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
          </TitleBallon> */}
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

export default Main;
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
  padding-top: 50px;
  margin-bottom: 250px;
  background-color: #f5f5f5;

  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
  /* display: flex; */
`;
export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 30px;
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
  margin-top: -340px;
  margin-left: 1300px;
  //브라우저 창 width가 1920px보다 커지는 순간부터 적용
  //데스크탑
  padding-top: 150px;

  /* padding-top: 50px; */
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
  width: 750px;
  justify-content: center;
  align-items: center;
  height: 150px;
  color: #af9fff;
  border-radius: 100px;
  background-color: black;
  padding: 0px 20px;
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    width: 320px;
    height: 100px;
  }
  @media all and (min-width: 768px) {
    //브라우저 창 width가 768px보다 커지는 순간부터 적용
    //태블릿
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
`;
export const Introname = styled.span`
  font-size: 100px;
  font-family: 'Darker Grotesque', sans-serif;
  display: flex;
  font-weight: 600;
  justify-content: center;
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    font-size: 50px;
    font-family: 'Darker Grotesque', sans-serif;
    line-height: 2;
  }
  @media all and (min-width: 768px) {
    //브라우저 창 width가 768px보다 커지는 순간부터 적용
    //태블릿
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
`;
export const IntrojobWrap = styled.div`
  /* display: flex;
  align-items: center; */

  height: 150px;
  color: #af9fff;
  background-color: black;
  border-radius: 0px 100px 100px 0px;
  overflow: hidden;
  position: relative;
  width: 1050px;
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    width: 520px;
    height: 100px;
  }
  @media all and (min-width: 768px) {
    //브라우저 창 width가 768px보다 커지는 순간부터 적용
    //태블릿
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
`;

export const IntrojobWrap2 = styled.div`
  width: 650px;
  justify-content: center;
  align-items: center;
  height: 150px;
  color: #af9fff;
  border-radius: 100px;
  background-color: black;
  padding: 0px 20px;
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    width: 280px;
    height: 100px;
  }
  @media all and (min-width: 768px) {
    //브라우저 창 width가 768px보다 커지는 순간부터 적용
    //태블릿
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
`;
export const Introjob = styled.h3`
  font-size: 100px;
  /* font-weight: 500; */
  font-family: 'Darker Grotesque', sans-serif;
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    font-size: 50px;
    font-family: 'Darker Grotesque', sans-serif;
    line-height: 2;
  }
  @media all and (min-width: 768px) {
    //브라우저 창 width가 768px보다 커지는 순간부터 적용
    //태블릿
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
`;
export const Introjob3 = styled.h3`
  position: absolute;
  font-size: 100px;
  font-family: 'Darker Grotesque', sans-serif;
  justify-content: center;
  /* font-weight: 500; */
  left: 600px;
  line-height: 1.6;
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    font-size: 50px;
    font-family: 'Darker Grotesque', sans-serif;
    left: 300px;
    line-height: 2;
  }
  @media all and (min-width: 768px) {
    //브라우저 창 width가 768px보다 커지는 순간부터 적용
    //태블릿
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
`;
export const Introjob4 = styled.h3`
  position: absolute;
  /* font-weight: 500; */
  font-size: 100px;
  font-family: 'Darker Grotesque', sans-serif;
  justify-content: center;
  left: 600px;
  line-height: 1.6;
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    font-size: 50px;
    font-family: 'Darker Grotesque', sans-serif;
    left: 300px;
    line-height: 2;
  }
  @media all and (min-width: 768px) {
    //브라우저 창 width가 768px보다 커지는 순간부터 적용
    //태블릿
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
`;

export const Progress = styled.div`
  position: relative;
  height: 150px;
  color: black;
  border-radius: 0px 100px 100px 0px;
  background-color: #af9fff;
  overflow: hidden;
  width: 600px;
  padding: 0px 60px;
  animation: Progress 4s ease-in-out Infinite alternate;

  @keyframes Progress {
    from {
      width: 55%;
    }
    to {
      width: 105%;
    }
  }
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    height: 100px;
    width: 350px;
    padding: 0px 30px;
    @keyframes Progress {
      from {
        width: 54%;
      }
      to {
        width: 105%;
      }
    }
  }
  @media all and (min-width: 768px) {
    //브라우저 창 width가 768px보다 커지는 순간부터 적용
    //태블릿
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
`;

export const Introjob2 = styled.h6`
  font-size: 100px;
  /* font-weight: 500; */
  font-family: 'Darker Grotesque', sans-serif;
  display: flex;
  justify-content: center;
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    font-size: 50px;
    font-family: 'Darker Grotesque', sans-serif;
    left: 300px;
    line-height: 2;
  }
  @media all and (min-width: 768px) {
    //브라우저 창 width가 768px보다 커지는 순간부터 적용
    //태블릿
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
`;
export const MinimeWrap = styled.div`
  position: absolute;
  top: 400px;
  left: 1080px;
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    top: 500px;
    left: 370px;
  }
  @media all and (min-width: 768px) {
    //브라우저 창 width가 768px보다 커지는 순간부터 적용
    //태블릿
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1920px보다 커지는 순간부터 적용
    //데스크탑
    padding-top: 150px;
  }
  /* padding-top: 50px; */
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
  width: 30%;
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
