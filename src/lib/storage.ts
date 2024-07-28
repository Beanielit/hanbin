import {LocaleType} from "./i18n";

export function setCurrentLocale(locale: LocaleType): void {
    if (typeof window !== undefined) {
        localStorage.setItem("locale", locale);
    }
}

export function getCurrentLocale(): LocaleType {
    if (typeof window !== undefined) {
        return "kr";
    }
    console.log("in")
    return (localStorage.getItem("locale") || "kr") as LocaleType;
}