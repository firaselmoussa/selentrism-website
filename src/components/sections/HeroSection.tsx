import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary/50 rounded-full animate-bounce"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolutionize Your
            <span className="gradient-text"> Digital Presence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A fully automated platform that empowers influencers, corporations, and individuals to streamline their social media management while unlocking new revenue opportunities through intelligent automation and engagement optimization.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Link to="/register">
              <Button size="lg" className="glow hover:glow-intense transition-all duration-300 group">
                Start Automating
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold gradient-text">500K+</div>
              <div className="text-sm text-muted-foreground">Posts Automated</div>
            </div>
            
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold gradient-text">$2.5M+</div>
              <div className="text-sm text-muted-foreground">Revenue Generated</div>
            </div>
            
            <div className="glass p-6 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">AI</span>
                </div>
              </div>
              <div className="text-2xl font-bold gradient-text">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;