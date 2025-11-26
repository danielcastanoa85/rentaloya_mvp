import React, { useState, useEffect } from 'react';
import { Camera, CheckCircle2, DollarSign } from 'lucide-react';
import { openWhatsApp } from '../utils';

const uploadedImages = [
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80", // Construction/Tools
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80", // Camera/Tech
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"  // Apartment/Space
];

const PublishPreview: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle the steps for visual effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative h-[500px] flex items-center justify-center">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-indigo-50 rounded-[40px] transform rotate-3 scale-90 -z-10"></div>
            
            {/* Stacked Cards UI Simulation */}
            <div className="relative w-full max-w-md">
              
              {/* Card 3 (Bottom) */}
              <div 
                className={`absolute top-0 w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-6 transition-all duration-700 ease-in-out transform ${
                  activeStep === 2 
                    ? 'z-30 scale-100 translate-y-0 opacity-100' 
                    : 'z-10 scale-90 translate-y-12 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                  <h4 className="font-bold text-gray-800">Precio Inteligente</h4>
                  <DollarSign className="text-emerald-500 w-5 h-5" />
                </div>
                <div className="space-y-4">
                   <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                     <p className="text-xs text-emerald-700 font-semibold mb-1">Recomendado</p>
                     <p className="text-2xl font-bold text-gray-900">$45.000 <span className="text-sm font-normal text-gray-500">/día</span></p>
                   </div>
                   <div className="flex justify-between text-sm text-gray-500">
                     <span>Tu ganancia (92%):</span>
                     <span className="font-bold text-gray-800">$41.400</span>
                   </div>
                   <div className="w-full bg-indigo-600 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm">Publicar Ahora</div>
                </div>
              </div>

              {/* Card 2 (Middle) */}
              <div 
                className={`absolute top-0 w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-6 transition-all duration-700 ease-in-out transform ${
                  activeStep === 1
                    ? 'z-30 scale-100 translate-y-0 opacity-100' 
                    : 'z-20 scale-95 translate-y-6 opacity-80'
                }`}
              >
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                  <h4 className="font-bold text-gray-800">Estado y Fotos</h4>
                  <Camera className="text-indigo-500 w-5 h-5" />
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                   {uploadedImages.map((src, index) => (
                     <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative group">
                       <img 
                         src={src} 
                         className="w-full h-full object-cover" 
                         alt={`Upload ${index + 1}`} 
                       />
                       <div className="absolute inset-0 bg-black/10"></div>
                     </div>
                   ))}
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div className="w-full h-full bg-indigo-500"></div>
                </div>
              </div>

              {/* Card 1 (Top if step 0) */}
              <div 
                className={`absolute top-0 w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-6 transition-all duration-700 ease-in-out transform ${
                  activeStep === 0
                    ? 'z-30 scale-100 translate-y-0 opacity-100' 
                    : 'z-10 scale-90 -translate-y-6 opacity-40'
                }`}
              >
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                  <h4 className="font-bold text-gray-800">¿Qué ofreces?</h4>
                  <CheckCircle2 className="text-indigo-500 w-5 h-5" />
                </div>
                <div className="space-y-3">
                  <div className="h-10 border border-gray-200 rounded-lg flex items-center px-3 text-sm text-gray-800 font-medium">Taladro Inalámbrico</div>
                  <div className="h-10 border border-gray-200 rounded-lg flex items-center px-3 text-sm text-gray-500">Categoría: Herramientas</div>
                  <div className="flex gap-2 mt-4">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full"></div>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full"></div>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              Publicar es así de simple.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro asistente inteligente te ayuda a categorizar, valorar y proteger tu activo en menos de 2 minutos.
            </p>
            
            <div className="space-y-6">
              <div className={`flex items-start transition-opacity duration-500 ${activeStep === 0 ? 'opacity-100' : 'opacity-40'}`}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Categorización Instantánea</h4>
                  <p className="text-gray-500 text-sm">Selecciona categoría y nombre. Nosotros hacemos el resto.</p>
                </div>
              </div>
               <div className={`flex items-start transition-opacity duration-500 ${activeStep === 1 ? 'opacity-100' : 'opacity-40'}`}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Registro Visual</h4>
                  <p className="text-gray-500 text-sm">Sube fotos para garantizar el estado del producto antes de la renta.</p>
                </div>
              </div>
               <div className={`flex items-start transition-opacity duration-500 ${activeStep === 2 ? 'opacity-100' : 'opacity-40'}`}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Precio Sugerido</h4>
                  <p className="text-gray-500 text-sm">Nuestro algoritmo te sugiere el mejor precio para rentar rápido.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => openWhatsApp("Hola, quiero probar el asistente de publicación de activos.")}
              className="mt-10 px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
            >
              Pruébalo ahora
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PublishPreview;