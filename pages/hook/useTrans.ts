import { useRouter } from "next/router";
import en from "../../utility/lang/en";
import de from "../../utility/lang/de";

const useTrans = () => {
  const { locale } = useRouter();
  if (typeof window !== "undefined") {
    const lang = localStorage.getItem("lang");
    switch (lang) {
      case 'DE': return de;
      case 'EN': return en;
      default: return 'DE'
    }

  } else {
    const trans = locale === "" ? de : locale === "en" ? en : de;
    return trans;
  }
};

export default useTrans;
