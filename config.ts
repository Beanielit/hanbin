export interface Config {
    environment: string;
    basePath: string;
}

export function getConfig(): Config {
    return {
        environment: process.env.NEXT_PUBLIC_ENVIRONMENT || "",
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || ""
    };
}

export default getConfig;
