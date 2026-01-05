import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-light tracking-brand uppercase mb-4">
              Brunch & Blom
            </h3>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Curated experiences where drinks, food, people, and music come together 
              to create moments worth savoring.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-4 text-foreground">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">
                Home
              </Link>
              <Link to="/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">
                Events
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">
                Gallery
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-4 text-foreground">
              Connect
            </h4>
            <a
              href="https://instagram.com/brunchandblom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
            >
              <Instagram size={18} />
              @brunchandblom
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <p className="text-center text-xs text-muted-foreground font-light tracking-wide">
            © {new Date().getFullYear()} Brunch & Blom. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-blue font-light tracking-wide">
            Designed by <span className="text-blue"> <a href= "https://www.webinnovationnexus.com" target='_blank'>Web Innovation Nexus</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
