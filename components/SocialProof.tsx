import React from 'react';
import { Star } from 'lucide-react';

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
             <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Miles de Rentas Seguras, <br/>
              <span className="text-indigo-600">Cerca de Ti.</span>
             </h2>
             <div className="flex items-end gap-2 mb-6">
                <span className="text-6xl font-black text-gray-900">4.8k</span>
                <span className="text-gray-500 font-medium mb-2">Activos Rentados Exitosamente</span>
             </div>
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/u${i}/50/50`} alt="user" />
               ))}
               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 border-2 border-white">+200</div>
             </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
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