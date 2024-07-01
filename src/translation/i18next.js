import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGES } from "./languages";
import { resources } from "./resouces";

i18next.use(initReactI18next).init({
  fallbackLng: LANGUAGES.ENGLISH,
  resources,
});
