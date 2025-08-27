import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Warehouse, 
  Clock, 
  Shield, 
  Target, 
  Truck, 
  BarChart3,
  Users,
  Phone,
  Star,
  Award,
  Zap
} from "lucide-react";

const CentroLogistico = () => {
  const transportesAsociados = [
    {
      nombre: "9 Norte (Transporte)",
      destino: "Córdoba con Villa de María e intermedias, San José de la Dormida, Villa del Totoral y Jesús María",
      contacto: "(0351) (15) 682 4985 – Sr Roque Valdivia"
    },
    {
      nombre: "Alfa (Expreso)",
      destino: "Córdoba con Venado Tuerto, CABA, Rufino, San Gregorio, Canals, La Carlota y todo el sur de la Provincia de Santa Fe",
      contacto: "+54 9 3462 650 679 / +54 3462 400 789"
    },
    {
      nombre: "Andrea (Fletes)",
      destino: "Córdoba con Villa del Rosario, Luque y Las Varillas",
      contacto: "(0351) (15) 551 2024 – Jorge Cocconi / (0351) (15) 634 0371 – Marcelo Cocconi"
    },
    {
      nombre: "Astutti (Expreso)",
      destino: "Córdoba con Cañada de Gómez, Rosario y Las Rosas",
      contacto: "(03471) 42 2875"
    },
    {
      nombre: "Belgrano (Transporte)",
      destino: "Córdoba con Brinkmann, Morteros, Suardi, Porteña e intermedias",
      contacto: "(03562) 40 1860/1"
    },
    {
      nombre: "Borgogno (Transporte)",
      destino: "Córdoba con Río Gallegos, Ushuaia y Río Grande",
      contacto: "(02901) 433 4170"
    },
    {
      nombre: "Brinatti (Transportes)",
      destino: "Córdoba con General Pico, Santa Rosa y localidades del norte de La Pampa",
      contacto: "(02302) 421 6471"
    },
    {
      nombre: "Calcabrini (Expreso)",
      destino: "Córdoba con General Deheza, General Cabrera y Buenos Aires",
      contacto: "(0358) 405 3678"
    },
    {
      nombre: "Capdevilla (Expreso)",
      destino: "Córdoba con Capilla del Monte, Bialet Massé, Cosquín, Casa Grande, Valle Hermoso, La Falda, Huerta Grande, Villa Giardino, La Cumbre, Los Cocos, San Marcos Sierras, Cruz del Eje y Villa Devoto",
      contacto: "+54 9 3548 431 369"
    },
    {
      nombre: "Capello (Transporte)",
      destino: "Córdoba con San Francisco e intermedias",
      contacto: "(03564) 47 3824"
    },
    {
      nombre: "Cravero (Comisiones)",
      destino: "Córdoba con Arroyito e intermedias, Tránsito, Santiago Temple. Transporta encomiendas y efectúa trámites",
      contacto: "(03576) (15) 65 0250 – Sr Mauro Cravero / (03574) (15) 41 3781 – Srta Romina"
    },
    {
      nombre: "Diego (Transporte)",
      destino: "Córdoba con San Francisco e intermedias",
      contacto: "(03564) (15) 66 1285"
    },
    {
      nombre: "Domínguez (Transporte)",
      destino: "Córdoba con La Rioja (capital)",
      contacto: "(0380) 495 0656 – Sr Javier"
    },
    {
      nombre: "Drago (Transporte)",
      destino: "Córdoba con Villa Dolores, Mina Clavero y alrededores",
      contacto: "(03544) (15) 46 5110"
    },
    {
      nombre: "El Turco (Transporte)",
      destino: "Servicios de transporte",
      contacto: "+54 9 382-7453-666 / 382-2743-720"
    },
    {
      nombre: "Giordano (Transporte)",
      destino: "Córdoba con San Jorge, El Trébol y Rosario",
      contacto: "54 3406 403 146"
    },
    {
      nombre: "Gómez (Transporte)",
      destino: "Línea CABA, Rosario, Córdoba, Tucumán",
      contacto: "(0381) 420 1770"
    },
    {
      nombre: "GU-SE (Transporte)",
      destino: "Córdoba con Villa María, Bell Ville e intermedias",
      contacto: "(03537) 41 7971"
    },
    {
      nombre: "Horizonte (Transporte)",
      destino: "Córdoba con Rosario, CABA, Santa Fe y aledaños",
      contacto: "+54 9 342 469 2500"
    },
    {
      nombre: "Olivero (Transporte)",
      destino: "Córdoba con San Francisco e intermedias",
      contacto: "(03564) (15) 59 6141"
    },
    {
      nombre: "Puertas de Cuyo (Transporte)",
      destino: "Córdoba con San Juan",
      contacto: "(0264) 427 3280"
    },
    {
      nombre: "Robles (Transporte)",
      destino: "Córdoba con Deán Funes y Cruz del Eje",
      contacto: "(03521) (15) 41 6249"
    },
    {
      nombre: "Rofermar (Transportes)",
      destino: "Córdoba con Tinogasta, Aimogasta y Fiambalá",
      contacto: "(03837) (15) 48 9970"
    }
  ];

  const caracteristicas = [
    {
      icon: Shield,
      title: "Almacenamiento Seguro",
      description: "Instalaciones con sistemas de seguridad avanzados y seguros integrales para toda la mercadería"
    },
    {
      icon: BarChart3,
      title: "Gestión Informatizada",
      description: "Software especializado para el control de inventarios y gestión de operaciones logísticas"
    },
    {
      icon: Users,
      title: "Personal Especializado",
      description: "Equipo técnico capacitado en manejo de cargas especiales y procedimientos logísticos"
    },
    {
      icon: Truck,
      title: "Flota Propia",
      description: "Vehículos especializados para diferentes tipos de carga y servicios de distribución"
    }
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
              <Warehouse className="w-4 h-4" />
              Hub Logístico
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Centro Logístico Alpha
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestro centro neurálgico de operaciones ubicado estratégicamente en Córdoba, 
              desde donde coordinamos toda la logística del Litoral Argentino.
            </p>
          </div>

          {/* Main Info Card */}
          <div className="mb-16">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Warehouse className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary">Centro Logístico Alpha Córdoba</h2>
                    <p className="text-muted-foreground">Av Piero Astori 1300</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Nuestra Central de Cargas alberga los depósitos de reconocidos transportes, con los que 
                  podrá alcanzar una gran variedad de destinos a partir de un sólo lugar. La Central 
                  administra los servicios de recolección y distribución domiciliarias de manera coordinada, 
                  con lo que se alcanza una alta eficiencia y gran velocidad de respuesta.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Características */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Características del Centro</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caracteristicas.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Transportes Asociados */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Transportes Asociados</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nuestro centro logístico alberga una red de transportes especializados que amplían 
              significativamente nuestro alcance geográfico y capacidad de servicio.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {transportesAsociados.map((transporte, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-primary mb-2">{transporte.nombre}</h3>
                    <p className="text-muted-foreground mb-3">{transporte.destino}</p>
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Phone className="w-4 h-4" />
                      <span>{transporte.contacto}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">15,000m²</div>
              <div className="text-muted-foreground">Superficie Total</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">20+</div>
              <div className="text-muted-foreground">Transportes Asociados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Operaciones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground">Destinos Diarios</div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground text-center">
            <h2 className="text-3xl font-bold mb-4">Visitá Nuestro Centro Logístico</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Conocé de cerca nuestras instalaciones y descubrí por qué somos líderes en logística del Litoral
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contacto" 
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Agendar Visita
              </a>
              <a 
                href="/servicios" 
                className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentroLogistico;