
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <img 
                  src="/lovable-uploads/5f37edc5-73d7-450c-9343-d983bbd4bac4.png" 
                  alt="Blueline" 
                  className="h-12 w-auto mb-4"
                />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ihr vertrauensvoller Partner für hochwertiges Heizöl. 
                  Deutschlandweite Premium-Lieferung ab 70 Cent pro Liter.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Kontakt
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
              </h4>
              <div className="space-y-4">
                <div className="group flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1 group-hover:bg-primary/30 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-200 text-sm">Düsseldorfer Str. 10, 10719 Berlin</span>
                </div>
                
                <div className="group flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <a 
                    href="tel:+493023258380" 
                    className="text-gray-200 text-sm hover:text-primary transition-colors duration-300"
                  >
                    030 23258380
                  </a>
                </div>
                
                <div className="group flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a 
                    href="mailto:info@bl-heizoel.de" 
                    className="text-gray-200 text-sm hover:text-primary transition-colors duration-300"
                  >
                    info@bl-heizoel.de
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Service
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#preisrechner" 
                    className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
                    <span>Preisrechner</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#kontakt" 
                    className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
                    <span>Kontakt</span>
                  </a>
                </li>
                <li>
                  <Link 
                    to="/preise" 
                    className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
                    <span>Preise</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/lieferservice" 
                    className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
                    <span>Lieferbedingungen</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Rechtliches
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/impressum" 
                    className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
                    <span>Impressum</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/datenschutz" 
                    className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
                    <span>Datenschutz</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/agb" 
                    className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
                    <span>AGB</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/widerrufsrecht" 
                    className="text-gray-300 hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
                    <span>Widerrufsrecht</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between gap-6 flex-nowrap overflow-x-auto">
              <div className="flex items-center gap-6 text-gray-400 text-sm whitespace-nowrap">
                <span>© 2025 Blueline. Alle Rechte vorbehalten.</span>
                <span>Amtsgericht Charlottenburg (Berlin) HRB 251767 B | USt-ID: DE311826397</span>
              </div>
              <div className="text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10 whitespace-nowrap">
                Made with ❤️ in Germany
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
