import adminImage from '../../assets/agroshow/admin.png';
import chatImage from '../../assets/agroshow/chat.png';
import heroImage from '../../assets/agroshow/hero.png';
import mapImage from '../../assets/agroshow/map.png';
import productsImage from '../../assets/agroshow/products.png';
import searchImage from '../../assets/agroshow/search.png';
import thumbnailImage from '../../assets/agroshow/thumbnail.png';
import type { Project } from '../../types/project';
import {
  astroIcon,
  mongoIcon,
  nestIcon,
  nodeIcon,
  reactIcon,
  tailwindIcon,
} from '../icons';

export const agroshowData: Project = {
  name: 'Agroshow',
  slug: 'agroshow',
  description: 'Directorio agrícola moderno y optimizado',
  url: 'https://agroshow.info',

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
        'Agroshow es una plataforma digital completa que revoluciona la manera en que las empresas agrícolas se conectan con sus clientes potenciales. A diferencia de los directorios tradicionales estáticos, nuestra aplicación funciona como un mercado dinámico donde las empresas pueden exhibir sus productos y servicios de manera profesional.',
        'El sistema de suscripciones está diseñado para ser justo y accesible, permitiendo que empresas de todos los tamaños puedan participar. Una vez registradas, las empresas obtienen acceso a un panel de control donde pueden gestionar su perfil, subir imágenes de alta calidad de sus productos, describir sus servicios en detalle, y actualizar su información de contacto en tiempo real.',
        'Los visitantes de la plataforma pueden explorar un catálogo completo y organizado de productos agrícolas, desde semillas y fertilizantes hasta maquinaria especializada y servicios de consultoría. Cada producto incluye descripciones detalladas, especificaciones técnicas, precios (cuando aplicable), y múltiples formas de contacto directo con el proveedor.',
        'La estructura de categorías y subcategorías fue diseñada en colaboración con expertos del sector agrícola para reflejar las necesidades reales del mercado. Esto permite que los usuarios naveguen intuitivamente, ya sea que busquen insumos específicos, maquinaria por tipo de cultivo, o servicios especializados por región.',
        'La implementación bilingüe (español e inglés) no es solo una traducción superficial, sino una localización completa que considera las diferencias culturales y terminológicas de cada mercado. Esto ha permitido que la plataforma atraiga tanto empresas locales como internacionales, expandiendo significativamente las oportunidades de negocio para todos los participantes.',
      ],
      media: [{ src: productsImage, type: 'image' }],
    },
    {
      title: 'Búsqueda Inteligente con Algolia',
      body: [
        'El corazón de la experiencia de usuario en Agroshow es nuestro sofisticado sistema de búsqueda, que combina la potencia de Algolia con una implementación personalizada de autocompletado desarrollada desde cero. Esta funcionalidad permite que los usuarios encuentren exactamente lo que buscan en milisegundos, independientemente del tamaño del catálogo.',
        'El sistema de autocompletado inteligente va más allá de las coincidencias exactas de texto. Utiliza algoritmos de relevancia que consideran sinónimos, términos relacionados, y patrones de búsqueda históricos para ofrecer sugerencias que realmente sean útiles. Por ejemplo, si un usuario busca "abono", el sistema también sugerirá "fertilizante", "nutrientes" y productos específicos relacionados.',
        'La respuesta instantánea del sistema se logra mediante una combinación de técnicas: índices pre-calculados, caché inteligente, y una implementación de debouncing que equilibra la velocidad de respuesta con la eficiencia del servidor. Los resultados aparecen mientras el usuario está escribiendo, creando una experiencia fluida y natural.',
        'Además de la búsqueda por texto, el sistema incluye filtros avanzados que permiten refinar los resultados por categoría, ubicación geográfica, rango de precios, disponibilidad de envío, y otros criterios relevantes para el sector agrícola.',
      ],
      media: [{ src: searchImage, type: 'image' }],
    },
    {
      title: 'Panel de Administración Completo',
      body: [
        'El panel de administración de Agroshow es una herramienta completa y sofisticada que permite el control total sobre todos los aspectos de la plataforma. Desarrollado con una interfaz moderna y responsive, ofrece a los administradores un ambiente de trabajo eficiente y organizado para gestionar el crecimiento constante del directorio.',
        'El sistema de gestión de planes de suscripción es altamente flexible, permitiendo crear múltiples niveles de membresía con diferentes beneficios y limitaciones de publicaciones.',
        'La moderación de contenido incluye un flujo de trabajo de aprobación para nuevos productos y empresas, herramientas de detección de contenido duplicado, sistema de reportes de usuarios, y capacidades de edición masiva para mantener la calidad y consistencia del catálogo.',
        'El módulo de analíticas integrado proporciona métricas detalladas sobre el uso de la plataforma, incluyendo estadísticas de búsquedas, productos más visitados, patrones de navegación de usuarios, y reportes de rendimiento financiero. Estos datos son esenciales para tomar decisiones informadas sobre el crecimiento del negocio.',
        'La gestión de banners promocionales incluye un sistema de campañas programadas, segmentación de audiencias por ubicación geográfica o tipo de empresa, y herramientas de diseño integradas para crear contenido visual atractivo sin necesidad de software externo.',
      ],
      media: [{ src: adminImage, type: 'image' }],
    },
    {
      title: 'Sistema de Chat Personalizado',
      body: [
        'Una de las innovaciones más destacadas de Agroshow es nuestro sistema de chat personalizado, desarrollado completamente desde cero para optimizar la comunicación entre empresas y clientes potenciales. A diferencia de las soluciones tradicionales que dependen de WebSockets, nuestro enfoque utiliza solicitudes HTTP optimizadas combinadas con la librería useSWR para crear una experiencia de tiempo real sin la complejidad técnica habitual.',
        'La arquitectura del sistema se basa en un patrón de polling inteligente que ajusta automáticamente la frecuencia de actualizaciones según la actividad de la conversación. Cuando una conversación está activa, las actualizaciones ocurren cada pocos segundos, pero cuando no hay actividad, el sistema reduce gradualmente la frecuencia para conservar recursos del servidor y mejorar la eficiencia energética.',
      ],
      media: [{ src: chatImage, type: 'image' }],
    },
    {
      title: 'Mapas Interactivos con MapBox',
      body: [
        'La integración de mapas interactivos en Agroshow utiliza la tecnología MapBox para proporcionar una experiencia geográfica rica y funcional que conecta el mundo digital con las ubicaciones físicas de las empresas agrícolas. Esta característica es especialmente valiosa en el sector agrícola, donde la proximidad geográfica puede ser un factor decisivo en las decisiones de compra.',
        'Las empresas pueden registrar múltiples ubicaciones, incluyendo oficinas principales, centros de distribución, tiendas físicas, y puntos de venta autorizados.',
      ],
      media: [{ src: mapImage, type: 'image' }],
    },
    {
      title: 'Notificaciones Multi-canal',
      body: [
        'Cuando una empresa es contactada, recibe notificaciones tanto por email como por WhatsApp, dependiendo de la preferencia del usuario. Esto asegura que las empresas no pierdan oportunidades de contacto, independientemente de su disponibilidad en la plataforma.',
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
