import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Truck, Star, TrendingUp, Award } from "lucide-react";

const Destinos = () => {
  const provincias = [
    {
      name: "Córdoba",
      cities: ["Córdoba", "Rio Primero", "Arroyito", "San Francisco", "Intermedias de Ruta 19"],
      specialty: ""
    },
    {
      name: "Santa Fe",
      cities: [
        "Santa Fe", "Rafaela", "Esperanza", "Sauce Viejo", "Santo Tome", "Malabrigo", "Florencia", 
        "Vera", "Reconquista", "Avellaneda", "Villa Ocampo", "Las Toscas", "Intermedias de Ruta 11"
      ],
      specialty: ""
    },
    {
      name: "Entre Ríos",
      cities: [
        "Paraná", "Villaguay", "Concordia", "La Paz", "Federal", "Chajari",
        "Gualeguay", "Gualeguaychu", "Concepción del Uruguay", "Cólon", "Intermedias de Ruta 14"
      ],
      specialty: ""
    },
    {
      name: "Chaco",
      cities: [
        "Resistencia", "Villa Angela", "General Pinedo", "Charata", "Las Breñas",
        "Presidencia Roque Saenz Peña", "Quitilipi", "Machagai", "General San Martín"
      ],
      specialty: ""
    },
    {
      name: "Formosa",
      cities: ["Formosa", "El Colorado", "Pirané", "Clorinda", "Villa 213"],
      specialty: ""
    },
    {
      name: "Corrientes",
      cities: [
        "Corrientes", "Esquina", "Goya", "Bella Vista", "Mercedes", "Curuzu Cuatia",
        "Santo Tome", "Paso de los Libres", "Ituzaingó", "Intermedias de Ruta 12"
      ],
      specialty: ""
    },
    {
      name: "Misiones",
      cities: [
        "Posadas", "San Ignacio", "Puerto Rico", "Eldorado", "Puerto Iguazú", "Wanda",
        "Monte Carlo", "Leandro N. Alem", "Oberá", "Apostoles", "San Javier", "Santo Pipo"
      ],
      specialty: ""
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
              <MapPin className="w-4 h-4" />
              Cobertura Nacional
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Destinos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conectamos Córdoba con todo el Litoral Argentino. Servicio de transporte de cargas generales, 
              encomiendas, contrarreembolsos y mudanzas con cobertura completa en las principales provincias del noreste argentino.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary">7</div>
              <div className="text-sm text-muted-foreground">Provincias</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Destinos</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Sucursales</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary">60+</div>
              <div className="text-sm text-muted-foreground">Años</div>
            </div>
          </div>
          
          {/* Provinces Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {provincias.map((provincia, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{provincia.name}</h3>
                      <p className="text-sm text-accent font-medium">{provincia.specialty}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {provincia.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">{city}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mapa de Cobertura */}
          <div className="mt-16 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-8">Nuestro Alcance Nacional</h2>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/2ad554b8-5275-4b11-a2f1-b4fb8ba962d5.png" 
                  alt="Mapa de cobertura Alpha Transportes en Argentina" 
                  className="max-w-full h-auto rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>

          {/* Coverage Map Info */}
          <div className="mt-16">
            <Card className="bg-gradient-subtle border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-primary mb-4">Cobertura Completa del Litoral</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Desde 1964, Alpha Transportes ha desarrollado la red de transporte más completa y confiable 
                  del Litoral Argentino, conectando pequeñas localidades con grandes centros urbanos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contacto" 
                    className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Consultar Destino
                  </a>
                  <a 
                    href="/sucursales" 
                    className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Ver Sucursales
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinos;
