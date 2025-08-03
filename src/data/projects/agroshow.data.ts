import {
  astroIcon,
  nestIcon,
  reactIcon,
  tailwindIcon,
  nodeIcon,
  mongoIcon,
} from '../icons';

import heroImage from '../../assets/agroshow/hero.png';
import thumbnailImage from '../../assets/agroshow/thumbnail.png';
import searchImage from '../../assets/agroshow/search.png';
import productsImage from '../../assets/agroshow/products.png';
import adminImage from '../../assets/agroshow/admin.png';
import chatImage from '../../assets/agroshow/chat.png';
import mapImage from '../../assets/agroshow/map.png';

import type { Project } from '../../types/project';

export const agroshowData: Project = {
  name: 'Agroshow',
  slug: 'agroshow',
  description: 'Directorio agrícola moderno y optimizado',
  url: 'https://agroshow.com',

  // TODO: Replace with actual images when available
  thumbnail: thumbnailImage,
  hero: heroImage,

  repoLinks: [],

  history: [
    'Este es mi primer proyecto freelance. Fui contactado por un cliente que tenía un sitio web desarrollado en WordPress.',
    'El sitio original era lento, inseguro y difícil de mantener, por lo que después de varias reuniones, acordamos desarrollar una nueva versión utilizando tecnologías modernas.',
    'La nueva plataforma fue construida con Astro, Nest.js, React, Tailwind CSS, y se despliega en Netlify con integración de Algolia para búsquedas.',
    'El sitio está disponible en español e inglés para alcanzar una mayor audiencia internacional.',
    'El proyecto permite a empresas agrícolas publicar sus productos y servicios mediante suscripciones, facilitando que otros usuarios los contacten para obtener información o realizar ventas.',
  ],

  info: [
    {
      title: 'Directorio Agrícola Moderno',
      body: [
        'La aplicación permite a empresas agrícolas publicar sus productos y servicios después de pagar una suscripción.',
        'Los usuarios pueden ver todos los productos disponibles y contactar directamente a las empresas para más información o para establecer una venta.',
        'Los productos están organizados en categorías y subcategorías para facilitar la navegación y búsqueda.',
        'El sitio está disponible completamente en español e inglés, ofreciendo una experiencia localizada para usuarios internacionales.',
      ],
      media: [{ src: productsImage, type: 'image' }],
    },
    {
      title: 'Búsqueda Inteligente con Algolia',
      body: [
        'Implementamos un sistema de búsqueda con autocompletado desarrollado manualmente que utiliza Algolia como motor de búsqueda.',
        'Los usuarios pueden encontrar productos rápidamente utilizando la caja de búsqueda inteligente.',
        'La búsqueda es instantánea y proporciona sugerencias relevantes mientras el usuario escribe.',
      ],
      media: [{ src: searchImage, type: 'image' }],
    },
    {
      title: 'Panel de Administración Completo',
      body: [
        'Los administradores pueden gestionar completamente la información del sitio.',
        'Incluye gestión de categorías, planes de suscripción, beneficios, productos, empresas y banners promocionales.',
        'Interfaz intuitiva que permite control total sobre el contenido de la plataforma.',
      ],
      media: [{ src: adminImage, type: 'image' }],
    },
    {
      title: 'Sistema de Chat Personalizado',
      body: [
        'Desarrollamos nuestro propio sistema de chat utilizando métodos HTTP y useSWR para una excelente experiencia de usuario.',
        'Evitamos la complejidad de WebSockets manteniendo una comunicación fluida entre empresas y clientes.',
        'El sistema proporciona actualizaciones en tiempo real sin la sobrecarga técnica de conexiones persistentes.',
      ],
      media: [{ src: chatImage, type: 'image' }],
    },
    {
      title: 'Mapas Interactivos con MapBox',
      body: [
        'Las empresas pueden compartir las ubicaciones de sus puntos de venta.',
        'Los mapas se muestran utilizando MapBox, proporcionando una experiencia visual e interactiva.',
        'Los usuarios pueden localizar fácilmente las empresas cercanas a su ubicación.',
      ],
      media: [{ src: mapImage, type: 'image' }],
    },
    {
      title: 'Notificaciones Multi-canal',
      body: [
        'Cuando una empresa es contactada, recibe notificaciones tanto por email como por WhatsApp.',
        'Sistema de notificaciones robusto que asegura que las empresas no pierdan oportunidades de negocio.',
        'Integración seamless con servicios de mensajería populares.',
      ],
    },
    {
      title: 'Optimización y Rendimiento',
      body: [
        'El sitio utiliza Server-Side Rendering (SSR) con Incremental Static Regeneration (ISR).',
        'Implementamos la regeneración estática incremental (ISR) y control de caché avanzado con Netlify.',
        'Utilizamos cabeceras HTTP para controlar el almacenamiento en caché, permitiendo reinvalidar páginas específicas o todo el tipo de contenido.',
        'Configuramos un webhook que revalida la caché cuando se actualiza un contenido, asegurando que los usuarios siempre vean el contenido más reciente.',
        'La estrategia de caché mantiene el equilibrio entre el rendimiento del sitio y la frescura del contenido, aprovechando al máximo las capacidades CDN de Netlify.',
        'Altamente optimizado para SEO, aspecto crítico para la visibilidad del negocio.',
        'Migración exitosa desde WordPress lento e inseguro a una plataforma moderna y eficiente.',
      ],
    },
  ],

  technologies: {
    summary: [
      'Utilizamos tecnologías modernas: Astro para el frontend con SSR/ISR, Nest.js para el backend, React para componentes interactivos, y Tailwind CSS para el diseño.',
      'Integración con Algolia para búsquedas, MapBox para mapas, y despliegue en Netlify con caché optimizado.',
    ],
    frontend: [
      { name: 'Astro', image: astroIcon },
      { name: 'React', image: reactIcon },
      { name: 'Tailwind CSS', image: tailwindIcon },
    ],
    backend: [
      { name: 'Nest.js', image: nestIcon },
      { name: 'Node.js', image: nodeIcon },
      { name: 'MongoDB', image: mongoIcon },
    ],
  },
};
