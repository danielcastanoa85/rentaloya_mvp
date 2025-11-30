import React from 'react';
import { Shield, Lock, UserCheck, Headset } from 'lucide-react';

const SafetySection: React.FC = () => {
  return (
    <section className="bg-[#1E1B4B] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900 mb-6">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">¿Quién usa tus cosas? Solo Vecinos Filtrados.</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
            La confianza es nuestra prioridad. Usamos tecnología biométrica avanzada. Si no pasan el filtro de seguridad, no pueden operar en Rentaloya.
          </p>
          <div className="mt-4">
            <a 
              href="https://tally.so/r/q45WQ5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-400 font-bold hover:text-emerald-300 transition-colors underline decoration-2 underline-offset-4"
            >
              ¿Nuevo usuario? Valídate aquí
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-indigo-900/40 p-6 rounded-3xl border border-indigo-800/50 backdrop-blur-sm hover:bg-indigo-900/60 transition-colors">
            <UserCheck className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="font-bold text-xl mb-2">KYC Biométrico</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Nadie entra anónimamente. Verificamos documentos oficiales y biometría facial de cada usuario antes de su primera renta.
            </p>
          </div>

          <div className="bg-indigo-900/40 p-6 rounded-3xl border border-indigo-800/50 backdrop-blur-sm hover:bg-indigo-900/60 transition-colors">
            <Lock className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="font-bold text-xl mb-2">Depósito de Garantía</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Retenemos un depósito de seguridad que cubre daños menores, liberado solo cuando confirmas la devolución correcta.
            </p>
          </div>

          <div className="bg-indigo-900/40 p-6 rounded-3xl border border-indigo-800/50 backdrop-blur-sm hover:bg-indigo-900/60 transition-colors">
            <Shield className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="font-bold text-xl mb-2">Micro-Seguros</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Alianza estratégica para cubrir robos o daños totales durante el periodo de renta. Tu activo nunca queda desprotegido.
            </p>
          </div>

           <div className="bg-indigo-900/40 p-6 rounded-3xl border border-indigo-800/50 backdrop-blur-sm hover:bg-indigo-900/60 transition-colors">
            <Headset className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="font-bold text-xl mb-2">Soporte 24h</h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Resolución de disputas en tiempo récord. Un equipo humano (no bots) media cualquier inconveniente.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SafetySection;