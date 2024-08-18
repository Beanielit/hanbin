import { Inter as FontSans } from "next/font/google";

import { getLocaleDictionary } from "@/lib/i18n";
import * as storage from "@/lib/storage";
import Provider from "@/provider/Provider";

import getConfig from "../../config";

import "./globals.css";
import {cn} from "@/lib/utils";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

interface Props {
    children: React.ReactNode;
}

const RootLayout = async ({ children }: Readonly<Props>) => {
    const config = getConfig();
    const locale = storage.getCurrentLocale() || "kr";
    const dict = await getLocaleDictionary(locale);
    console.log(config.basePath);
    return (
        <html lang="en">
            <head>
                <title>Hanbin</title>
            </head>
            <body className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable)
            }>
                <Provider config={config} dict={dict} locale={locale}>
                    <main>{children}</main>
                </Provider>
            </body>
        </html>
    );
};
export default RootLayout;
