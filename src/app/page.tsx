"use client"

import {useLocale} from "@/provider/LocaleProvider";

const Page = () => {
    const locale = useLocale();
    return <div>{locale.dict.uiMessage.name}</div>;
};

export default Page;
