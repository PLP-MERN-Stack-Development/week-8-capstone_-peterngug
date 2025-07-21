import { Calendar, Sparkles, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Calendar className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">EventElegance</span>
            </div>
            <p className="text-background/80 text-lg leading-relaxed max-w-md mb-6">
              Creating extraordinary experiences through sophisticated event management. 
              Where every detail matters and every moment is crafted to perfection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-accent" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-background/80 hover:text-accent transition-colors">Features</a></li>
              <li><a href="#events" className="text-background/80 hover:text-accent transition-colors">Events</a></li>
              <li><a href="#pricing" className="text-background/80 hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-background/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">24/7 Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2025 EventElegance. All rights reserved. Crafted with excellence.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-background/60 text-sm">Made with</span>
            <div className="text-accent animate-pulse">♥</div>
            <span className="text-background/60 text-sm">for event creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;