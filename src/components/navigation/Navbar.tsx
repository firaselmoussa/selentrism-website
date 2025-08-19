import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/dc452938-0324-47e1-a9f0-d65c980cae25.png" 
            alt="Global Presence Project Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold gradient-text">Global Presence</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="glow hover:glow-intense transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;