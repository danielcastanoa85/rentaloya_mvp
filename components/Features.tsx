import React from 'react';
import { PiggyBank, TrendingUp, Leaf } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            La Economía Circular en 3 Ventajas
          </h2>
          <p className="text-gray-600 text-lg">
            Rentaloya no es solo una plataforma, es un movimiento hacia un consumo más inteligente y sostenible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-start group">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
              <PiggyBank className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ahorro Inteligente</h3>
            <p className="text-gray-600 leading-relaxed">
              ¿Por qué comprar algo que usarás una vez al año? Renta lo que necesitas por una fracción del costo y libera espacio en tu hogar.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-start group relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 z-0 transition-transform group-hover:scale-110"></div>
            
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 z-10 group-hover:bg-emerald-500 transition-colors duration-300">
              <TrendingUp className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 z-10">Ingresos Pasivos</h3>
            <p className="text-gray-600 leading-relaxed z-10">
              Esa bicicleta, taladro o cámara que acumula polvo puede estar pagando tus próximas vacaciones. Pon tus activos a trabajar.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-start group">
            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
              <Leaf className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sostenibilidad Real</h3>
            <p className="text-gray-600 leading-relaxed">
              Maximizamos la vida útil de los productos. Menos manufactura innecesaria, menos residuos, más comunidad.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;