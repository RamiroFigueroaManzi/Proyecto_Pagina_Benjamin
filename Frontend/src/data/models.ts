export interface Model {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  coverImage: string;   // 👈 imagen de presentación
  images: string[];     // 👈 carrusel
}

export const models: Model[] = [
  {
    id: 'modelo-1',
    name: 'Modelo Compacto',
    shortDescription: 'Vivienda modular compacta y eficiente.',
    description:
      'Modelo compacto ideal para terrenos reducidos. Diseño funcional que prioriza la eficiencia espacial, iluminación natural y rápida instalación.',
    coverImage: '/models/modelo1.png',
    images: [
      '/models/modelo1.png',
      '/models/modelo1-2.jpg',
      '/models/modelo1-3.jpg',
    ],
  },
  {
    id: 'modelo-2',
    name: 'Modelo Familiar',
    shortDescription: 'Diseño moderno pensado para familias.',
    description:
      'Vivienda de mayor superficie, con ambientes amplios y posibilidad de ampliación futura. Ideal para uso permanente y confort diario.',
    coverImage: '/models/modelo2-cover.jpg',
    images: [
      '/models/modelo2-1.jpg',
      '/models/modelo2-2.jpg',
      '/models/modelo2-3.jpg',
    ],
  },
  {
    id: 'modelo-3',
    name: 'Modelo Premium',
    shortDescription: 'Arquitectura modular de alta gama.',
    description:
      'Modelo premium con terminaciones superiores, grandes aberturas y diseño contemporáneo. Pensado para clientes que buscan exclusividad.',
    coverImage: '/models/modelo3-cover.jpg',
    images: [
      '/models/modelo3-1.jpg',
      '/models/modelo3-2.jpg',
    ],
  },
  {
    id: 'modelo-4',
    name: 'Modelo Multifunción',
    shortDescription: 'Solución adaptable a múltiples usos.',
    description:
      'Modelo versátil adaptable como vivienda, oficina o espacio comercial. Diseño modular flexible y fácil transporte.',
    coverImage: '/models/modelo4-cover.jpg',
    images: [
      '/models/modelo4-1.jpg',
      '/models/modelo4-2.jpg',
      '/models/modelo4-3.jpg',
    ],
  },
];
