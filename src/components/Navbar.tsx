import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import alphaLogo from "/lovable-uploads/7c953184-319d-473d-aecd-2339f9273b14.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Servicios", href: "/servicios" },
    { name: "Destinos", href: "/destinos" },
    { name: "Sucursales", href: "/sucursales" },
    { name: "Centro Logístico", href: "/centro-logistico" },
    { name: "Contacto", href: "/contacto" },
    { name: "Quienes Somos", href: "/quienes-somos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToPage = (href: string) => {
    window.location.href = href;
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={alphaLogo} alt="Alpha Transportes" className="h-16 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a href="/contacto">
              <Button variant="default" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Cotizar Envío
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background rounded-lg shadow-elegant">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-accent hover:bg-muted transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a href="/contacto" className="block">
                <Button variant="default" className="w-full bg-gradient-primary">
                  Cotizar Envío
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;