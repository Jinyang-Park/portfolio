import React, { useState } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiVelog } from 'react-icons/si';
import styled from 'styled-components';
import { MdOutlineSend } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Contact2Mobile from './Contact2Mobile';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next'; // 1. react-i18next import

function Contact2() {
  const { i18n, t } = useTranslation();

  const form = React.useRef(null);

  const [check, setCheck] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_API_KEYS
      )
      .then(
        (result) => {
          console.log(result.text);
          setCheck(false);
        },
        (error) => {
          console.log(error.text);
          setCheck(true);
        }
      );
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleTextarea = (event) => {
    setMessage(event.target.value);
  };

  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  // 모바일일 경우
  if (isMobile) {
    return (
      <>
        <Contact2Mobile />
      </>
    );
  }

  return (
    <>
      <ProjectBackground>
        <IntroCardPaddingGlobal>
          <ContactTitleWrap>
            <Title>
              Let's
              <ContantTitleColorChange>work </ContantTitleColorChange>
              together!
            </Title>
          </ContactTitleWrap>
          <SubTitle
            style={{
              fontSize: i18n.language === 'ko' ? '50px' : '70px',
              lineHeight: i18n.language === 'ko' ? '1.1' : '1',
            }}
          >
            {t('contactdescription.part1', { returnObjects: true })
              .split('\n')
              .map((line) => (
                <div>{line}</div>
              ))}
            {/* <br /> */}
            {t('contactdescription.part2')}
          </SubTitle>
          <br />
          <SubTitle
            style={{
              fontSize: i18n.language === 'ko' ? '50px' : '70px',
              lineHeight: i18n.language === 'ko' ? '1.1' : '1',
            }}
          >
            {t('contactdescription.part3')}
            <br />
            {t('contactdescription.part4')}
          </SubTitle>
          <SocialWrap>
            <Website
              href={'https://www.linkedin.com/in/jinyang-park/'}
              target='_blank'
            >
              <LinkedinIcon></LinkedinIcon>
            </Website>
            <Website href={'https://github.com/Jinyang-Park'} target='_blank'>
              <GithubIcon></GithubIcon>
            </Website>
            <Website href={'https://velog.io/@dbsskdud60'} target='_blank'>
              <VelogIcon></VelogIcon>
            </Website>
          </SocialWrap>
          <EmailFormWrap>
            <EmailInputForm ref={form} onSubmit={onSubmit}>
              <SecondDiv>
                <BigDiv>
                  <InputDiv>
                    <NameInput
                      type='text'
                      value={name}
                      name='fromname'
                      placeholder={i18n.language === 'ko' ? '이름' : 'Name'}
                      onChange={handleName}
                      required
                    />
                    <NameInput
                      type='email'
                      value={email}
                      name='fromnemail'
                      placeholder={i18n.language === 'ko' ? '메일' : 'E-mail'}
                      onChange={handleEmail}
                      required
                    />
                    <NameInput
                      type='text'
                      value={subject}
                      name='fromsubject'
                      placeholder={i18n.language === 'ko' ? '제목' : 'Subject'}
                      onChange={handleSubject}
                      required
                    />
                  </InputDiv>
                  <TextAreaDiv>
                    <TextArea
                      value={message}
                      name='frommessage'
                      placeholder={i18n.language === 'ko' ? '내용' : 'Message'}
                      onChange={handleTextarea}
                      required
                    />
                  </TextAreaDiv>
                </BigDiv>
                {check ? (
                  <SendBtn type='submit'>
                    <BtnIcon></BtnIcon>
                    <BtnText>
                      {i18n.language === 'ko' ? '보내기' : 'Send'}
                    </BtnText>
                  </SendBtn>
                ) : (
                  <ChangeBtn type='submit'>
                    <BtnText2
                      style={{
                        fontSize: i18n.language === 'ko' ? '36px' : '40px',
                        lineHeight: i18n.language === 'ko' ? '1.1' : '1',
                      }}
                    >
                      {t('contactdescription.part5')}
                      <br /> {t('contactdescription.part6')}
                    </BtnText2>
                  </ChangeBtn>
                )}
              </SecondDiv>
            </EmailInputForm>
          </EmailFormWrap>
        </IntroCardPaddingGlobal>
      </ProjectBackground>
    </>
  );
}

export default Contact2;
export const ProjectBackground = styled.div`
  padding-bottom: 50px;
  background-color: black;
`;
export const IntroCardPaddingGlobal = styled.div`
  padding-top: 0px;
  padding-left: 130px;
  padding-right: 130px;
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    /* padding: 20px 100px; */
  }
`;
export const ContactTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  padding-bottom: 160px;
`;
export const Title = styled.h1`
  font-size: 40px;
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 1;
  color: #eeff04;
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    font-size: 60px;
  }
`;
export const SubTitle = styled.span`
  /* font-size: 70px; */
  font-family: 'Darker Grotesque', sans-serif;
  line-height: 1.1;
  color: #eeff04;
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    font-size: 80px;
  }
`;
export const ContantTitleColorChange = styled.span`
  position: relative;
  z-index: 90;
  color: #af9fff;
  margin-left: 15px;
  margin-right: 5px;
