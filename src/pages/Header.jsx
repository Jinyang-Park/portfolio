import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <>
      <NavContainer>
        <Nav>
          <LogoText>JIN.DEV</LogoText>
          <Navul>
            <Navli>HOME</Navli>
            <Navli>ABOUT</Navli>
            <Navli>PROJECTS</Navli>
            <Navli>CONTACT</Navli>
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
  background-color: black;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  align-items: center;
`;
export const LogoText = styled.p`
  font-size: 30px;
  font-family: 'Darker Grotesque', sans-serif;
  color: white;
`;
export const Navul = styled.ul`
  display: flex;
`;
export const Navli = styled.li`
  display: inline-block;
  list-style: none;
  padding: 2px 5px;
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 20px;
  margin-right: 30px;
  color: white;
  cursor: pointer;
  line-height: 1;
  vertical-align: middle;

  &:hover {
    padding: 2px 5px;
    border-radius: 4px;
    background-color: #af9fff;
    transition: color 0.3s, background-color 0.3s;
    vertical-align: middle;
  }
`;
