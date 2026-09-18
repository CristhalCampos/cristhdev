import { Sparkles, MessageSquare, CalendarDays, CreditCard, Wrench } from "lucide-react";
import { createElement } from "react";

export const certifications = [
  { title: 'Programación desde Cero', institution: 'EGG', year: '2023', description: 'Fundamentos de programación y desarrollo web' },
  { title: 'Programación Web', institution: 'LEXPIN', year: '2024 - 2025', description: 'Desarrollo fullstack y tecnologías modernas' }
];

export const projects = [
  {
    title: 'Localización y Monitoreo Sísmico',
    description: 'Plataforma web de respuesta rápida. Centraliza un buscador unificado de personas desaparecidas y un panel de monitoreo sísmico en Venezuela.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase'],
    category: 'Impacto Social',
    github: '#',
    live: '#',
    challenge: 'Estandarización de datos: combinar registros de bases de datos estructuradas con información no estructurada de APIs de emergencias.'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con catálogo de productos, carrito de compras y proceso de checkout optimizado.',
    technologies: ['Next.js', 'PostgreSQL', 'TailwindCSS'],
    category: 'E-Commerce',
    github: '#',
    live: '#'
  }
];

export const services = [
  {
    title: 'Portafolio Profesional',
    price: '$20',
    period: 'pago único',
    description: 'Tu portafolio web personalizado que destaca tu trabajo y te diferencia de la competencia.',
    features: ['Diseño único y personalizado', '100% Responsive', 'Subdominio tunombre.pcreativ.com gratis ó dominio propio por un costo adicional', 'Formulario de contacto funcional'],
    popular: true,
    icon: createElement(Sparkles, { className: 'w-6 h-6' })
  }
];

export const addons = [
  { name: 'Chatbot Inteligente', description: 'Atención automática 24/7 para responder preguntas frecuentes.', icon: createElement(MessageSquare, { className: 'w-5 h-5' })},
  { name: 'Agenda de Reuniones', description: 'Sistema de booking integrado para agendar citas automáticamente.', icon: createElement(CalendarDays, { className: 'w-5 h-5' })},
  { name: 'Pasarela de Pagos', description: 'Vende tus obras, prints o servicios directamente desde tu portafolio.', icon: createElement(CreditCard, { className: 'w-5 h-5' })},
  { name: 'Mantenimiento Mensual', description: 'Actualizaciones, backups, seguridad y pequeños cambios de contenido.', icon: createElement(Wrench, { className: 'w-5 h-5' })}
];