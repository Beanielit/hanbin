export interface Config {
    environment: string;
    basePath: string;
    imagePrefix: string;
}

export function getConfig(): Config {
    return {
        environment: process.env.NEXT_PUBLIC_ENVIRONMENT || "",
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
        imagePrefix: process.env.NEXT_PUBLIC_ENVIRONMENT === "local" ? "" : "/hanbin"
    };
}

export default getConfig;
