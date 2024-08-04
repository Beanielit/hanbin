"use client";
import { createContext, PropsWithChildren, useContext } from "react";

import { Config } from "../../config";

interface ConfigContext {
    config: Config;
}

const ConfigContext = createContext<ConfigContext | undefined>(undefined);

interface ConfigProviderProps extends PropsWithChildren {
    config: Config;
}

export const ConfigProvider: React.FC<ConfigProviderProps> = props => {
    const { children, config } = props;
    return <ConfigContext.Provider value={{ config }}>{children}</ConfigContext.Provider>;
};

export const useConfig = (): ConfigContext => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error("useLocale must be used within a ConfigProvider");
    }
    return context;
};
