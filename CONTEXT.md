# Glossary

Portfolio site for Juan Hedderich — personal branding, work history, and project showcase.

## Presence

**Canonical origin**:
The public hostname of this portfolio: `juanhedderich.com`. Visitors, crawlers, and social previews treat this as the site.
_Avoid_: Site URL, production URL, Netlify URL, Workers URL

## Internationalization

**Locale**:
One of the three supported site languages: English (`en`), Spanish (`es`), or German (`de`).
_Avoid_: Language (when referring to URL/routing), i18n code

**Default locale**:
English (`en`). Used for unprefixed URLs and as the fallback when a visitor's browser language is not `en`, `es`, or `de`.
_Avoid_: Default language, primary language

**Locale preference**:
The visitor's chosen locale, detected from the browser on first visit and stored locally. A manual selection in the navbar overrides detection and is remembered on future visits.
_Avoid_: Language setting, i18n preference

**Language selector**:
A compact shadcn-style select in the navbar (top-right) showing the current locale as a short code (`EN`, `ES`, `DE`). Selecting an entry navigates to the same page in that locale and saves the preference.
_Avoid_: Language picker, locale switcher

**Locale page**:
A rendered version of a route for a specific locale. Each locale page has its own `<html lang>`, meta title, description, and `hreflang` alternates pointing to sibling locale pages.
_Avoid_: Translated page, language version

**Localized content**:
UI labels, hero copy, about section, experience entries, and skills — all strings a visitor reads outside project case studies. Experience dates are stored as structured values and rendered with locale-aware formatting.
_Avoid_: Translatable content, i18n scope

**Project case study**:
A long-form MDX write-up for a single portfolio project. Not part of the initial localization scope; stays in its authored language. Project pages still exist under each locale's URL prefix — only the surrounding UI is localized.
_Avoid_: Project page, project content

## CV (With Photo)

A downloadable PDF résumé that includes Juan's headshot. The same file is offered regardless of locale; only the download UI labels change.
_Avoid_: Localized CV, translated résumé

## CV (No Photo)

A downloadable PDF résumé without a headshot. Suited for ATS or employers who prefer a text-only format. The same file is offered regardless of locale; only the download UI labels change.
