// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_en from "./src/lang/en/global.json";
import global_vn from "./src/lang/vn/global.json";
const savedLanguage = localStorage.getItem("language") || "vn";
const resources = {
  en: {
    translation: global_en,
  },
  vn: {
    translation: global_vn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "vn",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
