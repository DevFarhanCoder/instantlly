import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4fd2c3a083aa4c03aa88864cf4e2b13f%2Fed7e862f71ad4ca2b2f5beac2ae5fb37?format=webp&width=800"
              alt="Instantlly Logo"
              className="w-12 h-12 rounded-lg"
            />
              <span className="text-2xl font-bold text-gradient">Instantlly</span>
            </div>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Who We Sell, We Grow Your Brand. Your trusted partner for marketing, branding & pan-India distribution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg glass border-white/10 flex items-center justify-center hover:border-primary/50 transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass border-white/10 flex items-center justify-center hover:border-primary/50 transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass border-white/10 flex items-center justify-center hover:border-primary/50 transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass border-white/10 flex items-center justify-center hover:border-primary/50 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services#digital-marketing" className="text-foreground/80 hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services#branding" className="text-foreground/80 hover:text-primary transition-colors">Branding & Creative</Link></li>
              <li><Link to="/services#distribution" className="text-foreground/80 hover:text-primary transition-colors">Channel Distribution</Link></li>
              <li><Link to="/services#offline-marketing" className="text-foreground/80 hover:text-primary transition-colors">Offline Marketing</Link></li>
              <li><Link to="/services#lead-generation" className="text-foreground/80 hover:text-primary transition-colors">Lead Generation</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-6">Industries</h3>
            <ul className="space-y-3">
              <li><Link to="/industries#real-estate" className="text-foreground/80 hover:text-primary transition-colors">Real Estate</Link></li>
              <li><Link to="/industries#fmcg-retail" className="text-foreground/80 hover:text-primary transition-colors">FMCG & Retail</Link></li>
              <li><Link to="/industries#healthcare" className="text-foreground/80 hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link to="/industries#d2c-startups" className="text-foreground/80 hover:text-primary transition-colors">D2C Startups</Link></li>
              <li><Link to="/industries#education" className="text-foreground/80 hover:text-primary transition-colors">Education</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@instantlly.com" className="text-foreground/80 hover:text-primary transition-colors">
                  hello@instantlly.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+919XXXXXXXXX" className="text-foreground/80 hover:text-primary transition-colors">
                  +91 9XXXX XXXXX
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Instantlly. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-foreground/60 hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-foreground/60 hover:text-primary transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
