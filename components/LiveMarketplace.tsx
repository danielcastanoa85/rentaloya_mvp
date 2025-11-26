import React from 'react';
import { Clock, MapPin, ArrowUpRight, Search } from 'lucide-react';
import { openWhatsApp } from '../utils';

interface LiveMarketplaceProps {
  searchTerm: string;
}

const demands = [
  { id: 'd1', title: 'Busco Pulidora Industrial', location: 'Sabaneta', time: 'hace 2 min' },
  { id: 'd2', title: 'Busco Andamio Certificado', location: 'Bello', time: 'hace 5 min' },
  { id: 'd3', title: 'Busco Drone para Boda', location: 'Copacabana', time: 'hace 12 min' },
  { id: 'd4', title: 'Busco Proyector 4K', location: 'Envigado', time: 'hace 18 min' },
];

const supplies = [
  { id: 's1', title: 'Taladro Bosch Pro', price: '$30k/día', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=200&auto=format&fit=crop' },
  { id: 's2', title: 'Cuarto Útil / Bodega', price: '$150k/mes', image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=200&q=80' },
  { id: 's3', title: 'Cámara Sony A7', price: '$90k/día', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=200&auto=format&fit=crop' },
  { id: 's4', title: 'Balcón para Valla', price: '$200k/mes', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=200&q=80' },
];

const LiveMarketplace: React.FC<LiveMarketplaceProps> = ({ searchTerm }) => {
  const filteredSupplies = supplies.filter(item => 
    item.title.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div>
             <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Actividad en Tiempo Real
            </h2>
            <p className="text-gray-500 mt-1">Lo que la gente está buscando y ofreciendo ahora en Medellín y su Área Metropolitana.</p>
          </div>
          <button className="hidden md:flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
            Ver todo el mercado <ArrowUpRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demand Column */}
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <Search className="w-5 h-5 mr-2 text-indigo-500" />
              Solicitudes Recientes (Demanda)
            </h3>
            <div className="space-y-3">
              {demands.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                  <div>
                    <div className="font-semibold text-gray-800">{item.title}</div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="w-3 h-3 mr-1" /> {item.location}
                    </div>
                  </div>
                  <div className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    <Clock className="w-3 h-3 mr-1" /> {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supply Column */}
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <ArrowUpRight className="w-5 h-5 mr-2 text-emerald-500" />
              Acaban de Publicar (Oferta)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredSupplies.length > 0 ? (
                filteredSupplies.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => openWhatsApp(`Hola, estoy interesado en alquilar el ${item.title} por ${item.price}. ¿Sigue disponible?`)}
                    className="bg-white p-3 rounded-2xl shadow-sm flex items-center space-x-3 hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <img src={item.image} alt={item.title} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-800 text-sm truncate">{item.title}</div>
                      <div className="text-emerald-600 font-bold text-sm">{item.price}</div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-xs text-gray-400">Nuevo</div>
                        <div className="text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">Alquilar</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 py-8 text-center text-gray-500 italic">
                  No se encontraron resultados para tu búsqueda.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMarketplace;