import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-transport.jpg";
import {
  Truck,
  Package,
  MapPin,
  Shield,
  Clock,
  Users,
  Award,
  Instagram,
  MessageCircle,
  Star,
  Zap,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const serviciosDestacados = [
    {
      title: "Cargas Generales",
      description: "Transporte seguro y eficiente de mercadería comercial e industrial con seguimiento en tiempo real",
      icon: Package,
      color: "from-blue-600 to-blue-800",
      badge: "Popular"
    },
    {
      title: "Mudanzas",
      description: "Servicio integral residencial y corporativo con personal especializado y materiales incluidos",
      icon: Truck,
      color: "from-emerald-600 to-emerald-800",
      badge: null
    },
    {
      title: "Depósito y Almacenaje",
      description: "Servicios de almacenamiento seguro con gestión informatizada e inventario en tiempo real",
      icon: MapPin,
      color: "from-cyan-600 to-cyan-800", 
      badge: "Especializado"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              60+ años de experiencia
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 sm:mb-6 leading-tight text-white px-2">
              Alpha Transportes
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-white px-4">
              Conectando Córdoba con todo el Litoral Argentino desde 1964. 
              <br className="hidden sm:block" />
              <span className="font-semibold">Tu socio confiable en logística y transporte.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 mb-16 sm:mb-20">
              <a href="/contacto" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Cotizar Envío Ahora
                </Button>
              </a>
              <a href="/servicios" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Ver Servicios
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="absolute bottom-4 sm:bottom-10 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-6 md:grid-cols-4">
              {[
                { number: "60+", label: "Años de Experiencia", icon: Award },
                { number: "7", label: "Provincias Cubiertas", icon: MapPin },
                { number: "4", label: "Sucursales", icon: Shield },
                { number: "100+", label: "Destinos", icon: TrendingUp }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                    <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                      <CardContent className="p-2 sm:p-4 text-center">
                        <IconComponent className="w-3 h-3 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-white" />
                        <div className="text-sm sm:text-2xl font-bold text-white">{stat.number}</div>
                        <div className="text-xs leading-tight">{stat.label}</div>
                      </CardContent>
                    </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Servicios Premium
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Servicios Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Más de 60 años de experiencia nos respaldan como líderes en logística del Litoral Argentino
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {serviciosDestacados.map((servicio, index) => {
              const IconComponent = servicio.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      {servicio.badge && (
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                          servicio.badge === "Popular" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                        }`}>
                          {servicio.badge}
                        </div>
                      )}
                      <div className={`w-20 h-20 bg-gradient-to-br ${servicio.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-800 mb-4">{servicio.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{servicio.description}</p>
                      <a href="/servicios" className="flex items-center justify-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300 hover:text-blue-800">
                        <span>Saber más</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <a href="/servicios">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                Ver Todos los Servicios
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Nuestras Instalaciones */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Ubicación Estratégica
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modernas instalaciones logísticas ubicadas estratégicamente para conectar todo el Litoral Argentino
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/3c4417d8-3ceb-438e-8164-360073b85a03.png" 
              alt="Vista aérea de las instalaciones de Alpha Transportes en Córdoba - Avenida Piero Astori y Ruta Nacional 19" 
              className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestro centro logístico principal se encuentra en una ubicación privilegiada sobre la 
              <strong className="text-blue-700"> Avenida Piero Astori</strong> y con acceso directo a la 
              <strong className="text-blue-700"> Ruta Nacional 19</strong>, lo que nos permite optimizar 
              tiempos de carga y distribución hacia todo el país.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Somos pioneros en el transporte del Litoral con una trayectoria incomparable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Experiencia</h3>
              <p className="text-muted-foreground">60+ años siendo pioneros en el Litoral Argentino</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Confiabilidad</h3>
              <p className="text-muted-foreground">Seguridad garantizada en cada envío</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Puntualidad</h3>
              <p className="text-muted-foreground">Entregas en tiempo y forma</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">Atención Personal</h3>
              <p className="text-muted-foreground">Atendemos tanto grandes como pequeños clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary p-12 rounded-2xl text-primary-foreground text-center">
            <h2 className="text-4xl font-bold mb-4">¿Necesitas Transportar Algo?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Solicita tu cotización sin compromiso. Tenemos la solución perfecta para tus necesidades logísticas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto">
                <Button size="lg" className="bg-white text-primary hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Solicitar Cotización
                </Button>
              </a>
              <a href="/quienes-somos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 bg-white/20 backdrop-blur-sm">
                  Conocer Nuestra Historia
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Alpha Transportes</h3>
              <p className="mb-4 opacity-90">
                Conectando Córdoba con todo el Litoral Argentino desde 1964.
              </p>
              <div className="flex gap-4">
                <Instagram 
                  className="w-6 h-6 cursor-pointer hover:text-accent transition-colors" 
                  onClick={() => window.open('https://www.instagram.com/alphatransportes64?igsh=MWp1aXJmNTFibnJ1Mw==', '_blank')}
                />
                <MessageCircle 
                  className="w-6 h-6 cursor-pointer hover:text-accent transition-colors"
                  onClick={() => window.open('https://wa.me/5493515738046', '_blank')}
                />
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <a href="/servicios" className="block opacity-90 hover:opacity-100 hover:text-accent transition-colors">Servicios</a>
                <a href="/sucursales" className="block opacity-90 hover:opacity-100 hover:text-accent transition-colors">Sucursales</a>
                <a href="/destinos" className="block opacity-90 hover:opacity-100 hover:text-accent transition-colors">Destinos</a>
                <a href="/contacto" className="block opacity-90 hover:opacity-100 hover:text-accent transition-colors">Contacto</a>
                <a href="/quienes-somos" className="block opacity-90 hover:opacity-100 hover:text-accent transition-colors">Quiénes Somos</a>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <div className="space-y-2">
                <div className="opacity-90">Cargas Generales</div>
                <div className="opacity-90">Mudanzas</div>
                <div className="opacity-90">Maquinaria</div>
                <div className="opacity-90">Depósito</div>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <div className="space-y-2">
                <div className="opacity-90">Av Piero Astori 1300</div>
                <div className="opacity-90">+54 351 573-8046</div>
                <div className="opacity-90">info@alphatransportes.com.ar</div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-90">
            <p>&copy; 2024 Alpha Transportes. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;