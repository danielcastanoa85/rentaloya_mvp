import React from 'react';
import { Wallet, PiggyBank } from 'lucide-react';

const SavingsComparison: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Sea más Inteligente con su Dinero.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Buying (Bad/Warning) */}
          <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-8 flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Wallet className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-red-900 mb-2">Comprar Nuevo</h3>
            <p className="text-red-800 text-lg leading-relaxed">
              Pagas $450.000. Lo usas 2 veces al año. Se oxida guardado.
            </p>
          </div>

          {/* Renting (Good/Success) */}
          <div className="bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-8 flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform shadow-lg">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <PiggyBank className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">Alquilar en Rentaloya</h3>
            <p className="text-emerald-800 text-lg leading-relaxed">
              Pagas $15.000. Lo usas hoy. Te ahorras $435.000.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SavingsComparison;