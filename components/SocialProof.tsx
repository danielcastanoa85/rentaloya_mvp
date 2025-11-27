import React from 'react';
import { Star, ShieldCheck, MapPin, UserCheck } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Arquitecto",
    text: "He rentado más de 15 herramientas para mis obras. El ahorro es brutal comparado con comprar.",
    img: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "Ana Lucía",
    role: "Fotógrafa",
    text: "Pagué la mitad de mi cámara rentándola los fines de semana que no trabajo. Plataforma 10/10.",
    img: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "David T.",
    role: "Estudiante",
    text: "Conseguí una bicicleta de ruta pro para el fin de semana por lo que me costaba un taxi. Increíble.",
    img: "https://picsum.photos/seed/user3/100/100"
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/3">
             <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              Miles de Rentas Seguras, <br/>
              <span className="text-indigo-600">Cerca de Ti.</span>
             </h2>
             
             <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                   <UserCheck className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-gray-900">Verificación 100%</h3>
                   <p className="text-gray-500 font-medium">Identidad validada</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-gray-900">Soporte Local</h3>
                   <p className="text-gray-500 font-medium">Atención en Bello y Medellín</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                   <ShieldCheck className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-gray-900">Seguridad Total</h3>
                   <p className="text-gray-500 font-medium">Tus artículos protegidos</p>
                 </div>
               </div>
             </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 lg:mt-0">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;