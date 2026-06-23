import { defaultLocale, ui, type Locale, type UiKey } from './ui';

export function useTranslations(lang: Locale) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLocale][key];
  };
}
