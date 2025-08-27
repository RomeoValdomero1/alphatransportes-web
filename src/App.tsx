import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Destinos from "./pages/Destinos";
import Sucursales from "./pages/Sucursales";
import CentroLogistico from "./pages/CentroLogistico";
import Contacto from "./pages/Contacto";
import QuienesSomos from "./pages/QuienesSomos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/centro-logistico" element={<CentroLogistico />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
