import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <Introduce>
      <MinimeHoduWrap>
        <MinimeHouduImg />
      </MinimeHoduWrap>
      <IntroContent>
        <IntronameWrap>
          <Introname>Hi. I'm Jinyang.</Introname>
        </IntronameWrap>
        <IntrojobWrap>
          <Introjob>A Frontend Developer </Introjob>
        </IntrojobWrap>
        <IntrojobWrap2>
          <Introjob2>& Designer.</Introjob2>
        </IntrojobWrap2>
      </IntroContent>
      <MinimeWrap>
        <MinimeImg />
      </MinimeWrap>
    </Introduce>
  );
}

export default Main;

export const Introduce = styled.div`
  padding-top: 150px;
  /* display: flex; */
`;
export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 30px;
`;
export const IntronameWrap = styled.div`
  width: 60%;
  justify-content: center;
  align-items: center;
  height: 150px;
  color: #af9fff;
  border-radius: 100px;
  background-color: black;
  padding: 0px 20px;
`;
export const Introname = styled.h1`
  font-size: 100px;
  font-family: 'Darker Grotesque', sans-serif;
  display: flex;
  justify-content: center;
`;
export const IntrojobWrap = styled.div`
  width: 70%;
  justify-content: center;
  align-items: center;
  height: 150px;
  color: black;
  background-color: #af9fff;
  border-radius: 0px 100px 100px 0px;
`;

export const IntrojobWrap2 = styled.div`
  width: 45%;
  justify-content: center;
  align-items: center;
  height: 150px;
  color: #af9fff;
  border-radius: 100px;
  background-color: black;
  padding: 0px 20px;
`;
export const Introjob = styled.p`
  font-size: 100px;
  font-family: 'Darker Grotesque', sans-serif;
  justify-content: center;
  display: flex;
`;
export const Introjob2 = styled.p`
  font-size: 100px;
  font-family: 'Darker Grotesque', sans-serif;
  display: flex;
  justify-content: center;
`;
export const MinimeWrap = styled.div`
  position: absolute;
  top: 270px;
  left: 70%;
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
  width: 245px;
  height: 300px;
  /* background-image: url('/assets/jin.png'); */
  background-image: url('/assets/82.png');
  margin: 0 auto;
  -webkit-animation: jin 2s steps(8) infinite;
  -moz-animation: jin 2s steps(8) infinite;
  -o-animation: jin 2s steps(8) infinite;
  animation: jin 2s steps(8) infinite;
`;
export const MinimeHoduWrap = styled.div`
  width: 10%;
  height: 10%;
  /* width: 120rem;
  height: 90rem; */
`;
export const MinimeHouduImg = styled.figure`
  @-webkit-keyframes hodu4 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -3750px;
    } /* <-- width of spritesheet*/
  }

  @-moz-keyframes hodu4 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -3750px;
    } /* <-- width of spritesheet*/
  }

  @-o-keyframes hodu4 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -3750px;
    } /* <-- width of spritesheet*/
  }

  @keyframes hodu4 {
    from {
      background-position: 0px;
    }
    to {
      background-position: -3750px;
    } /* <-- width of spritesheet*/
  }
  width: 150px;
  height: 150px;
  /* width: 50%;
  height: 50%; */
  background-image: url('/assets/hodu4.png');
  -webkit-animation: hodu4 2s steps(20) infinite;
  -moz-animation: hodu4 2s steps(20) infinite;
  -o-animation: hodu4 2s steps(20) infinite;
  animation: hodu4 2s steps(20) infinite;
`;
