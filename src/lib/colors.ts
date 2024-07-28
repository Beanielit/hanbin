export type ColorMode = "dark" | "light";

export type Colors = { [key in Color]: string };

export type Color = "";

// @ts-expect-error need var
export const colors: Colors = {};

// @ts-expect-error need var
export const darkColors: Colors = {};