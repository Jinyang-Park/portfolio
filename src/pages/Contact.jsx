import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id='contact'>
      <ProjectBackground>
        <IntroCardPaddingGlobal>
          <ContactTitle>
            I'm always
            <ContantTitleColorChange> interested </ContantTitleColorChange>
            about
          </ContactTitle>
          <LogoWrap>
            <LogoImg src='/assets/star2.png' />
          </LogoWrap>
          <ContactInter>
            <ContactWrap>
              <ContactAbout>UX/UI DESIGN</ContactAbout>
            </ContactWrap>

            <ContactWrap2
              data-aos='fade-left'
              data-aos-offset='300'
              data-aos-easing='ease-in-sine'
            >
              <ContactAbout2>FRONTEND DEVELOPMENT</ContactAbout2>
            </ContactWrap2>
          </ContactInter>
          <ContactInter>
            <ContactWrap3>
              <ContactAbout3>WEBFLOW</ContactAbout3>
            </ContactWrap3>
            <ContactWrap4>
              <ContactAbout4>DEVELOPMENT</ContactAbout4>
            </ContactWrap4>
            <ContactWrap4>
              <ContactAbout4>IDEA</ContactAbout4>
            </ContactWrap4>
          </ContactInter>
          <ContactInter>
            <ContactWrap4>
              <ContactAbout3>GRAPHIC DESIGN</ContactAbout3>
            </ContactWrap4>
            <HeartIconWrap data-aos='fade-up'>
              <ContactHeartIcon></ContactHeartIcon>
              {/* <ContactHeartIcon2></ContactHeartIcon2> */}
            </HeartIconWrap>
            <ContactWrap2>
              <ContactAbout2>BRANDING</ContactAbout2>
            </ContactWrap2>
          </ContactInter>
        </IntroCardPaddingGlobal>
      </ProjectBackground>
    </div>
  );
}

export default Contact;
export const ProjectBackground = styled.div`
  height: 160vh;
  background-color: #f5f5f5;
`;
export const IntroCardPaddingGlobal = styled.div`
  padding-top: 0px;

  padding-left: 130px;
  padding-right: 130px;
`;
export const ContactTitle = styled.h2`
  padding-top: 160px;
  padding-bottom: 160px;
  display: flex;
  justify-content: center;
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 40px;
  line-height: 1.2;
  font-weight: 700;
  /* letter-spacing: -1px; */
`;
export const ContantTitleColorChange = styled.span`
  position: relative;
  z-index: 90;
  color: #af9fff;
  margin-left: 5px;
  margin-right: 5px;
`;
export const ContactInter = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
`;
export const ContactWrap = styled.div`
  display: flex;

  align-items: center;
  width: fit-content;
  height: 120px;
  color: #af9fff;
  border-radius: 100px;
  background-color: black;
  padding: 0px 30px;
`;
export const ContactAbout = styled.h1`
  /* display: flex; */
  font-size: 70px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 0.15;
`;
export const ContactWrap2 = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 120px;
  color: black;
  border-radius: 100px;
  background-color: #af9fff;
  padding: 0px 30px;
  /* margin-left: 5px; */
`;
export const ContactWrap3 = styled.div`
  display: flex;

  align-items: center;
  width: fit-content;
  height: 120px;
  color: black;
  border-radius: 100px;
  background-color: #af9fff;
  padding: 0px 30px;
  border-radius: 0px 100px 100px 0px;
`;
export const ContactWrap4 = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 120px;
  color: #af9fff;
  border-radius: 100px;
  background-color: black;
  padding: 0px 30px;
`;
export const ContactAbout2 = styled.h1`
  font-size: 70px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 0.15;
`;
export const ContactAbout3 = styled.h1`
  font-size: 70px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 0.15;
`;
export const ContactAbout4 = styled.h1`
  font-size: 70px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 0.15;
`;
export const ContactHeartIcon = styled(AiFillHeart)`
  font-size: 100px;
  color: black;
`;
// export const ContactHeartIcon2 = styled(AiOutlineHeart)`
//   font-size: 80px;
//   color: #eeff04;
// `;
export const HeartIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 320px;
`;
export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;
