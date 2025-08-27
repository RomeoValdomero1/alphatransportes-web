
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const whatsappNumber = "5493515738046"; // Número actualizado
  const defaultMessage = "Hola! Me gustaría solicitar información sobre sus servicios de transporte.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl p-4 w-80 border border-green-200 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Alpha Transportes</h4>
                <p className="text-sm text-green-600">En línea</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            ¡Hola! 👋 ¿Necesitas ayuda con nuestros servicios de transporte? Escríbenos por WhatsApp.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Iniciar Chat
          </Button>
        </div>
      )}
      
      <div
        className="relative group cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="absolute -inset-2 bg-green-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
