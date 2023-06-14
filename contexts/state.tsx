import { createContext, useContext, useEffect, useState } from "react";
import en from "../utility/lang/en";
import de from "../utility/lang/de";

const AppContext = createContext({} as any);
export function AppWrapper({ children }: any) {
  const [lang, setLang] = useState<string>("DE");
  const [dataLang, setDataLang] = useState<string[]>(de);

  const changeLanguage = (lang: string) => {
    setLang(lang);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    switch (lang) {
      case "DE":
        setLang("DE");
        setDataLang(de);
        break;
      case "EN":
        setLang("EN");
        setDataLang(en);
        break;
      default:
        setDataLang(de);
        setLang("DE");
        break;
    }
  }, [lang]);

  let sharedState = {
    lang,
    changeLanguage,
    dataLang,
    /* whatever you want */
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
