import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import type { Locale } from '../i18n/ui';
import { LOCALE_STORAGE_KEY } from '../i18n/utils';

export type LocaleOption = {
  locale: Locale;
  label: string;
  href: string;
};

type LanguageSelectProps = {
  lang: Locale;
  options: LocaleOption[];
  ariaLabel: string;
};

export function LanguageSelect({ lang, options, ariaLabel }: LanguageSelectProps) {
  const handleChange = (value: string) => {
    if (value === lang) return;

    const option = options.find((entry) => entry.locale === value);
    if (!option) return;

    localStorage.setItem(LOCALE_STORAGE_KEY, value);
    window.location.assign(option.href);
  };

  return (
    <Select value={lang} onValueChange={handleChange}>
      <SelectTrigger
        className="w-[4.75rem]"
        aria-label={ariaLabel}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {options.map(({ locale, label }) => (
          <SelectItem key={locale} value={locale}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
