import { LocaleType } from "./i18n";

export function setCurrentLocale(locale: LocaleType): void {
    if (typeof window !== undefined) {
        localStorage.setItem("locale", locale);
    }
}

export function getCurrentLocale(): LocaleType {
    if (typeof window !== undefined) {
        return "en";
    }
    return (localStorage.getItem("locale") || "en") as LocaleType;
}
