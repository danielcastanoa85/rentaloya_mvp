import React from 'react';
import { Search, ShieldCheck, Handshake } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Busca y Encuentra",
    desc: "Explora miles de artículos verificados cerca de ti. Filtra por precio, categoría o ubicación.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: ShieldCheck,
    title: "2. Reserva Segura",
    desc: "Tu dinero está protegido hasta que recibes el artículo. Verificamos la identidad de cada usuario.",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Handshake,
    title: "3. Entregar y Devolver",
    desc: "Coordina la entrega en un punto seguro. Úsalo y devuélvelo para completar la transacción.",
    color: "bg-emerald-100 text-emerald-600"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm">Simple y Rápido</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Tu Renta en 3 Simples Pasos</h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-50 via-indigo-100 to-emerald-50 -z-10 transform scale-x-90"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${step.color} mb-6 shadow-lg transform transition-transform group-hover:scale-110 border-4 border-white`}>
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;