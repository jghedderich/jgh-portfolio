import {
  expressIcon,
  mongoIcon,
  nestIcon,
  nextIcon,
  reactIcon,
  tailwindIcon,
} from './icons';
import inmobiliaMobile from '../assets/inmobilia/mobile.png';
import inmobiliaDesktop from '../assets/inmobilia/desktop.png';
import inmobiliaThumbnail from '../assets/inmobilia/thumbnail.png';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    name: 'Inmobilia Caracas',
    slug: 'inmobilia-caracas',
    description: 'Real state landing page',
    thumbnail: inmobiliaThumbnail,
    hero: {
      mobile: inmobiliaMobile,
      desktop: inmobiliaDesktop,
    },
    repoLinks: [
      { title: 'frontend', href: 'https://github.com/Robbyro10/Inmobilia-app' },
      { title: 'backed', href: 'https://github.com/Robbyro10/Inmobilia-db' },
    ],
    history: [
      'Mi madre había empezado a trabajar como asesoría inmobiliaria en Caracas. Maneja muchas propiedades y clientes conectándola constantemente. Ella necesitaba un lugar donde pudiera gestionar y mantener la información de todas sus propiedades y presentarla adecuadamente a sus clientes. Yo necesitaba practica y experiencia desarrollando aplicaciones, asi que nos pusimos manos a la obra.',
      'Con el desarrollo de esta aplicación, tuve mis primeras experiencias diseñando interfaces de usuario. Aprendí sobre la importancia de la constante comunicación con el cliente y desplegué mi primera aplicación.',
    ],
    summary:
      'Los usuarios pueden revisar información de contacto sobre la empresa (Inmobilia Caracas) ademas de revisar las multiples propiedades disponibles.',
    summaryImages: [],
    info: [
      {
        title: 'Plataforma administrador',
        body: 'Al ingresar con credenciales administrativas, se pueden gestionar las propiedades de la plataforma.',
        images: [],
      },
    ],
    technologies: {
      summary: [
        'La aplicacion esta conformada en dos partes (frontend y backend). En el frontend se usa Next.js, un framework de React para manejar la logica y armar todos los interfaces de usuario, en conjunto de Tailwind para los estilos.',
        'Para el backend, se usa Express y Nest.js, un framework de express para crear servidores escalables y seguros.',
      ],
      frontend: [nextIcon, reactIcon, tailwindIcon],
      backend: [nestIcon, mongoIcon, expressIcon],
    },
  },
];
