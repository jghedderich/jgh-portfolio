export const languages = {
  en: 'EN',
  es: 'ES',
  de: 'DE',
} as const;

export type Locale = keyof typeof languages;

export const locales = Object.keys(languages) as Locale[];

export const defaultLocale: Locale = 'en';

export const showDefaultLang = false;

export const localeOgTags: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  de: 'de_DE',
};

export const ui = {
  en: {
    'meta.title': 'Juan Hedderich — Software Engineer & Web Developer',
    'meta.description':
      'Portfolio of Juan Hedderich: software engineer focused on web applications, UI engineering, and AI (RAG).',
    'hero.greeting': "Hi, I'm ",
    'hero.bio':
      'Software engineer with {years} of professional experience. I focus on React and AI (RAG). EU citizen. Currently at Inmobiliaria Terepaima 🏠.',
    'hero.yearSingular': 'year',
    'hero.yearPlural': 'years',
    'hero.downloadCv': 'Download CV',
    'hero.cvWithPhoto': 'With Photo',
    'hero.cvNoPhoto': 'No Photo',
    'hero.languages': 'Español (Native) - English (C1) - Deutsch (A2)',
    'section.experience': 'Work experience',
    'section.projects': 'Projects',
    'section.skills': 'Skills',
    'section.about': 'About me',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'experience.present': 'Present',
    'about.p1':
      "My name is Juan Guillermo Hedderich. I started programming at 17, shortly before university. I graduated with a degree in computer engineering from Universidad Católica Andrés Bello (UCAB).",
    'about.p2':
      "I've taken several courses in frontend development and UX. I enjoy expressing my interest in art and design through the applications I build. I also like music, sports, and video games.",
    'footer.built': 'Built in Venezuela',
    'project.viewCode': 'View the code:',
    'project.visitSite': 'Visit the site',
    'project.technologies': 'Technologies',
    'project.frontend': 'Frontend',
    'project.backend': 'Backend',
    'project.otherProjects': 'Other projects',
    'project.previous': 'Previous project',
    'project.next': 'Next project',
    '404.title': 'Page not found',
    '404.back': 'Back to home',
    'nav.language': 'Language',
  },
  es: {
    'meta.title': 'Juan Hedderich — Ingeniero de Software y Desarrollador Web',
    'meta.description':
      'Portafolio de Juan Hedderich: ingeniero de software enfocado en aplicaciones web, ingeniería de UI e IA (RAG).',
    'hero.greeting': 'Hola, soy ',
    'hero.bio':
      'Ingeniero de software con {years} de experiencia profesional. Me enfoco en React e IA (RAG). Ciudadano de la UE. Actualmente en Inmobiliaria Terepaima 🏠.',
    'hero.yearSingular': 'año',
    'hero.yearPlural': 'años',
    'hero.downloadCv': 'Descargar CV',
    'hero.cvWithPhoto': 'Con foto',
    'hero.cvNoPhoto': 'Sin foto',
    'hero.languages': 'Español (Nativo) - Inglés (C1) - Alemán (A2)',
    'section.experience': 'Experiencia laboral',
    'section.projects': 'Proyectos',
    'section.skills': 'Habilidades',
    'section.about': 'Sobre mí',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas',
    'experience.present': 'Actualidad',
    'about.p1':
      'Me llamo Juan Guillermo Hedderich. Empecé a programar a los 17 años, poco antes de la universidad. Me gradué como ingeniero informático en la Universidad Católica Andrés Bello (UCAB).',
    'about.p2':
      'He tomado varios cursos de desarrollo frontend y UX. Disfruto expresar mi interés por el arte y el diseño a través de las aplicaciones que construyo. También me gustan la música, el deporte y los videojuegos.',
    'footer.built': 'Hecho en Venezuela',
    'project.viewCode': 'Ver el código:',
    'project.visitSite': 'Visitar el sitio',
    'project.technologies': 'Tecnologías',
    'project.frontend': 'Frontend',
    'project.backend': 'Backend',
    'project.otherProjects': 'Otros proyectos',
    'project.previous': 'Proyecto anterior',
    'project.next': 'Proyecto siguiente',
    '404.title': 'Página no encontrada',
    '404.back': 'Volver al inicio',
    'nav.language': 'Idioma',
  },
  de: {
    'meta.title': 'Juan Hedderich — Softwareentwickler & Webentwickler',
    'meta.description':
      'Portfolio von Juan Hedderich: Softwareentwickler mit Fokus auf Webanwendungen, UI-Engineering und KI (RAG).',
    'hero.greeting': 'Hallo, ich bin ',
    'hero.bio':
      'Softwareentwickler mit {years} Berufserfahrung. Mein Fokus liegt auf React und KI (RAG). EU-Bürger. Derzeit bei Inmobiliaria Terepaima 🏠.',
    'hero.yearSingular': 'Jahr',
    'hero.yearPlural': 'Jahre',
    'hero.downloadCv': 'Lebenslauf herunterladen',
    'hero.cvWithPhoto': 'Mit Foto',
    'hero.cvNoPhoto': 'Ohne Foto',
    'hero.languages': 'Spanisch (Muttersprache) - Englisch (C1) - Deutsch (A2)',
    'section.experience': 'Berufserfahrung',
    'section.projects': 'Projekte',
    'section.skills': 'Fähigkeiten',
    'section.about': 'Über mich',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'experience.present': 'Heute',
    'about.p1':
      'Mein Name ist Juan Guillermo Hedderich. Mit 17 Jahren, kurz vor dem Studium, habe ich mit dem Programmieren begonnen. Ich habe Informatik an der Universidad Católica Andrés Bello (UCAB) abgeschlossen.',
    'about.p2':
      'Ich habe mehrere Kurse in Frontend-Entwicklung und UX absolviert. Ich bringe mein Interesse an Kunst und Design gerne in die Anwendungen ein, die ich entwickle. Außerdem mag ich Musik, Sport und Videospiele.',
    'footer.built': 'Gebaut in Venezuela',
    'project.viewCode': 'Code ansehen:',
    'project.visitSite': 'Website besuchen',
    'project.technologies': 'Technologien',
    'project.frontend': 'Frontend',
    'project.backend': 'Backend',
    'project.otherProjects': 'Weitere Projekte',
    'project.previous': 'Vorheriges Projekt',
    'project.next': 'Nächstes Projekt',
    '404.title': 'Seite nicht gefunden',
    '404.back': 'Zurück zur Startseite',
    'nav.language': 'Sprache',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLocale];
