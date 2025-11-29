import React from 'react';
import { Shield, Star, FileText, AlertTriangle } from 'lucide-react';

const TrustGuarantee: React.FC = () => {
  return (
    <section className="py-16 bg-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 text-orange-600 rounded-full mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Cuidado: ¡Lo Barato Sale Caro! <br />
            <span className="text-indigo-600">¿Por qué nunca negociar por fuera?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start">
            <div className="p-3 bg-indigo-50 rounded-xl mb-4">
              <Shield className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Depósito Blindado</h3>
            <p className="text-gray-600 leading-relaxed">
              Solo Rentaloya custodia el depósito. Si negocia por fuera y no le responden, pierde su garantía.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start">
            <div className="p-3 bg-emerald-50 rounded-xl mb-4">
              <Star className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Reputación Vecinal</h3>
            <p className="text-gray-600 leading-relaxed">
              Gane estatus de Vecino Confiable. Si se salta la app, pierde su historial y nadie le vuelve a prestar.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start">
            <div className="p-3 bg-blue-50 rounded-xl mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Respaldo Legal</h3>
            <p className="text-gray-600 leading-relaxed">
              La transacción de palabra no existe. Aquí generamos el soporte legal para reclamos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustGuarantee;