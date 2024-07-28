import { LocaleDictionary } from "./LocaleDictionary";

export type LocaleType = "kr" | "ja" | "en";

const dictCache: { [key: string]: LocaleDictionary } = {};

// eslint-disable-next-line
function normalize(dict: any): any {
  Object.keys(dict).forEach((key: string) => {
    if (key === "default") {
      // importしたオブジェクトにdefault exportのためのdefaultキーが含まれているため除外
      return;
    }
    Object.keys(dict[key]).forEach((subKey: string) => {
      dict[key][subKey] = (dict[key][subKey] as string).replace(/\\n/g, "\n");
    });
  });
  return dict;
};

export async function getLocaleDictionary(lang: LocaleType): Promise<LocaleDictionary> {
  if (dictCache[lang]) {
    return dictCache[lang];
  }
  const dict = await import((`./dict/${lang}.json`));
  // NOTE: Server Component -> Client Componentへの引き渡し時にdictのままだとwarningが発生するためplain objectに変換する
  const serialized = JSON.parse(JSON.stringify(dict));
  dictCache[lang] = normalize(serialized);
  return serialized;
}

