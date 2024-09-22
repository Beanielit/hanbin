import { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import ContentArea from "@/components/customUi/ContentArea";
import Header from "@/components/customUi/Header";
import { getLocaleDictionary } from "@/lib/i18n";
import * as storage from "@/lib/storage";
import { cn } from "@/lib/utils";
import Provider from "@/provider/Provider";

import getConfig from "../../config";

import "./globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

interface Props {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Hanbin's profile",
    description: "Hanbin's profile"
};

const RootLayout = async ({ children }: Readonly<Props>) => {
    const config = getConfig();
    const locale = storage.getCurrentLocale();
    const dict = await getLocaleDictionary(locale);
    return (
        <html className="scroll-smooth" lang="en">
            <head>
                <title>Hanbin</title>
            </head>
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                <Provider config={config} dict={dict} locale={locale}>
                    <Header />
                    <main className="flex-1">
                        <ContentArea>{children}</ContentArea>
                    </main>
                </Provider>
            </body>
        </html>
    );
};
export default RootLayout;
