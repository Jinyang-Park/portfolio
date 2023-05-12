import React from 'react';
import styled from 'styled-components';
import { BiCopyright } from 'react-icons/bi';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <ProjectBackground>
        <IntroCardPaddingGlobal>
          <NavContainer>
            <Nav>
              <Link to={'/'}>
                <LogoImg src='/assets/star2.png' />
              </Link>
              <Navul>
                <Navli>
                  Copyright
                  <CIocn></CIocn>
                  2023 Jinyang
                </Navli>
              </Navul>

              <Navul>
                <Navli2>Design by Jinyang</Navli2>
              </Navul>
            </Nav>
          </NavContainer>
        </IntroCardPaddingGlobal>
      </ProjectBackground>
    </>
  );
}

export default Footer;
export const ProjectBackground = styled.div`
  padding-bottom: 30px;
  background-color: black;
`;
export const IntroCardPaddingGlobal = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`;
export const CIocn = styled(BiCopyright)`
  margin-left: 5px;
  margin-right: 5px;
`;
export const NavContainer = styled.div``;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
// export const LogoImg = styled.img`
//   width: 32px;
//   height: 44px;
//   margin-right: 30px;
//   background-repeat: no-repeat;
// `;
export const Navul = styled.ul`
  display: flex;
`;
export const Navli = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 2px 5px;
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 20px;
  margin-right: 30px;
  color: #fff;
  cursor: pointer;
  line-height: 1;
  vertical-align: middle;
`;

export const Navli2 = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 30px 50px;
  font-weight: 600;
  font-size: 20px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 0;
  color: #fff;
  line-height: 0.15;
`;
