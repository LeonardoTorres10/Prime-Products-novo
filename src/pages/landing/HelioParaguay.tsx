import { CheckCircle2, Factory, FlaskConical, Globe2, Mail } from 'lucide-react';

export function HelioParaguay() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-24 px-4" 
        style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 51, 102, 0.9), rgba(0, 51, 102, 0.7)), url("/images/home/hero-bg.jpg")' }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Soluciones Técnicas para Aplicaciones con Helio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Consulte nuestras soluciones técnicas para aplicaciones industriales y de laboratorio en Paraguay.</p>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-16">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-6">Excelencia en Ingeniería de Gases</h2>
          <p className="text-lg text-gray-700">
            En Prime Products, desarrollamos soluciones robustas para infraestructuras de gases especiales.
            Combinamos conocimiento técnico, equipos de alta calidad y un profundo entendimiento de 
            los requisitos operacionales.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Nuestras Capacidades Técnicas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
              <Factory className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Redes de Gas</h4>
              <p className="text-gray-600">Diseño y especificación técnica de paneles y redes de gas.</p>
            </div>
            
            <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
              <FlaskConical className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Laboratorios</h4>
              <p className="text-gray-600">Sistemas de regulación de gases para cromatografía e instrumentación analítica.</p>
            </div>
            
            <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
              <Globe2 className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Equipos</h4>
              <p className="text-gray-600">Cilindros y dewars criogénicos (compatibilidad bajo consulta técnica).</p>
            </div>
            
            <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
              <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Normas</h4>
              <p className="text-gray-600">Adecuación a estándares internacionales de seguridad e instrumentación.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary mb-4">Solicitar Evaluación Técnica</h3>
            <p className="text-gray-600">
              Envíe los detalles de su necesidad de aplicación con helio. 
              Nuestro equipo de ingeniería revisará su solicitud comercialmente.
            </p>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Nombre completo" className="w-full px-4 py-2 border rounded focus:ring-primary focus:border-primary" />
              <input type="text" placeholder="Empresa" className="w-full px-4 py-2 border rounded focus:ring-primary focus:border-primary" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="email" placeholder="Correo electrónico corporativo" className="w-full px-4 py-2 border rounded focus:ring-primary focus:border-primary" />
              <input type="tel" placeholder="Teléfono / WhatsApp" className="w-full px-4 py-2 border rounded focus:ring-primary focus:border-primary" />
            </div>
            <input type="text" placeholder="Ubicación del proyecto (Ciudad, País)" className="w-full px-4 py-2 border rounded focus:ring-primary focus:border-primary" />
            <textarea placeholder="Descripción técnica, pureza, presión o consumo estimado (si lo conoce)" rows={4} className="w-full px-4 py-2 border rounded focus:ring-primary focus:border-primary"></textarea>
            
            <div className="text-center pt-4">
              <button type="button" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Enviar solicitud
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
              * Nota: El suministro e instalación en Paraguay están sujetos a validación comercial e inventario.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
