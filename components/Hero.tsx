import React from 'react';
import { ArrowRight, Hammer, Building2 } from 'lucide-react';
import { openWhatsApp } from '../utils';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-sm mb-4 border border-indigo-100">
              <span className="mr-2">🚀</span> Democratiza tus activos hoy
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Rentaloya: La Plataforma Donde los Vecinos de <span className="text-indigo-600">Bello Arriendan Seguro.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Monetice ese taladro que no usa o arriende esa fachada en Niquía y Cabañas sin miedos ni compliques. Todo con garantía.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => openWhatsApp("Hola, soy Offerent y quiero publicar.")}
                className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1"
              >
                <Hammer className="w-5 h-5 mr-2" />
                OFFERENTS: Publica tu activo
              </button>
              
              <button 
                onClick={() => openWhatsApp("Hola, soy Renter y busco algo específico.")}
                className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl text-emerald-600 bg-white border-2 border-emerald-500 hover:bg-emerald-50 transition-all hover:-translate-y-1"
              >
                <Building2 className="w-5 h-5 mr-2" />
                RENTERS: Empieza a ahorrar
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-gray-500 font-medium">
              <span className="flex items-center">
                <svg className="w-4 h-4 text-emerald-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                Sin comisiones ocultas
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 text-emerald-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                Seguro incluido
              </span>
            </div>
          </div>

          {/* Visual Content - Split Image Concept */}
          <div className="relative lg:h-[600px] w-full flex justify-center items-center">
             {/* Decorative Background Blob */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-gradient-to-tr from-indigo-100 to-emerald-50 rounded-full opacity-60 blur-3xl -z-10"></div>

             <div className="relative w-full max-w-lg lg:max-w-none h-full grid grid-cols-2 gap-4">
                <div className="space-y-4 flex flex-col justify-center translate-y-8">
                  <div 
                    onClick={() => openWhatsApp("Hola, estoy interesado en alquilar el Parqueadero Centro Medellín por $30.000 / día. ¿Sigue disponible?")}
                    className="bg-white p-2 rounded-3xl shadow-xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 cursor-pointer group"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&auto=format&fit=crop" 
                      alt="Parqueadero Cubierto" 
                      className="w-full h-48 md:h-64 object-cover rounded-2xl"
                    />
                    <div className="p-3">
                      <div className="font-bold text-gray-800 leading-tight">Parqueadero Centro Medellín</div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-emerald-600 text-sm font-semibold">$30.000 / día</div>
                        <div className="text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">Alquilar</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-100 p-6 rounded-3xl shadow-lg">
                    <div className="text-emerald-800 font-bold text-lg mb-1">Ahorra +40%</div>
                    <p className="text-emerald-700 text-sm">Rentando en lugar de comprar herramientas de un solo uso.</p>
                  </div>
                </div>

                <div className="space-y-4 flex flex-col justify-center -translate-y-8">
                  <div className="bg-indigo-600 p-6 rounded-3xl shadow-lg text-white">
                    <div className="font-bold text-lg mb-1">Gana Dinero</div>
                    <p className="text-indigo-100 text-sm">Convierte tu garaje en una fuente de ingresos pasivos.</p>
                  </div>
                  <div 
                    onClick={() => openWhatsApp("Hola, estoy interesado en alquilar la Cámara Sony A7III por $250.000 / día. ¿Sigue disponible?")}
                    className="bg-white p-2 rounded-3xl shadow-xl transform rotate-[3deg] hover:rotate-0 transition-transform duration-500 cursor-pointer group"
                  >
                     <img 
                      src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" 
                      alt="Cámara Sony A7III" 
                      className="w-full h-48 md:h-64 object-cover rounded-2xl"
                    />
                    <div className="p-3">
                      <div className="font-bold text-gray-800">Cámara Sony A7III</div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-emerald-600 text-sm font-semibold">$250.000 / día</div>
                        <div className="text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">Alquilar</div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;