import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Target, 
  Truck, 
  Calendar,
  Building,
  Globe,
  Shield,
  Clock,
  CheckCircle,
  MapPin,
  Star,
  Zap
} from "lucide-react";
import sedePrincipal from "/lovable-uploads/3d0ea147-1823-4da8-a1cf-56d17441b652.png";

const QuienesSomos = () => {
  const hitos = [
    {
      año: "1964",
      titulo: "Fundación de Alpha Transportes",
      descripcion: "Inicio de operaciones cuando no existían rutas pavimentadas, puentes ni túneles en la zona del Litoral.",
      color: "bg-gradient-primary"
    },
    {
      año: "1980-1990",
      titulo: "Expansión Regional",
      descripcion: "Establecimiento de las primeras rutas regulares y construcción de depósitos en puntos estratégicos.",
      color: "bg-success"
    },
    {
      año: "1960-1969",
      titulo: "Túnel Subfluvial Hernandarias",
      descripcion: "Participación en el transporte de materiales para la construcción del túnel subfluvial.",
      color: "bg-info"
    },
    {
      año: "2000",
      titulo: "Primera Red de Supermercados Libertad",
      descripcion: "Organización del primer servicio de logística para la cadena de supermercados Libertad.",
      color: "bg-warning"
    },
    {
      año: "2005",
      titulo: "Modernización Tecnológica",
      descripcion: "Incorporación de internet y sistemas de seguimiento para mejorar la comunicación con clientes.",
      color: "bg-gradient-accent"
    },
    {
      año: "2010",
      titulo: "Mudanzas Corporativas Telecom",
      descripcion: "Realización de mudanzas corporativas completas (edificios enteros) para Telecom Argentina.",
      color: "bg-gradient-secondary"
    },
    {
      año: "2015",
      titulo: "Proyecto Educativo Nacional",
      descripcion: "Distribución de laboratorios de ciencias de Prodymes a 630 escuelas de todo el país.",
      color: "bg-accent"
    },
    {
      año: "2020-2024",
      titulo: "Líder en Logística Digital - En Proceso",
      descripcion: "Implementación de sistemas de rastreo en tiempo real y plataformas digitales avanzadas.",
      color: "bg-gradient-hero"
    }
  ];

  const valores = [
    {
      icon: Shield,
      titulo: "Confiabilidad",
      descripcion: "Más de 60 años cumpliendo con nuestros compromisos y garantizando la seguridad de cada envío.",
      color: "bg-success",
      shadowColor: "shadow-success"
    },
    {
      icon: Users,
      titulo: "Experiencia",
      descripcion: "Tres generaciones de experiencia acumulada en logística y transporte del Litoral Argentino.",
      color: "bg-gradient-primary",
      shadowColor: "shadow-glow"
    },
    {
      icon: Target,
      titulo: "Precisión",
      descripcion: "Sistemas de seguimiento y control que aseguran entregas puntuales y mercadería en perfecto estado.",
      color: "bg-info",
      shadowColor: "shadow-elegant"
    },
    {
      icon: Clock,
      titulo: "Disponibilidad",
      descripción: "Operaciones 24/7 con respuesta inmediata a las necesidades de nuestros clientes.",
      color: "bg-warning",
      shadowColor: "shadow-warning"
    },
    {
      icon: Globe,
      titulo: "Alcance",
      descripcion: "Red de cobertura que conecta todo el Litoral con el resto del país a través de socios estratégicos.",
      color: "bg-gradient-secondary",
      shadowColor: "shadow-success"
    },
    {
      icon: Award,
      titulo: "Calidad",
      descripcion: "Estándares de calidad certificados y mejora continua en todos nuestros procesos.",
      color: "bg-gradient-accent",
      shadowColor: "shadow-warning"
    }
  ];

  const logros = [
    "Pioneros en el transporte del Litoral Argentino",
    "Más de 10,000 clientes satisfechos en 60 años",
    "Participación en obras de infraestructura nacional",
    "Red logística propia con 4 sucursales estratégicas",
    "Centro logístico de 15,000m² con tecnología avanzada",
    "Alianzas con más de 50 transportes especializados",
    "Servicios a grandes corporaciones y PYMES",
    "Cobertura completa del noreste argentino"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <WhatsAppFloat />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Nuestra Historia
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Quiénes Somos
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Somos una empresa familiar que desde 1964 conecta Córdoba con todo el Litoral Argentino. 
              Tres generaciones de experiencia nos respaldan como líderes en logística y transporte regional.
            </p>
          </div>

          {/* Historia con imagen */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <Card className="overflow-hidden shadow-elegant">
                  <div className="relative">
                    <img 
                      src={sedePrincipal} 
                      alt="Centro Logístico Alpha Transportes" 
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-primary/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium bg-black/50 px-3 py-1 rounded">
                        Centro Logístico - Córdoba
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="border-2 border-accent/20">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-primary">Un Poco de Historia</h2>
                        <p className="text-accent font-medium">60 años conectando el Litoral</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p className="text-lg">
                        Fundada en 1964, Alpha Transportes comenzó a prestar servicios de transporte entre Córdoba y el Litoral Argentino 
                        cuando no existían rutas pavimentadas, puentes ni mucho menos túneles para transitar la zona atendida.
                      </p>
                      
                      <p className="text-lg">
                        <strong className="text-primary">Fuimos los pioneros</strong> y, tres generaciones después, la empresa continúa prestando el servicio más 
                        estable y extendido de la región.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Modern Timeline */}
            <h3 className="text-3xl font-bold text-primary text-center mb-12">Hitos Importantes</h3>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-30"></div>
              
              <div className="space-y-12">
                {hitos.map((hito, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-8 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-16 h-16 ${hito.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-white group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                      >
                        {hito.año}
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className="flex-1">
                      <Card className="hover:shadow-xl border border-gray-100 group-hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
                        <CardContent className="p-8">
                          {/* Background accent */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full transition-all duration-300 group-hover:w-32 group-hover:h-32"></div>
                          
                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-3 h-3 ${hito.color} rounded-full`}></div>
                              <span className="text-sm font-semibold text-primary uppercase tracking-wider">{hito.año}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                              {hito.titulo}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                              {hito.descripcion}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* La Empresa Hoy */}
          <div className="mb-20">
            <Card>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Texto a la izquierda */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Building className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-primary">La Empresa Hoy</h2>
                        <p className="text-muted-foreground">Líderes en innovación logística</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p className="text-lg">
                        El aumento del volumen de mercadería, y las exigencias cada vez mayores de los clientes sobre la 
                        calidad del servicio nos impulsaron a crear una red de depósitos propios en los puntos de cruce 
                        de mayor tráfico de la región.
                      </p>
                      
                      <p className="text-lg">
                        Actualmente contamos con depósitos propios en Córdoba, Santa Fe, Resistencia y Posadas, todos 
                        vinculados con las posibilidades que ofrece la tecnología actual (teléfono, handies, fax e internet).
                      </p>
                      
                      <p className="text-lg">
                        La incorporación de internet en nuestra relación con los clientes nos permite sistematizar y 
                        documentar sus requerimientos, disminuyendo considerablemente la posibilidad de malos entendidos, 
                        razón por la cual es nuestro medio de comunicación preferido.
                      </p>
                      
                      <p className="text-lg">
                        Está en desarrollo una función de seguimiento de cargas que permitirá conocer a remitentes y 
                        consignatarios el estado de su mercadería en las distintas fases de su tránsito a través de este mismo sitio web.
                      </p>
                    </div>
                  </div>

                  {/* Imagen a la derecha */}
                  <div>
                    <Card className="overflow-hidden shadow-elegant">
                      <div className="relative">
                        <img 
                          src="/lovable-uploads/c261fd00-8b66-4782-9754-3d3c75e304f9.png" 
                          alt="Vista aérea del Centro Logístico Alpha Transportes" 
                          className="w-full h-96 object-cover object-center"
                          style={{ imageRendering: 'crisp-edges' }}
                        />
                        <div className="absolute inset-0 bg-gradient-primary/10"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm font-medium bg-black/60 px-3 py-1 rounded">
                            Vista Aérea - Centro Logístico Córdoba
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Valores */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valores.map((valor, index) => {
                const IconComponent = valor.icon;
                return (
                  <Card key={index} className={`hover:${valor.shadowColor} transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}>
                    <CardContent className="p-6 relative">
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-10 transform rotate-12 translate-x-4 -translate-y-4">
                        <div className={`w-full h-full ${valor.color} rounded-xl`}></div>
                      </div>
                      <div className="flex items-center gap-3 mb-4 relative z-10">
                        <div className={`w-12 h-12 ${valor.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-primary">{valor.titulo}</h3>
                      </div>
                      <p className="text-muted-foreground relative z-10">{valor.descripcion}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Logros */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Nuestros Logros</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {logros.map((logro, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{logro}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">60+</div>
              <div className="text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10K+</div>
              <div className="text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">4</div>
              <div className="text-muted-foreground">Sucursales Propias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">7</div>
              <div className="text-muted-foreground">Provincias Cubiertas</div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-hero p-8 rounded-2xl text-white text-center shadow-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Star className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Confiá en Nuestra Experiencia</h2>
                <Star className="w-8 h-8" />
              </div>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Tres generaciones de experiencia nos respaldan. Descubrí por qué miles de clientes confían en Alpha Transportes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/servicios" 
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Conocer Servicios
                </a>
                <a 
                  href="/contacto" 
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  <Users className="w-5 h-5" />
                  Contactar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
