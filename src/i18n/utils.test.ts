import { describe, expect, it } from 'vitest';
import { formatExperienceDate } from './dates';
import { useTranslations } from './translate';
import {
  getLangFromUrl,
  matchBrowserLocale,
  switchLocalePath,
  translatePath,
} from './utils';

describe('getLangFromUrl', () => {
  it('returns English for the root path', () => {
    expect(getLangFromUrl(new URL('https://example.com/'))).toBe('en');
  });

  it('returns Spanish for a prefixed home path', () => {
    expect(getLangFromUrl(new URL('https://example.com/es/'))).toBe('es');
  });

  it('returns German for a prefixed project path', () => {
    expect(
      getLangFromUrl(new URL('https://example.com/de/projects/rag-agent')),
    ).toBe('de');
  });
});

describe('translatePath', () => {
  it('keeps English paths unprefixed', () => {
    expect(translatePath('/projects/rag-agent', 'en')).toBe(
      '/projects/rag-agent',
    );
  });

  it('adds a Spanish prefix for non-default locales', () => {
    expect(translatePath('/projects/rag-agent', 'es')).toBe(
      '/es/projects/rag-agent',
    );
  });

  it('removes the Spanish prefix when switching to English', () => {
    expect(switchLocalePath('/es/projects/rag-agent', 'en')).toBe(
      '/projects/rag-agent',
    );
  });
});

describe('matchBrowserLocale', () => {
  it('maps a supported browser language to a locale', () => {
    expect(matchBrowserLocale('es-VE')).toBe('es');
  });

  it('falls back to English for unsupported browser languages', () => {
    expect(matchBrowserLocale('fr-FR')).toBe('en');
  });
});

describe('formatExperienceDate', () => {
  it('formats month names using the active locale', () => {
    expect(formatExperienceDate({ year: 2025, month: 9 }, 'es')).toMatch(
      /septiembre/i,
    );
  });
});

describe('useTranslations', () => {
  it('returns the Spanish label for a UI key', () => {
    const t = useTranslations('es');
    expect(t('section.projects')).toBe('Proyectos');
  });

  it('falls back to English when a key is missing in another locale', () => {
    const t = useTranslations('de');
    expect(t('section.projects')).toBe('Projekte');
  });
});
