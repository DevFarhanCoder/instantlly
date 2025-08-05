import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (location.pathname === "/" && href.startsWith("#")) {
      e?.preventDefault();
      scrollToSection(href.slice(1));
    } else if (href === "/" && location.pathname === "/") {
      e?.preventDefault();
      scrollToTop();
    } else {
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "Home", href: "/", action: () => location.pathname === "/" ? scrollToTop() : null },
    {
      name: "About",
      href: location.pathname === "/" ? "#about" : "/#about",
      action: () =>
        location.pathname === "/" ? scrollToSection("about") : null,
    },
    {
      name: "Services",
      href: location.pathname === "/" ? "#services" : "/#services",
      action: () =>
        location.pathname === "/" ? scrollToSection("services") : null,
    },
    {
      name: "Industries",
      href: location.pathname === "/" ? "#industries" : "/#industries",
      action: () =>
        location.pathname === "/" ? scrollToSection("industries") : null,
    },
    {
      name: "Success Stories",
      href:
        location.pathname === "/" ? "#success-stories" : "/#success-stories",
      action: () =>
        location.pathname === "/" ? scrollToSection("success-stories") : null,
    },
    {
      name: "Contact",
      href: location.pathname === "/" ? "#contact" : "/#contact",
      action: () =>
        location.pathname === "/" ? scrollToSection("contact") : null,
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4fd2c3a083aa4c03aa88864cf4e2b13f%2Fed7e862f71ad4ca2b2f5beac2ae5fb37?format=webp&width=800"
              alt="Instantlly Logo"
              className="w-10 h-10 rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-gradient">Instantlly</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.action &&
              location.pathname === "/" &&
              item.name !== "Home" ? (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="relative text-sm font-medium transition-colors duration-200 group text-foreground/80 hover:text-primary"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-orange transition-all duration-200 w-0 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${
                    (item.name === "Home" && location.pathname === "/") ||
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-orange transition-all duration-200 ${
                      (item.name === "Home" && location.pathname === "/") ||
                      isActive(item.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ),
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-orange hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass text-foreground hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl overflow-hidden animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) =>
                item.action &&
                location.pathname === "/" &&
                item.name !== "Home" ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.action!();
                      setIsOpen(false);
                    }}
                    className="block py-2 text-sm font-medium transition-colors text-foreground/80 hover:text-primary w-full text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => {
                      handleNavClick(item.href, e);
                      setIsOpen(false);
                    }}
                    className={`block py-2 text-sm font-medium transition-colors ${
                      (item.name === "Home" && location.pathname === "/") ||
                      isActive(item.href)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-orange mt-4">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
