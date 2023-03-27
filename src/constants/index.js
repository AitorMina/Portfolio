import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  zapatilla,
  adivina,
  indexNeon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Desarrollador React",
    icon: mobile,
  },
  {
    title: "Desarrollador Backend",
    icon: backend,
  },
  {
    title: "Creador de Contenidos",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  /*{
    name: "TypeScript",
    icon: typescript,
  },*/
  {
    name: "React JS",
    icon: reactjs,
  },
  /* {
    name: "Redux Toolkit",
    icon: redux,
  },*/
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  /* {
    name: "figma",
    icon: figma,
  },*/
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Marzo 2020 - Abril 2021",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
      "Implementación de un diseño receptivo y garantía de la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Enero 2021 - Febrero 2022",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
      "Implementación de un diseño receptivo y garantía de la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Enero 2022 - Enero 2023",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
      "Implementación de un diseño receptivo y garantía de la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Enero 2023 - Actualmente",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
      "Implementación de un diseño receptivo y garantía de la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "¿Quieres salvar tu relación y no sabes cómo? Aitor tampoco pero te dejará un código limpio y ordenado",
    name: "Juan Da",
    designation: "JS Capo",
    company: "Acme Co",
    image: "https://avatars.githubusercontent.com/u/2182923?v=4",
  },
  {
    testimonial:
      "Cuidado con él, ¡tiene el poder de 'hackear' cualquier problema! ¡Definitivamente es un verdadero maestro del backend!",
    name: "Manu El",
    designation: "Php Sheriff",
    company: "DEF Corp",
    image: "https://es.wikieducator.org/images/8/81/ManuelRomero.jpg",
  },
  {
    testimonial:
      "Un contenido estupendo . Me ha cambiado la vida. Tanto, que ahora no me reconocen ni en mi casa.",
    name: "Elon Musk",
    designation: "CTO",
    company: "456 Empresas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Un impresionante portafolio en 3D de desarrollador web con ThreeJS | React Three Fiber.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three JS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AitorMina/Portfolio",
  },
  {
    name: "Bankist",
    description:
      "Aplicación de simulación de movimientos bancarios, creditos y funciones varias orientada al manejo de objetos",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/CPILE-INAEM/app-banco-thebestteamever",
  },
  {
    name: "Pig con react",
    description:
      "Clásico juego de dados competitivo para 2 jugadores desarrollado con react, tambien disponible en javascript vainilla.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://aitor.certweb.infenlaces.com/pig_react/",
  },
  {
    name: "Ficha de producto",
    description:
      "Ejemplo de ficha de producto dinámica, en la que animamos el artículo solo usando css",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: zapatilla,
    source_code_link: "https://github.com/AitorMina/ficha_producto",
  },
  {
    name: "Adivina número",
    description:
      "Juego de adivinar número oculto aleatorio, desarrollo disponible en javascript y react",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: adivina,
    source_code_link: "https://github.com/AitorMina/adivina-numero",
  },
  {
    name: "Index neones",
    description:
      "Indice de secciones dinámico, en el que obsevamos divertidas animaciones solo usando css",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: indexNeon,
    source_code_link: "https://aitor.certweb.infenlaces.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
