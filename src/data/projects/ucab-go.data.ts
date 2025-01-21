import type { Project } from '../../types/project';
// UcabGo images
import ucabGoHero from '../../assets/ucabgo/ucabgo-hero.png';
import ucabGoThumbnail from '../../assets/ucabgo/ucabgo-thumbnail.png';
import loginUcabGo from '../../assets/ucabgo/login.png';
import homeUcabGo from '../../assets/ucabgo/home.png';
import clientMenuUcabGo from '../../assets/ucabgo/client-menu.png';
import makeOrderUcabGo from '../../assets/ucabgo/make-order.png';
import admin1UcabGo from '../../assets/ucabgo/admin-signin.png';
import admin2UcabGo from '../../assets/ucabgo/admin-orders.jpg';
import admin3UcabGo from '../../assets/ucabgo/admin-menu.png';
import admin4UcabGo from '../../assets/ucabgo/admin-profile.jpg';
import {
  reactIcon,
  reduxIcon,
  bootstrapIcon,
  expressIcon,
  mongoIcon,
  nodeIcon,
} from '../icons';

export const ucabGoData: Project = {
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
};
