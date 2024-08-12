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
import gymnasticDemo from '../assets/gymnastic/gymnastic-demo.mp4';
import gymnasticApiSelector from '../assets/gymnastic/api-selector.jpeg';

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
      'En la universidad cursé una materia fascinante llamada Desarrollo de Software. En este curso, se estudian patrones de diseño y arquitecturas limpias para la construcción de software limpio, mantenible y testeable. Específicamente, aprendimos sobre la arquitectura hexagonal, Domain Driven Design (DDD) y Aspect Oriented Programming (AOP).',
      'Para aplicar los conceptos aprendidos, nos asignaron a realizar una aplicación móvil de fitness. Los requerimientos eran vagos e incompletos, era nuestro trabajo diseñar y construir una solución de software que cumpla con los requerimientos del cliente (el profesor) y que siga las buenas prácticas mencionadas anteriormente.',
      'Eran 4 equipos de 12 personas en promedio. Naturalmente se creó un ambiente competitivo para ver cual equipo construiría la mejor aplicación. Al final, gracias a nuestro enfoque al UX y a proveer un producto real y usable, ganamos la competencia.',
    ],
    summary:
      'Los usuarios pueden ingresar y ver cursos y blogs relacionados a fitness. Pueden filtrar por categoría o instructor. Pueden hacer comentarios y preguntas, dejar likes/dislikes y traquear su progreso en cada curso.',
    summaryImages: [
      loginGymnastic,
      homeGymnastic,
      courseInfoGymnastic,
      courseVideoGymnastic,
      blogGymnastic,
      searchGymnastic,
    ],
    info: [
      {
        title: 'Veamos un demo',
        body: [''],
        media: [
          {
            src: gymnasticDemo,
            type: 'video',
          },
        ],
      },
      {
        title: 'Selector de APIs',
        media: [{ src: gymnasticApiSelector, type: 'image' }],
        body: [
          'Para garantizar la calidad de nuestro software, el profesor nos puso un requerimiento a nuestros backend. El backend de un equipo debe ser compatible con el front de otro, es decir, los backend deben ser intercambiables. Esto nos obligo a crear un API estándar y cada equipo debe seguirlo. Entonces el dia de la entrega, debemos poder cambiarnos al backend de otro equipo rápidamente.',
          'Los otros equipos lo que hacían era tumbar la aplicación, cambiar el url del backend y volver a correr la app. Nosotros queríamos hacer que este cambio sea una funcionalidad más de la app.',
          'Lo que hicimos fue guardar el url del API en el estado global de la aplicación, y cambiarla desde la pantalla de inicio de sesión para ingresar en la app y ver el contenido del equipo que quisiéramos (nosotros eramos Omega). ',
        ],
      },
    ],
    technologies: {
      summary: [
        'La aplicación esta conformada en dos partes (frontend y backend). En el frontend se usa Flutter, un framework de Dart creado por Google para construir aplicaciones nativas a distintas plataformas con un solo codebase, ahorrando mucho tiempo de desarrollo.',
        'Para el backend, se usa NestJS un framework de Node para crear servidores escalables y seguros. Para la base de datos, mongoDB, una cola de RabbitMQ para la sincronización de los read models, se desarrollo un sistema de búsquedas y recomendaciones con Algolia y se aplicaron patrones arquitectónicos como DDD, Arq Hexagonal, CQRS y Event Sourcing.',
      ],
      frontend: [{ name: 'Flutter', image: flutterIcon }],
      backend: [
        { name: 'Nest.js', image: nestIcon },
        { name: 'MongoDB', image: mongoIcon },
        { name: 'Node.js', image: nodeIcon },
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
      { title: 'Frontend', href: 'https://github.com/Robbyro10/UcabGo' },
      {
        title: 'Backend',
        href: 'https://github.com/Robbyro10/UcabGo-MongoDB',
      },
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
        body: [
          'Los dueños de locales pueden ingresar a la aplicación, gestionar sus órdenes y catálogo de productos.',
        ],
        media: [
          { src: admin1UcabGo, type: 'image' },
          { src: admin2UcabGo, type: 'image' },
          { src: admin3UcabGo, type: 'image' },
          { src: admin4UcabGo, type: 'image' },
        ],
      },
    ],
    technologies: {
      summary: [
        'La aplicación esta conformada en dos partes (frontend y backend). En el frontend se usa React.js, una librería de JavaScript para construir interfaces de usuario y Bootstrap para los estilos. Finalmente se usó Redux para manejar el estado global de la aplicación',
        'Para el backend, se usa Nest.js, un framework de Node.js para crear servidores escalables y seguros. Para la base de datos, se usó MongoDB.',
      ],
      frontend: [
        { name: 'React.js', image: reactIcon },
        { name: 'Redux', image: reduxIcon },
        { name: 'Bootstrap', image: bootstrapIcon },
      ],
      backend: [
        { name: 'Express.js', image: expressIcon },
        { name: 'MongoDB', image: mongoIcon },
        { name: 'Node.js', image: nodeIcon },
      ],
    },
  },
  {
    name: 'Inmobilia Caracas',
    slug: 'inmobilia-caracas',
    description: 'Real state landing page',
    url: 'https://inmobilia-caracas.vercel.app/',

    thumbnail: inmobiliaThumbnail,
    hero: inmobiliaHero,
    repoLinks: [
      {
        title: 'Frontend',
        href: 'https://github.com/Robbyro10/Inmobilia-app',
      },
      {
        title: 'Backend',
        href: 'https://github.com/Robbyro10/Inmobilia-db',
      },
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
        body: [
          'Al ingresar con credenciales administrativas, se pueden gestionar las propiedades de la plataforma.',
        ],
        media: [
          { src: loginInmobilia, type: 'image' },
          { src: admin1Inmobilia, type: 'image' },
          { src: admin2Inmobilia, type: 'image' },
          { src: admin3Inmobilia, type: 'image' },
        ],
      },
    ],
    technologies: {
      summary: [
        'La aplicación esta conformada en dos partes (frontend y backend). En el frontend se usa Next.js, un framework de React para manejar la lógica y armar todos los interfaces de usuario, en conjunto de Tailwind para los estilos.',
        'Para el backend, se usa Nest.js, un framework de Express para crear servidores escalables y seguros.',
      ],
      frontend: [
        { name: 'Next.js', image: nextIcon },
        { name: 'React.js', image: reactIcon },
        { name: 'Tailwind.css', image: tailwindIcon },
      ],
      backend: [
        { name: 'Nest.js', image: nestIcon },
        { name: 'MongoDB', image: mongoIcon },
        { name: 'Node.js', image: nodeIcon },
      ],
    },
  },
];
