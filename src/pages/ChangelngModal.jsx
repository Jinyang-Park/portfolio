import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsCheckCircleFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function ChangelngModal({
  closeModal,
  setIsOpenModal,
  isOpenModal,
}) {
  const { i18n } = useTranslation();
  console.log(isOpenModal);
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <ModalWrap data-aos={isOpenModal ? 'fade-down' : 'fade-up'}>
        <ModalBox>
          <ModalCenter>
            {/*바뀌는 언어를 체크 */}
            <ModalBtn onClick={closeModal}>close</ModalBtn>
            {i18n.language === 'ko' ? (
              <Modaltxt>언어 설정이 변경되었습니다.</Modaltxt>
            ) : (
              <Modaltxt style={{ fontSize: '22px' }}>
                Language changed.
              </Modaltxt>
            )}
          </ModalCenter>
        </ModalBox>
      </ModalWrap>
    </>
  );
}
export const ModalWrap = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 50px;
  position: absolute;
`;
export const ModalBox = styled.div`
  width: fit-content;
  height: 60px;
  border-radius: 100px;
  background-color: rgb(175, 159, 255);
  padding: 20px 20px;
  display: inline-block;
  justify-content: center;
  align-items: center;
`;
export const Modaltxt = styled.li`
  font-family: 'Darker Grotesque', sans-serif;
  font-weight: 600;
  font-size: 15px;
  list-style: none;
  line-height: 0.15;
`;
export const ModalCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalBtn = styled(BsCheckCircleFill)`
  font-size: 22px;
  margin-right: 10px;
  cursor: pointer;
  color: #eeff04;
`;
