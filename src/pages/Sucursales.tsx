import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Star, Award } from "lucide-react";

const Sucursales = () => {
  const sucursales = [
    {
      city: "Córdoba",
      address: "Av Piero Astori y Ruta Nacional 19 (Barrio Palmar, a metros de Av. Circunvalación)",
      phone: "(0351) 573-8046 - (0351) 573 8047 - (351) 3147 077",
      email: "cordoba@alphatransportes.com.ar",
      description: "Casa matriz y centro de operaciones principal",
      horarios: "Lunes a Viernes: 7:00 - 19:00hs | Sábados: 8:00 - 12:00hs",
      servicios: ["Centro Logístico", "Oficinas Administrativas", "Depósito Principal"]
    },
    {
      city: "Santa Fe",
      address: "Av Gorriti 3198",
      phone: "(0351) 573 8047",
      email: "",
      description: "Sucursal estratégica para el centro de Santa Fe",
      horarios: "Lunes a Viernes: 8:00 - 17:00hs | Sábados: 8:00 - 12:00hs",
      servicios: ["Recepción de Cargas", "Despacho Local", "Atención al Cliente"]
    },
    {
      city: "Resistencia (Chaco)",
      address: "Av Mac Lean 525",
      phone: "(0351) 318 2019",
      email: "alpharesistencia64@gmail.com",
      description: "Hub logístico para la región chaqueña",
      horarios: "Lunes a Viernes: 8:00 - 12:00hs / 16:00 - 20:00hs | Sábados: 8:00 - 12:00hs",
      servicios: ["Depósito Regional", "Distribución Local", "Servicios Especiales"]
    },
    {
      city: "Posadas (Misiones)",
      address: "Av Mariano Moreno 2364",
      phone: "(0351) 573-8049",
      email: "alpha.posadas@gmail.com",
      description: "Puerta de entrada a la provincia de Misiones",
      horarios: "Lunes a Viernes: 8:00 - 12:00hs / 15:00 - 19:00hs",
      servicios: ["Terminal de Cargas"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <WhatsAppFloat />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Red Nacional
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Nuestras Sucursales
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Contamos con sucursales estratégicamente ubicadas en puntos clave del Litoral Argentino, 
              todas equipadas con tecnología moderna y personal especializado para brindarte el mejor servicio.
            </p>
          </div>
          
          {/* Sucursales Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {sucursales.map((sucursal, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{sucursal.city}</h3>
                      <p className="text-accent font-medium">{sucursal.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{sucursal.address}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <p className="text-muted-foreground">{sucursal.phone}</p>
                    </div>
                    
                    {sucursal.email && (
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                        <a href={`mailto:${sucursal.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {sucursal.email}
                        </a>
                      </div>
                    )}
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{sucursal.horarios}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Servicios Disponibles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sucursal.servicios.map((servicio, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {servicio}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas visitarnos?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Todas nuestras sucursales cuentan con personal especializado listo para atenderte y resolver tus consultas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contactar Sucursal
              </a>
              <a 
                href="/centro-logistico" 
                className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Ver Centro Logístico
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sucursales;