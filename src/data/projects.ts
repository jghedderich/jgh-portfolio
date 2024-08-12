import {
  expressIcon,
  mongoIcon,
  nestIcon,
  nextIcon,
  reactIcon,
  tailwindIcon,
  bootstrapIcon,
  reduxIcon,
  nodeIcon,
  flutterIcon,
} from './icons';
// inmobilia images
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
// UcabGo images
import ucabGoHero from '../assets/ucabgo/ucabgo-hero.png';
import ucabGoThumbnail from '../assets/ucabgo/ucabgo-thumbnail.png';
import loginUcabGo from '../assets/ucabgo/login.png';
import homeUcabGo from '../assets/ucabgo/home.png';
import clientMenuUcabGo from '../assets/ucabgo/client-menu.png';
import makeOrderUcabGo from '../assets/ucabgo/make-order.png';
import admin1UcabGo from '../assets/ucabgo/admin-signin.png';
import admin2UcabGo from '../assets/ucabgo/admin-orders.jpg';
import admin3UcabGo from '../assets/ucabgo/admin-menu.png';
import admin4UcabGo from '../assets/ucabgo/admin-profile.jpg';
// Gymnastic images
import heroGymnastic from '../assets/gymnastic/hero.png';
import gymnasticThumbnail from '../assets/gymnastic/thumbnail.png';
import loginGymnastic from '../assets/gymnastic/login.png';
import homeGymnastic from '../assets/gymnastic/home.png';
import searchGymnastic from '../assets/gymnastic/search.png';
import blogGymnastic from '../assets/gymnastic/blog.png';
import courseInfoGymnastic from '../assets/gymnastic/course-info.png';
import courseVideoGymnastic from '../assets/gymnastic/course-video.png';

import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    name: 'Gymnastic Center',
    slug: 'gymnastic-center',
    description: 'Mobile fitness companion',
    thumbnail: gymnasticThumbnail,
    hero: heroGymnastic,
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
      loginGymnastic,
      homeGymnastic,
      courseInfoGymnastic,
      blogGymnastic,
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
      frontend: [{ name: 'Flutter', image: flutterIcon }],
      backend: [
        { name: 'Nest.js', image: nestIcon },
        { name: 'MongoDB', image: mongoIcon },
        { name: 'Express', image: expressIcon },
      ],
    },
  },
  {
    name: 'UcabGo',
    slug: 'ucabgo',
    description: 'Plataforma de delivery dentro de la universidad',
    thumbnail: ucabGoThumbnail,
    hero: ucabGoHero,
    repoLinks: [
      { title: 'frontend', href: 'https://github.com/Robbyro10/UcabGo' },
      { title: 'backend', href: 'https://github.com/Robbyro10/UcabGo-MongoDB' },
    ],
    history: [
      'Durante mi segundo año de universidad, cursé una materia llamada Ingeniería de software donde aprendimos a trabajar con metodologías de trabajo (Scrum) y como realizar la arquitectura y documentación de una aplicación profesional.',
      'Con la popularidad de los servicios de delivery recientemente implementados en Venezuela, en equipo, pensamos en crear una plataforma de delivery para la universidad, donde los estudiantes pueden hacer pedidos a cualquier local de la universidad y que otro estudiante se encargue del envío.',
    ],
    summary:
      'Los usuarios pueden ingresar a la plataforma, revisar locales, sus productos y hacer pedidos.',
    summaryImages: [loginUcabGo, homeUcabGo, clientMenuUcabGo, makeOrderUcabGo],
    info: [
      {
        title: 'Plataforma administrador',
        body: 'Los dueños de locales pueden ingresar a la aplicación, gestionar sus órdenes y catálogo de productos.',
        images: [admin1UcabGo, admin2UcabGo, admin3UcabGo, admin4UcabGo],
      },
    ],
    technologies: {
      summary: [
        'La aplicación esta conformada en dos partes (frontend y backend). En el frontend se usa React.js, una librería de JavaScript para construir interfaces de usuario y Bootstrap para los estilos. Finalmente se usó Redux para manejar el estado global de la aplicacion',
        'Para el backend, se usa Express y Nest.js, un framework de express para crear servidores escalables y seguros.',
      ],
      frontend: [
        { name: 'React.js', image: reactIcon },
        { name: 'Redux', image: reduxIcon },
        { name: 'Bootstrap', image: bootstrapIcon },
      ],
      backend: [
        { name: 'Node.js', image: nodeIcon },
        { name: 'MongoDB', image: mongoIcon },
        { name: 'Express', image: expressIcon },
      ],
    },
  },
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
