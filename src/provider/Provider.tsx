import {LocaleType} from "../lib/i18n";
import {LocaleDictionary} from "@/lib/i18n/LocaleDictionary";
import {ColorMode} from "../lib/colors";
import {Config} from "../../config";
import {LocaleProvider} from "./LocaleProvider";
import {ConfigProvider} from "./ConfigProvider";

interface Props {
  children: React.ReactNode;
  colorMode?: ColorMode;
  dict: LocaleDictionary;
  locale: LocaleType;
  config: Config;
}

const Provider: React.FC<Props> = (props) => {
  const { children, dict, locale, config } = props;

  return (
    <LocaleProvider dict={dict} locale={locale}>
      <ConfigProvider config={config}>
        {children}
      </ConfigProvider>
    </LocaleProvider>
  );
};

export default Provider;
