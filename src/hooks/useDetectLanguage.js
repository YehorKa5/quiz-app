import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getQuizLanguage } from "../services/storage";

export const useDetectLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = getQuizLanguage();
    i18n.changeLanguage(language);
  }, []);
};
