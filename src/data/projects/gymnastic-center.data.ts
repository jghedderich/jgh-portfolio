import type { Project } from '../../types/project';
import heroGymnastic from '../../assets/gymnastic/hero.png';
import gymnasticThumbnail from '../../assets/gymnastic/thumbnail.png';
import loginGymnastic from '../../assets/gymnastic/login.png';
import homeGymnastic from '../../assets/gymnastic/home.png';
import searchGymnastic from '../../assets/gymnastic/search.png';
import blogGymnastic from '../../assets/gymnastic/blog.png';
import courseInfoGymnastic from '../../assets/gymnastic/course-info.png';
import courseVideoGymnastic from '../../assets/gymnastic/course-video.png';
import gymnasticDemo from '../../assets/gymnastic/gymnastic-demo.mp4';
import gymnasticApiSelector from '../../assets/gymnastic/api-selector.jpeg';
import { mongoIcon, nestIcon, nodeIcon, flutterIcon } from '../icons';

export const gymnasticCenterData: Project = {
  name: 'Gymnastic Center',
  slug: 'gymnastic-center',
  description: 'Compañero de fitness en tu bolsillo',
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
      body: ['Aquí puedes ver un demo de la aplicación en un dispositivo iOS.'],
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
};
