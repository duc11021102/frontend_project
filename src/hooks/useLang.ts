import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
type Lang = "vn" | "en";
const useLang = (targetLang: Lang) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(targetLang);
  // GET LANG
  useEffect(() => {
    const currentLang = i18n.language;
    if (currentLang === "vn") {
      setLang("vn");
    } else if (currentLang === "en") {
      setLang("en");
    }
  }, [i18n.language]);
  return lang;
};
export default useLang;
