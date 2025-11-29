import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <a href="/" className="inline-block hover:opacity-90 transition-opacity">
              <svg width="190" height="40" viewBox="0 0 190 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Rentaloya Logo">
                <text x="0" y="30" fill="#4338ca" style={{ fontWeight: 800, fontSize: "32px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Rental</text>
                <circle cx="120" cy="21" r="16" fill="#10B981" />
                <text x="120" y="29" fill="white" textAnchor="middle" style={{ fontWeight: "bold", fontSize: "22px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>$</text>
                <text x="142" y="30" fill="#4338ca" style={{ fontWeight: 800, fontSize: "32px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ya</text>
              </svg>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              La plataforma líder en economía colaborativa de activos. Conectamos necesidades con oportunidades de manera segura.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">Cómo funciona</a></li>
              <li><a href="#" className="hover:text-indigo-600">Seguridad</a></li>
              <li><a href="#" className="hover:text-indigo-600">Publicar un artículo</a></li>
              <li><a href="#" className="hover:text-indigo-600">Categorías</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-indigo-600">Políticas de Garantía</a></li>
              <li><a href="https://tally.so/r/q45WQ5" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">Verificar mi Identidad</a></li>
              <li><a href="#" className="hover:text-indigo-600">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-indigo-600">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Recibe tips para ganar más dinero con tus activos.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg text-sm font-bold hover:bg-indigo-700">
                Suscribir
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span>© 2025 Rentaloya Bello. Hecho en Colombia.</span>
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-indigo-600"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-indigo-600"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-indigo-600"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;