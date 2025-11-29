import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const categories = [
  {
    title: "Herramientas",
    subtitle: "Taladros, pulidoras y andamios",
    image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Tecnología",
    subtitle: "Cámaras, drones y audio",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Espacios Publicitarios",
    subtitle: "Balcones y fachadas visibles",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" // Updated Building Facade
  },
  {
    title: "Parqueaderos",
    subtitle: "Garajes cubiertos y seguros",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=800&q=80"
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terms and Conditions Button - Placed Top Center */}
        <div className="flex justify-center mb-16">
          <a 
            href="https://drive.google.com/file/d/1n1Qsw7csmN9Cp_muGqzO7M9uHWMYI4T5/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2.5 rounded-full border border-gray-300 bg-white text-gray-600 font-bold text-sm hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-300 transition-all shadow-sm group"
          >
            <FileText className="w-4 h-4 mr-2 text-gray-400 group-hover:text-indigo-500" />
            📄 Términos y Condiciones de Uso Rentaloya
          </a>
        </div>

        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Explora nuestras Categorías</h2>
          <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center transition-colors">
            Ver todas <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden cursor-pointer h-80 shadow-md hover:shadow-xl transition-all duration-300">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-white font-bold text-2xl mb-1">{cat.title}</h3>
                <p className="text-gray-300 text-sm font-medium">{cat.subtitle}</p>
                <div className="h-0.5 w-0 bg-emerald-500 mt-3 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;