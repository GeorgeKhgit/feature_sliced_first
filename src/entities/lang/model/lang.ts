import { useCallback } from "react";

import { useTranslation } from "react-i18next";

export enum LngEnum {
  RU = "ru",
  EN = "en",
}

export const langFullName: any = {
  ru: "Russian",
  en: "English",
};

export const useLng = () => {
  const { i18n } = useTranslation();

  const changeLng = useCallback((lng: LngEnum) => {
    i18n.changeLanguage(lng);
  }, []);

  return {
    i18n,
    changeLng,
  };
};
