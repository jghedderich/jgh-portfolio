import {
  nextIcon,
  expoIcon,
  tailwindIcon,
  dotNetIcon,
  dockerIcon,
} from '../icons';

import orderDetail from '../../assets/gruas-ucab/detalle-orden.png';
import createOrder from '../../assets/gruas-ucab/crear-orden.png';
import orderSummary from '../../assets/gruas-ucab/order-summary.png';
import vehicles from '../../assets/gruas-ucab/vehiculos.png';
import deploy from '../../assets/gruas-ucab/deploy-diagram.png';
import video from '../../assets/gruas-ucab/gruas.webm';
import type { Project } from '../../types/project';

export const gruasUcabData: Project = {
  name: 'Grúas UCAB',
  slug: 'gruas-ucab',
  description: 'Servicio de Grúas de la UCAB',
  thumbnail: orderSummary,
  hero: orderDetail,
  repoLinks: [
    {
      title: 'App Web',
      href: 'https://github.com/jghedderich/gruas-ucab-web',
    },
    {
      title: 'App Móvil',
      href: 'https://github.com/jghedderich/gruas-ucab-mobile',
    },
    {
      title: 'Backend',
      href: 'https://github.com/jghedderich/gruas-ucab-backend',
    },
  ],
  history: [
    'Durante mi segunda vez cursando la materia de Desarrollo de Software, se nos asigno el desarrollo de una aplicación para la administración y gestión de datos de una empresa de servicios de Grúas.',
    'Requirió el desarrollo de tres aplicaciones: una plataforma web, una aplicación móvil y una API web.',
    'El enfoque del curso era el backend, era requerido que fuera desarrollado con .NET Core, siguiendo la arquitectura de microservicios y hexagonal, DDD y CQRS.',
    'Eramos un equipo de 3 personas, Pedro, Andrea y Yo. Pedro trabajo principalmente en el backend y aplicación móvil, siguiendo los interfaces que implemento Andrea. Yo fui el líder de equipo y definí la implementación y arquitectura y detalles técnicos de la aplicación, ademas de trabajar en el backend, me enfoque principalmente en la aplicación web.',
  ],
  info: [
    {
      title: 'Un vistazo a la Plataforma Administrativa',
      body: [
        'Existen 4 tipos de usuarios: Proveedor, Conductor, Operador y Administrador. Cada uno tiene permisos y responsabilidades distintas. Los proveedores pueden registrar sus grúas y conductores, los conductores pueden aceptar y completar órdenes, los operadores pueden crear y asignar órdenes y los administradores pueden gestionar usuarios y datos de la plataforma.',
      ],
      media: [{ src: video, type: 'video' }],
    },
    {
      title: 'Creación y asignación de órdenes',
      body: [
        'La plataforma web sirve como plataforma de administración, permite gestionar los datos de los proveedores, conductores y operadores, crear ordenes y gestionar los datos.',
        'Los operadores reciben las llamadas de los clientes accidentados y se encargan de crear las órdenes de servicio y asignarlas a los conductores. Cuando la orden es creada, se envía una notificación al conductor asignado, este puede aceptar o rechazar la orden desde la app móvil.',
      ],
      media: [{ src: createOrder, type: 'image' }],
    },
    {
      title: 'Ordenes de servicio',
      body: [
        'El costo de las ordenes se calcula automáticamente, según la distancia requerida para ser realizado. Ademas, los conductores pueden solicitar costos adicionales, en el caso de que el servicio presente complicaciones, como peajes, zonas rojas, etc.',
        'Dependiendo de la póliza del cliente, el costo del servicio podría ser gratis (como es el caso en la imagen). La empresa cuenta con distintos tipos de grúas, y el sistema asegura que se elija la grúa correcta para el vehículo del cliente.',
      ],
      media: [{ src: orderDetail, type: 'image' }],
    },
    {
      title: 'Proveedores',
      body: [
        'Los proveedores son los dueños de los locales que ofrecen servicios de grúas. Estos gestionan la información de su empresa, sus conductores y vehículos. El sistema cuenta con dos tipos de proveedores: internos y externos. Al asignar una orden, el sistema le da prioridad a los conductores de proveedores internos, siempre y cuando no se sacrifique la satisfacción del cliente.',
      ],
      media: [{ src: vehicles, type: 'image' }],
    },
    {
      title: 'Microservicios',
      body: [
        'El backend fue desarrollado siguiendo la arquitectura de microservicios, en la cual se separan las aplicaciones en módulos independientes, cada uno con su propio código y funcionalidad. Esto permite escalar y mantener la aplicación en un entorno de producción de manera eficiente. Definimos 3 microservicios, Ordenes, Proveedores y Admin',
        'El sistema cuenta con autenticación por JWT, colas con RabbitMQ, cache con Redis, envío de notificaciones con Firebase Cloud Messaging, envío de correos con MailerSend, sistema de loggeo, etc.',
        'Sin embargo, aumenta la complejidad de la aplicación y requiere un conocimiento más profundo de los frameworks y tecnologías utilizadas. Tuvimos muchísimos problemas con el despliegue, causando que tuvimos que correr las aplicaciones desde nuestras maquinas y exponer un puerto con Ngrok.',
        'El punto de entrada de la aplicación es un API Gateway, que se encarga de redirigir las peticiones a los microservicios correspondientes. Cada servicio estaba dockerizado para facilitar su desarrollo y despliegue. El siguiente diagrama muestra un ejemplo de la arquitectura:',
      ],
      media: [{ src: deploy, type: 'image' }],
    },
  ],
  technologies: {
    summary: [
      'Usamos .Net Core para el backend, Expo para la app móvil y Next.js para la app web.',
    ],
    frontend: [
      { name: 'Next.js', image: nextIcon },
      { name: 'Expo', image: expoIcon },
      { name: 'Tailwind', image: tailwindIcon },
    ],
    backend: [
      { name: '.NET Core', image: dotNetIcon },
      { name: 'Docker', image: dockerIcon },
    ],
  },
};
