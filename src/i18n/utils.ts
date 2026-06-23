import type { Locale } from './ui';
import { defaultLocale, locales, showDefaultLang } from './ui';

const localePrefixPattern = new RegExp(`^/(${locales.join('|')})(?=/|$)`);

export function getLangFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale && locales.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }
  return defaultLocale;
}

export function stripLocaleFromPath(pathname: string): string {
  const stripped = pathname.replace(localePrefixPattern, '');
  if (stripped === '' || stripped === '/') {
    return '/';
  }
  return stripped.startsWith('/') ? stripped : `/${stripped}`;
}

export function translatePath(path: string, locale: Locale): string {
  const basePath = stripLocaleFromPath(path);
  if (!showDefaultLang && locale === defaultLocale) {
    return basePath;
  }
  if (basePath === '/') {
    return `/${locale}/`;
  }
  return `/${locale}${basePath}`;
}

export function switchLocalePath(
  pathname: string,
  targetLocale: Locale,
): string {
  return translatePath(pathname, targetLocale);
}

export function matchBrowserLocale(browserLanguage: string): Locale {
  const primary = browserLanguage.split('-')[0]?.toLowerCase();
  if (primary && locales.includes(primary as Locale)) {
    return primary as Locale;
  }
  return defaultLocale;
}

export const LOCALE_STORAGE_KEY = 'locale-preference';

export function getAlternateUrls(
  pathname: string,
  site: string,
): { locale: Locale; href: string }[] {
  return locales.map((locale) => ({
    locale,
    href: new URL(translatePath(pathname, locale), site).href,
  }));
}
