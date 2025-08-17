import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg glow flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">GP</span>
              </div>
              <span className="text-xl font-bold gradient-text">Global Presence</span>
            </div>
            <p className="text-muted-foreground">
              Automate your social media empire and generate revenue with AI-powered workflows.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product</h3>
            <div className="space-y-2">
              <Link to="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link to="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                API Docs
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Integrations
              </Link>
            </div>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2">
              <Link to="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              <Link to="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Community
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2024 Global Presence Project. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0">
              Built with ❤️ for the future of social media
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;