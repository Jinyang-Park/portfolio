import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <MinimeCover>
      <MinimeWrap>
        <MinimeInner>
          <MinimeImg />
        </MinimeInner>
      </MinimeWrap>
    </MinimeCover>
  );
}

export default Main;

export const MinimeCover = styled.div``;
export const MinimeWrap = styled.div``;
export const MinimeInner = styled.div``;
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
  width: 375px;
  height: 405px;

  background-image: url('/assets/jin.png');
  /* background-image: url('/assets/82.png'); */
  margin: 0 auto;
  -webkit-animation: jin 1s steps(8) infinite;
  -moz-animation: jin 1s steps(8) infinite;
  -o-animation: jin 1s steps(8) infinite;
  animation: jin 1s steps(8) infinite;
  border: 0 solid black;
`;
