import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Package, Home, Shield, Clock, MapPin, Warehouse, BarChart3, Settings, Star, Zap, CheckCircle, TrendingUp, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Servicios = () => {
  const navigate = useNavigate();
  
  const handleSolicitarCotizacion = () => {
    navigate('/contacto');
  };

  const handleHablarEspecialista = () => {
    navigate('/contacto');
  };
  const servicios = [{
    title: "Cargas Generales",
    description: "Transporte seguro y confiable para todo tipo de mercaderías. Cobertura completa en Centro y NEA.",
    icon: Package,
    color: "from-blue-600 to-blue-800",
    badge: "Popular",
    badgeColor: "bg-blue-100 text-blue-800",
    caracteristicas: ["Entrega puerta a puerta", "Coordinación de horarios de entrega", "Manipulación especializada según tipo de carga"],
    beneficios: ["Más de 60 años de experiencia", "Atención personalizada"]
  }, {
    title: "Mudanzas y Traslados",
    description: "Servicio integral de mudanzas para hogares y oficinas. Embalaje profesional y cuidado especial.",
    icon: Home,
    color: "from-emerald-600 to-emerald-800",
    badge: null,
    badgeColor: "",
    caracteristicas: ["Personal especializado" , "Coordinación de fechas y horarios"],
    beneficios: ["Equipos entrenados en manipulación", "Sin costos ocultos", "Presupuesto gratuito", "Mudanzas locales e interprovinciales"]
  }, {
    title: "Depósito y Almacenaje",
    description: "Servicios de almacenamiento seguro con gestión de inventario.",
    icon: Warehouse,
    color: "from-purple-600 to-purple-800",
    badge: null,
    badgeColor: "",
    caracteristicas: ["Control de inventario", "Almacenes", "Distribución flexible"],
    beneficios: ["Amplia Atencion Horaria: Lun a Vie 7:00-19:00hs", "Seguridad las 24hs"]
  }, {
    title: "Centro de Coordinación Logística",
    description: "Gestión integral de la cadena de suministro.",
    icon: MapPin,
    color: "from-indigo-600 to-indigo-800",
    badge: null,
    badgeColor: "",
    caracteristicas: ["Redespachos a todo el país", "Consolidación de cargas", "Crossdocking"],
    beneficios: ["Ubicación estratégica", "Mayor eficiencia", "+ de 25 transportes"]
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <WhatsAppFloat />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Servicios Premium
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soluciones logísticas integrales con más de 60 años de experiencia. 
              Desde cargas generales hasta servicios especializados de última generación.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {servicios.map((servicio, index) => {
            const IconComponent = servicio.icon;
            return <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${servicio.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-xl text-gray-800">{servicio.title}</h3>
                            {servicio.badge && <Badge className={`${servicio.badgeColor} text-xs font-medium`}>
                                {servicio.badge}
                              </Badge>}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-2">{servicio.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Características:
                        </h4>
                        <ul className="space-y-2">
                          {servicio.caracteristicas.map((item, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              {item}
                            </li>)}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-blue-600" />
                          Beneficios:
                        </h4>
                        <ul className="space-y-2">
                          {servicio.beneficios.map((item, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              {item}
                            </li>)}
                        </ul>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleSolicitarCotizacion}
                      className={`w-full bg-gradient-to-r ${servicio.color} hover:shadow-lg transition-all duration-300 text-white font-semibold py-3 group`}
                    >
                      <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Solicitar cotización
                    </Button>
                  </CardContent>
                </Card>;
          })}
          </div>
          
          {/* Call to Action */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20"></div>
            <Card className="relative bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <CardContent className="relative z-10 p-12 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <TrendingUp className="w-8 h-8" />
                  <h2 className="text-4xl font-bold">¿Necesitas un servicio personalizado?</h2>
                  <TrendingUp className="w-8 h-8" />
                </div>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Nuestro equipo de especialistas desarrollará una solución logística específica para tu empresa
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleHablarEspecialista}
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Hablar con un Especialista
                  </Button>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Servicios;
