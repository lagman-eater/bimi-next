import 'server-only';

const dictionaries = {
  en: () => import('../../../messages/en/translation.json').then((module) => module.default),
  ru: () => import('../../../messages/ru/translation.json').then((module) => module.default),
  kg: () => import('../../../messages/kg/translation.json').then((module) => module.default),
};

export const getDictionary = async (lang: 'en' | 'ru' | 'kg') => dictionaries[lang]();