`;
export const SocialWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  min-width: 100px;

  margin-bottom: 4px;
`;
export const LinkedinIcon = styled(BsLinkedin)`
  margin-top: 20px;
  margin-right: 15px;
  display: flex;
  padding: 20px 80px;
  border-radius: 30px;
  border: #eeff04 solid 1px;
  color: #eeff04;
  cursor: pointer;
  line-height: 0.15;
  transition: all 0.3s ease;

  @-webkit-keyframes ProjectIcon {
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
  @keyframes ProjectIcon {
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
    -webkit-animation: ProjectIcon 1s ease;
    animation: ProjectIcon 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    border: black solid 1px;
    background-color: #eeff04;
    color: black;
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    padding: 20px 100px;
  }
`;
export const GithubIcon = styled(BsGithub)`
  margin-top: 20px;
  margin-right: 15px;
  display: flex;
  padding: 20px 80px;
  border-radius: 30px;
  border: #eeff04 solid 1px;
  color: #eeff04;
  cursor: pointer;
  line-height: 0.15;
  transition: all 0.3s ease;

  @-webkit-keyframes ProjectIcon {
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
  @keyframes ProjectIcon {
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
    -webkit-animation: ProjectIcon 1s ease;
    animation: ProjectIcon 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    border: black solid 1px;
    background-color: #eeff04;
    color: black;
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    padding: 20px 100px;
  }
`;
export const VelogIcon = styled(SiVelog)`
  margin-top: 20px;
  margin-right: 15px;
  display: flex;
  padding: 20px 80px;
  border-radius: 30px;
  border: #eeff04 solid 1px;
  color: #eeff04;
  cursor: pointer;
  line-height: 0.15;
  transition: all 0.3s ease;

  @-webkit-keyframes ProjectIcon {
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
  @keyframes ProjectIcon {
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
    -webkit-animation: ProjectIcon 1s ease;
    animation: ProjectIcon 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    border: black solid 1px;
    background-color: #eeff04;
    color: black;
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    padding: 20px 100px;
  }
`;
export const Website = styled.a`
  display: flex;
`;
export const EmailFormWrap = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  padding-top: 50px;
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
  }
`;
export const EmailInputForm = styled.form``;
export const NameInput = styled.input`
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 22px;
  outline: none;
  box-shadow: inset 0 0 0 1px #1d1c16;
  border: 0;
  color: #eeff04;
  font-weight: 475;
  background: #1d1c16;
  padding: 36px 70px;
  margin-bottom: 8px;
  margin-right: 8px;
  border-radius: 48px;
  border: 1px solid#1d1c16;
  &::placeholder {
    color: #eeff04;
  }
  &:focus {
    border: 1px solid#eeff04;
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    font-size: 25px;
    padding: 36px 100px;
  }
`;
export const NameLabel = styled.label`
  font-size: 16px;
  display: flex;
  padding: 20px 80px;
  color: #eeff04;
  padding: 0;
  margin: 0 40px;
  font-weight: 500;
  pointer-events: none;
`;
export const InputDiv = styled.div`
  display: flex;
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
  }
`;
export const TextAreaDiv = styled.div`
  display: flex;
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
  }
`;

export const InputColDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  min-width: 100px;
`;
export const TextArea = styled.textarea`
  font-size: 22px;
  font-family: 'Darker Grotesque', sans-serif;
  outline: none;
  border: 0;
  color: #eeff04;
  font-weight: 475;
  width: 100%;
  height: 400px;
  resize: none;
  background: #1d1c16;
  padding: 36px 70px;
  border-radius: 48px;
  margin-right: 8px;
  border: 1px solid#1d1c16;
  &::placeholder {
    color: #eeff04;
  }
  &:focus {
    border: 1px solid#eeff04;
  }
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    padding: 40px 100px;
    font-size: 25px;
  }
`;
export const SendDivWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  /* padding: 1rem; */
  border-radius: 4.375rem;
  background-color: #eeeded;
  -webkit-transition: -webkit-transform 0.1s ease;
  transition: transform 0.1s ease;
  transition: transform 0.1s, -webkit-transform 0.1s ease;
`;

export const SendBtn = styled.button`
  background: #eeff04;
  color: #1c1c16;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 22px;
  font-weight: 725;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  padding: 36px 44px;
  border-radius: 48px;
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    width: 100%;
  }
`;
export const ChangeBtn = styled.button`
  font-family: 'Darker Grotesque', sans-serif;
  color: #eeff04;
  background: none;
  padding-top: 170px;

  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    margin-top: 100px;
  }
`;
export const BtnDiv = styled.div`
  display: inline-block;
  align-items: flex-start;
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
    margin-top: 10px;
  }
`;
export const BtnText2 = styled.span`
  font-size: 50px;
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑

    font-size: 52px;
  }
`;
export const BtnText = styled.span`
  font-size: 20px;
  font-family: 'Darker Grotesque', sans-serif;
`;
export const BtnIcon = styled(MdOutlineSend)``;
export const BigDiv = styled.div`
  /* display: flex; */
`;
export const SecondDiv = styled.div`
  display: flex;
  @media all and (min-width: 1920px) {
    //브라우저 창 width가 1023px보다 커지는 순간부터 적용
    //데스크탑
  }
`;
