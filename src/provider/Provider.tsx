import { ColorMode } from "@/lib/colors";
import { LocaleType } from "@/lib/i18n";
import { LocaleDictionary } from "@/lib/i18n/LocaleDictionary";

import { ConfigProvider } from "./ConfigProvider";
import { LocaleProvider } from "./LocaleProvider";
import { Config } from "../../config";

interface Props {
    children: React.ReactNode;
    colorMode?: ColorMode;
    dict: LocaleDictionary;
    locale: LocaleType;
    config: Config;
}

const Provider: React.FC<Props> = props => {
    const { children, dict, locale, config } = props;

    return (
        <LocaleProvider dict={dict} locale={locale}>
            <ConfigProvider config={config}>{children}</ConfigProvider>
        </LocaleProvider>
    );
};

export default Provider;
