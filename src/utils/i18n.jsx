import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// # if you'd like to detect user language and load translation
import LanguaeDetector from 'i18next-browser-languagedetector';

import translationko from './translation.ko';
import translationen from './translation.en';

const resources = {
  ko: {
    translation: translationko,
  },
  en: {
    translation: translationen,
  },
};

i18n
  .use(LanguaeDetector) // 사용자 언어 탐지
  .use(initReactI18next) // i18n 객체를 react-18next에 전달
  .init({
    resources: resources,
    // lng: "ko", //언어 감지기를 상요하는 경우 옵션 정의 X
    lng: 'ko',
    fallbackLng: 'ko',
    debug: true,
    keySeparator: '.', // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
