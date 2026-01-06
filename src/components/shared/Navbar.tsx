import { Code, Menu, X } from "lucide-react";
import { ModeToggle } from "../theme/mode-theme-toggle";
import { Button } from "../ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="#sobre-mi">Sobre Mí</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#habilidades">Habilidades</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#proyectos">Proyectos</a>
          </Button>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <ModeToggle />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-t md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="justify-start"
              >
                <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)}>
                  Sobre Mí
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="justify-start"
              >
                <a href="#habilidades" onClick={() => setIsMenuOpen(false)}>
                  Habilidades
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="justify-start"
              >
                <a href="#proyectos" onClick={() => setIsMenuOpen(false)}>
                  Proyectos
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
