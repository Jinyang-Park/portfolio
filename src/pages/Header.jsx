import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Website } from './Projects';
function Header() {
  return (
    <>
      <NavContainer>
        <Nav id='main'>
          <NavWrapper>
            {/* <div ref={Home} /> */}
            <Link
              activeClass='active'
              // spy={true}
              // smooth={true}
              // offset={50}
              // duration={500}
              to='main'
            >
              <LogoImg src='/assets/star2.png' />
            </Link>
            <Navul>
              {/* <Link to='About'> */}
              {/* <div onClick={onAboutClick} /> */}
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to='about'
              >
                <Navli>ABOUT</Navli>
              </Link>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to='projects'
              >
                <Navli>PROJECTS</Navli>
              </Link>
            </Navul>
          </NavWrapper>
          <Navul>
            <Link
              activeClass='active'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to='contact'
            >
              <Navli2>CONTACT</Navli2>
            </Link>
          </Navul>
        </Nav>
      </NavContainer>
    </>
  );
}

export default Header;

export const NavContainer = styled.div`
  /* width: 100%; */
  /* position: fixed; */
  /* position: fixed; */
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;

  background-color: #f5f5f5;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px 40px;
  align-items: center;
  @media all and (max-width: 768px) {
    padding: 20px 20px;
    justify-content: left;
  }
  @media all and (min-width: 1023px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    padding: 30px 40px;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  color: black;
  width: 60px;
  height: 60px;
  margin-right: 30px;
  background-repeat: no-repeat;
  cursor: pointer;
  @media all and (max-width: 768px) {
    margin-right: 10px;
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    width: 70px;
    height: 70px;
  }
`;

export const Navul = styled.ul`
  display: flex;
`;
export const Navli = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  list-style: none;
  padding: 2px 5px;
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 20px;
  margin-right: 20px;
  padding: 30px 30px;
  border-radius: 30px;
  color: black;
  cursor: pointer;
  line-height: 0.15;

  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 20px 30px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;
    background-color: #af9fff;
    padding: 30px 30px;
    color: white;
  }
  @media all and (max-width: 768px) {
    font-size: 16px;
    margin-right: 5px;
    padding: 15px 15px;

    &:hover {
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      padding: 15px 15px;

      border-radius: 50px;
      font-weight: 600;
      font-size: 16px;
      background-color: #af9fff;

      color: white;
    }
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    font-size: 25px;
    margin-right: 20px;
    padding: 30px 30px;
  }
  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    font-size: 25px;
    margin-right: 20px;
    padding: 30px 30px;
    border-radius: 50px;
    font-weight: 600;
    background-color: #af9fff;
    color: white;
  }
`;

export const Navli2 = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: #eeff04;
  padding: 30px 30px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 20px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 0;
  color: #222;
  cursor: pointer;
  line-height: 0.15;
  transition: all 0.3s ease;
  @-webkit-keyframes Navli2 {
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
  @keyframes Navli2 {
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
    -webkit-animation: Navli2 1s ease;
    animation: Navli2 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
  @media all and (max-width: 768px) {
    font-size: 16px;
    margin-right: 5px;
    padding: 15px 15px;
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    font-size: 25px;
    margin-right: 20px;
    padding: 30px 30px;
  }
`;
