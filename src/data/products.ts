import type { ImageMetadata } from "astro";

import curado from "../assets/images/curado.webp";
import cremaViche from "../assets/images/crema-viche.webp";
import arrechon from "../assets/images/arrechon.webp";
import vichePuro from "../assets/images/viche-puro.webp";
import vinete from "../assets/images/vinete.webp";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  volume: string;
  image: ImageMetadata;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "curado",
    name: "Curado",
    tagline: "Frutas, hierbas y especias",
    description:
      "Una deliciosa fusión de viche artesanal con frutas, hierbas y especias naturales del Pacífico colombiano. Su sabor aromático y equilibrado lo convierte en una experiencia única que celebra la tradición y la riqueza cultural de nuestra tierra.",
    price: 50000,
    volume: "750 ml",
    image: curado,
    badge: "Más vendido",
  },
  {
    id: "crema-de-viche",
    name: "Crema de Viche",
    tagline: "Suave, cremosa y dulce",
    description:
      "Suave, cremosa y llena de sabor. La crema de viche combina el carácter del viche artesanal con una textura delicada y notas dulces que la hacen perfecta para disfrutar en cualquier ocasión especial.",
    price: 60000,
    volume: "750 ml",
    image: cremaViche,
  },
  {
    id: "arrechon",
    name: "Arrechon",
    tagline: "Una bebida emblemática",
    description:
      "Una emblemática bebida del Pacífico colombiano. Preparada con viche, especias y raíces naturales, el arrechón destaca por su sabor intenso y su fama tradicional como bebida energética y afrodisíaca.",
    price: 60000,
    volume: "750 ml",
    image: arrechon,
  },
  {
    id: "viche-puro",
    name: "Viche Puro",
    tagline: "El auténtico sabor del Pacífico",
    description:
      "El auténtico sabor del Pacífico colombiano. Un destilado artesanal de caña de azúcar elaborado con técnicas ancestrales que conservan toda la esencia, fuerza y tradición de nuestras raíces.",
    price: 40000,
    volume: "750 ml",
    image: vichePuro,
  },
  {
    id: "vinete",
    name: "Vinete",
    tagline: "Profundo, herbal y tradicional",
    description:
      "Una preparación tradicional con carácter único. El vinete mezcla viche con ingredientes naturales del Pacífico para ofrecer un sabor profundo, herbal y lleno de tradición.",
    price: 50000,
    volume: "750 ml",
    image: vinete,
  },
];

export function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);
}
