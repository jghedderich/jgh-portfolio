import {
  expressIcon,
  mongoIcon,
  nestIcon,
  nextIcon,
  reactIcon,
  tailwindIcon,
} from './icons';
import inmobiliaHero from '../assets/inmobilia/hero.png';
import inmobiliaThumbnail from '../assets/inmobilia/thumbnail.png';
import teamInmobilia from '../assets/inmobilia/team.png';
import contactInmobilia from '../assets/inmobilia/contact.png';
import propertyInmobilia from '../assets/inmobilia/propiedad.png';
import propertiesInmobilia from '../assets/inmobilia/propiedades.png';
import loginInmobilia from '../assets/inmobilia/login.png';
import admin1Inmobilia from '../assets/inmobilia/admin1.png';
import admin2Inmobilia from '../assets/inmobilia/admin2.png';
import admin3Inmobilia from '../assets/inmobilia/admin3.png';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    name: 'Inmobilia Caracas',
    slug: 'inmobilia-caracas',
    description: 'Real state landing page',
    thumbnail: inmobiliaThumbnail,
    hero: inmobiliaHero,
    repoLinks: [
      { title: 'frontend', href: 'https://github.com/Robbyro10/Inmobilia-app' },
      { title: 'backend', href: 'https://github.com/Robbyro10/Inmobilia-db' },
    ],
    history: [
      'Mi madre había empezado a trabajar como asesoría inmobiliaria en Caracas. Maneja muchas propiedades y clientes conectándola constantemente. Ella necesitaba un lugar donde pudiera gestionar y mantener la información de todas sus propiedades y presentarla adecuadamente a sus clientes. Yo necesitaba practica y experiencia desarrollando aplicaciones, asi que nos pusimos manos a la obra.',
      'Con el desarrollo de esta aplicación, tuve mis primeras experiencias diseñando interfaces de usuario. Aprendí sobre la importancia de la constante comunicación con el cliente y desplegué mi primera aplicación.',
    ],
    summary:
      'Los usuarios pueden revisar información de contacto sobre la empresa (Inmobilia Caracas) ademas de revisar las multiples propiedades disponibles.',
    summaryImages: [
      propertiesInmobilia,
      propertyInmobilia,
      teamInmobilia,
      contactInmobilia,
    ],
    info: [
      {
        title: 'Plataforma administrador',
        body: 'Al ingresar con credenciales administrativas, se pueden gestionar las propiedades de la plataforma.',
        images: [
          loginInmobilia,
          admin1Inmobilia,
          admin2Inmobilia,
          admin3Inmobilia,
        ],
      },
    ],
    technologies: {
      summary: [
        'La aplicacion esta conformada en dos partes (frontend y backend). En el frontend se usa Next.js, un framework de React para manejar la logica y armar todos los interfaces de usuario, en conjunto de Tailwind para los estilos.',
        'Para el backend, se usa Express y Nest.js, un framework de express para crear servidores escalables y seguros.',
      ],
      frontend: [
        { name: 'Next.js', image: nextIcon },
        { name: 'React.js', image: reactIcon },
        { name: 'Tailwind.css', image: tailwindIcon },
      ],
      backend: [
        { name: 'Nest.js', image: nestIcon },
        { name: 'MongoDB', image: mongoIcon },
        { name: 'Express', image: expressIcon },
      ],
    },
  },
];
