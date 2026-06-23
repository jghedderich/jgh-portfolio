import type { Locale } from './ui';

export type ExperienceEntry = {
  title: string;
  description: string;
  company: string;
  companyHref: string;
  start: { year: number; month: number };
  end?: { year: number; month: number };
};

export const experienceByLocale: Record<Locale, ExperienceEntry[]> = {
  en: [
    {
      title: 'Software Engineer',
      description:
        'Lead frontend development for a full admin dashboard for real-estate operations. I automate day-to-day workflows and own reusable UI architecture on Next.js.',
      company: 'Inmobiliaria Terepaima',
      companyHref: 'https://inmobiliariaterepaima.com/',
      start: { year: 2025, month: 9 },
    },
    {
      title: 'Software Engineer',
      description:
        'Frontend development for the Agroshow platform, including UI/UX and component implementation. I translate client requirements into technical solutions and optimize search performance over large datasets.',
      company: 'Agrotendencia',
      companyHref: 'https://agrotendencia.tv/',
      start: { year: 2025, month: 2 },
      end: { year: 2025, month: 8 },
    },
    {
      title: 'Frontend Engineer',
      description:
        'Built web platform features, UI components, and interfaces with unit and end-to-end tests using Vitest and Playwright.',
      company: 'Avilatek',
      companyHref: 'https://www.avilatek.com/',
      start: { year: 2023, month: 6 },
      end: { year: 2025, month: 1 },
    },
  ],
  es: [
    {
      title: 'Ingeniero de Software',
      description:
        'Lidero el desarrollo frontend de un panel de administración completo para operaciones inmobiliarias. Automatizo flujos de trabajo diarios y soy responsable de la arquitectura UI reutilizable en Next.js.',
      company: 'Inmobiliaria Terepaima',
      companyHref: 'https://inmobiliariaterepaima.com/',
      start: { year: 2025, month: 9 },
    },
    {
      title: 'Ingeniero de Software',
      description:
        'Desarrollo frontend para la plataforma Agroshow, incluyendo UI/UX e implementación de componentes. Traduzco requisitos del cliente en soluciones técnicas y optimizo el rendimiento de búsquedas sobre grandes conjuntos de datos.',
      company: 'Agrotendencia',
      companyHref: 'https://agrotendencia.tv/',
      start: { year: 2025, month: 2 },
      end: { year: 2025, month: 8 },
    },
    {
      title: 'Ingeniero Frontend',
      description:
        'Construí funcionalidades de plataforma web, componentes UI e interfaces con pruebas unitarias y end-to-end usando Vitest y Playwright.',
      company: 'Avilatek',
      companyHref: 'https://www.avilatek.com/',
      start: { year: 2023, month: 6 },
      end: { year: 2025, month: 1 },
    },
  ],
  de: [
    {
      title: 'Softwareentwickler',
      description:
        'Leite die Frontend-Entwicklung eines vollständigen Admin-Dashboards für Immobilienoperationen. Ich automatisiere tägliche Workflows und verantworte die wiederverwendbare UI-Architektur mit Next.js.',
      company: 'Inmobiliaria Terepaima',
      companyHref: 'https://inmobiliariaterepaima.com/',
      start: { year: 2025, month: 9 },
    },
    {
      title: 'Softwareentwickler',
      description:
        'Frontend-Entwicklung für die Agroshow-Plattform, einschließlich UI/UX und Komponentenimplementierung. Ich übersetze Kundenanforderungen in technische Lösungen und optimiere die Suchleistung bei großen Datenmengen.',
      company: 'Agrotendencia',
      companyHref: 'https://agrotendencia.tv/',
      start: { year: 2025, month: 2 },
      end: { year: 2025, month: 8 },
    },
    {
      title: 'Frontend-Entwickler',
      description:
        'Entwicklung von Webplattform-Funktionen, UI-Komponenten und Schnittstellen mit Unit- und End-to-End-Tests unter Verwendung von Vitest und Playwright.',
      company: 'Avilatek',
      companyHref: 'https://www.avilatek.com/',
      start: { year: 2023, month: 6 },
      end: { year: 2025, month: 1 },
    },
  ],
};
