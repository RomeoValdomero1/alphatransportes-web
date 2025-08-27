import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Star, Zap } from "lucide-react";
import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    provinciaOrigen: '',
    ciudadOrigen: '',
    provinciaDestino: '',
    ciudadDestino: '',
    mensaje: ''
  });

  const provinciasArgentinas = [
    "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", 
    "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", 
    "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", 
    "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tucumán", "Tierra del Fuego"
  ];

  const sucursales = [
    {
      city: "Córdoba",
      address: "Av Piero Astori 1300",
      phone: "(0351) 573 8046 - (0351) 573 8047 - (0351) 3147 077",
      email: "cordoba@alphatransportes.com.ar",
      horarios: "Lun a Vie: 7:00-19:00 "
    },
    {
      city: "Santa Fe",
      address: "Av Gorriti 3198",
      phone: "(0351) 573 8047",
      email: "",
      horarios: "Lun a Vie: 8:00-17:00 | Sáb: 8:00-12:00"
    },
    {
      city: "Resistencia",
      address: "Av Mac Lean 525",
      phone: "(0351) 318 2019",
      email: "alpharesistencia64@gmail.com",
      horarios: "Lun a Vie: 8:00 - 12:00hs / 16:00 - 20:00hs | Sáb: 8:00-12:00"
    },
    {
      city: "Posadas",
      address: "Av Mariano Moreno 2364",
      phone: "+54 351 573-8049",
      email: "alpha.posadas@gmail.com",
      horarios: "Lun a Vie: 8:00-12:00 / 15:00 - 19:00hs"
    }
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatear el mensaje para WhatsApp
    const mensaje = `*NUEVA CONSULTA DE TRANSPORTE*

*Datos del Cliente:*
👤 Nombre: ${formData.nombre}
🏢 Empresa: ${formData.empresa || 'No especificada'}
📞 Teléfono: ${formData.telefono}
📧 Email: ${formData.email}

*Detalles del Envío:*
📍 Origen: ${formData.ciudadOrigen}, ${formData.provinciaOrigen}
🎯 Destino: ${formData.ciudadDestino}, ${formData.provinciaDestino}

*Mensaje:*
${formData.mensaje}

¡Hola! Me gustaría recibir una cotización para este servicio de transporte.`;

    // Redireccionar a WhatsApp
    const url = `https://wa.me/5493515738046?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <WhatsAppFloat />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              Atención 24/7
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
              Contacto
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Solicita tu cotización, consulta sobre nuestros servicios 
              o ponte en contacto con cualquiera de nuestras sucursales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Solicitar Cotización</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input 
                          id="nombre" 
                          placeholder="Tu nombre completo" 
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="empresa">Empresa/Institución</Label>
                        <Input 
                          id="empresa" 
                          placeholder="Nombre de tu empresa (opcional)" 
                          value={formData.empresa}
                          onChange={(e) => handleInputChange('empresa', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="telefono">Teléfono/Cel *</Label>
                        <Input 
                          id="telefono" 
                          placeholder="Tu número de teléfono" 
                          value={formData.telefono}
                          onChange={(e) => handleInputChange('telefono', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="tu@email.com" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Origen</Label>
                        <div className="space-y-2">
                          <Select value={formData.provinciaOrigen} onValueChange={(value) => handleInputChange('provinciaOrigen', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar provincia" />
                            </SelectTrigger>
                            <SelectContent>
                              {provinciasArgentinas.map((provincia) => (
                                <SelectItem key={provincia} value={provincia}>
                                  {provincia}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Input 
                            placeholder="Ciudad de origen" 
                            value={formData.ciudadOrigen}
                            onChange={(e) => handleInputChange('ciudadOrigen', e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <Label>Destino</Label>
                        <div className="space-y-2">
                          <Select value={formData.provinciaDestino} onValueChange={(value) => handleInputChange('provinciaDestino', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar provincia" />
                            </SelectTrigger>
                            <SelectContent>
                              {provinciasArgentinas.map((provincia) => (
                                <SelectItem key={provincia} value={provincia}>
                                  {provincia}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Input 
                            placeholder="Ciudad de destino" 
                            value={formData.ciudadDestino}
                            onChange={(e) => handleInputChange('ciudadDestino', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="mensaje">Mensaje</Label>
                      <Textarea 
                        id="mensaje" 
                        placeholder="Describe tu consulta, tipo de carga, fechas estimadas, etc..."
                        rows={4}
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange('mensaje', e.target.value)}
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      Enviar Consulta
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-8">
              {/* Información General */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Información General</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium">Teléfono Principal</p>
                        <p className="text-muted-foreground"> +54 351-5738-046 (Administración)  <br />
                          +54 ⁠351-5738-047 (Tráfico)  <br />
                          ⁠+54 3513147077 (Distribución)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium">Email General</p>
                        <p className="text-muted-foreground">info@alphatransportes.com.ar</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-muted-foreground">+54 351 573-8046</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium">Horarios de Atención</p>
                        <p className="text-muted-foreground">Lun a Vie: 7:00-19:00hs</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sucursales */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Nuestras Sucursales</h3>
                <div className="space-y-4">
                  {sucursales.map((sucursal, index) => (
                    <Card key={index} className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-primary mb-2">{sucursal.city}</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">{sucursal.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">{sucursal.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">{sucursal.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">{sucursal.horarios}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-lg font-bold mb-2">¿Necesitas respuesta inmediata?</h3>
                  <p className="mb-4 opacity-90">Contactanos por WhatsApp para consultas urgentes</p>
                  <Button 
                    className="bg-white text-primary hover:bg-gray-100"
                    onClick={() => window.open('https://wa.me/5493515738046', '_blank')}
                  >
                    Escribir por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;