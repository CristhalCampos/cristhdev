'use client';
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
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-(--color-background)/75 border-t border-(--color-bg-secondary)/30 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          
          {/* Columna 1: Branding */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold text-(--color-foreground)">CristhDeveloper</span>
            </div>
            <p className="text-(--color-fg-secondary) text-sm leading-relaxed">
              Desarrollo web profesional.
            </p>
          </div>
          
          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold mb-4 text-(--color-foreground)">Enlaces rápidos</h4>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-(--color-fg-secondary)">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-(--color-secondary) transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Columna 3: Redes Sociales */}
          <div>
            <h4 className="font-semibold mb-4 text-(--color-foreground)">Redes Sociales</h4>
            <div className="flex space-x-4 mt-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/cristh.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-(--color-bg-secondary)/20 flex items-center justify-center text-(--color-fg-secondary) hover:bg-(--color-secondary) hover:text-white transition-all duration-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/cristhal-campos-7877b5167"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-(--color-bg-secondary)/20 flex items-center justify-center text-(--color-fg-secondary) hover:bg-(--color-secondary) hover:text-white transition-all duration-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 128 128"
                >
                  <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Barra Inferior de Copyright */}
        <div className="pt-8 border-t border-(--color-bg-secondary)/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-(--color-fg-secondary)">
            © {new Date().getFullYear()} Cristhal Campos. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-(--color-fg-secondary)">
            <a href="/privacidad" className="hover:text-(--color-secondary) transition-colors cursor-pointer">
              Política de Privacidad
            </a>
            <a href="/terminos" className="hover:text-(--color-secondary) transition-colors cursor-pointer">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}