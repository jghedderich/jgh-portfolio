import type { Locale } from './ui';

export type ExperienceDate = {
  year: number;
  month: number;
};

const localeTags: Record<Locale, string> = {
  en: 'en-US',
  es: 'es-ES',
  de: 'de-DE',
};

export function formatExperienceDate(
  date: ExperienceDate,
  locale: Locale,
): string {
  return new Intl.DateTimeFormat(localeTags[locale], {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date.year, date.month - 1, 1));
}
