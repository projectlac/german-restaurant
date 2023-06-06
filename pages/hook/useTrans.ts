import { useRouter } from "next/router";
import en from "../../utility/lang/en";
import de from "../../utility/lang/de";

const useTrans = () => {
  const { locale } = useRouter();
  const trans = locale === "" ? de : locale === "en" ? en : de;
  return trans;
};

export default useTrans;
