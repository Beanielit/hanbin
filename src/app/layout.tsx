import { Inter } from "next/font/google";

import getConfig from "../../config";
import { getLocaleDictionary } from "../lib/i18n";
import * as storage from "../lib/storage";
import Provider from "@/provider/Provider";

const inter = Inter({ subsets: ["latin"] });

interface Props {
    children: React.ReactNode;
}

const RootLayout = async ({ children }: Readonly<Props>) => {
    const config = getConfig();
    //TODO: ssg에서 언어구현 하기(cookie 사용이 불가하니 좀 알아보기 )
    const locale = storage.getCurrentLocale() || "kr";
    const dict = await getLocaleDictionary(locale);
    console.log(config.basePath);
    return (
        <html lang="en">
            <head>
                <title>Hanbin</title>
            </head>
            <body className={inter.className}>
                <Provider config={config} dict={dict} locale={locale}>
                    <main>{children}</main>
                </Provider>
            </body>
        </html>
    );
};
export default RootLayout;
