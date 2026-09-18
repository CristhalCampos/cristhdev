'use client';
import { Camera} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  // Lógica de scroll local
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">CristhDeveloper</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Desarrollo web profesional.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="hover:text-[#fe735e] transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#fe735e] transition-colors"
              >
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Cristh Campos. Todos los derechos reservados.</p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="/aviso-legal" className="hover:text-[#fe735e] transition-colors">Aviso Legal</a>
            <a href="/privacidad" className="hover:text-[#fe735e] transition-colors">Política de Privacidad</a>
            <a href="/terminos" className="hover:text-[#fe735e] transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}