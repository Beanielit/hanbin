"use client";
import { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";

import { getLocaleDictionary, LocaleType } from "@/lib/i18n";
import { LocaleDictionary } from "@/lib/i18n/LocaleDictionary";

import * as storage from "../lib/storage";

interface LocaleContext {
    dict: LocaleDictionary;
    setLocale: (lang: LocaleType) => void;
    locale: LocaleType;
}

const LocaleContext = createContext<LocaleContext | undefined>(undefined);

interface LocaleProviderProps extends PropsWithChildren {
    locale: LocaleType;
    dict: LocaleDictionary;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = props => {
    const { children, dict, locale } = props;
    const [langObj, setLangObj] = useState<{ locale: LocaleType; dict: LocaleDictionary }>({
        locale,
        dict
    });

    const setLocale = useCallback((newLocale: LocaleType) => {
        storage.setCurrentLocale(newLocale);
        getLocaleDictionary(newLocale).then(dict => {
            setLangObj({ locale: newLocale, dict });
        });
    }, []);

    return (
        <LocaleContext.Provider value={{ dict: langObj.dict, locale: langObj.locale, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = (): LocaleContext => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return context;
};
