import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { ru, en } from "../../assets/locales/locale.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
