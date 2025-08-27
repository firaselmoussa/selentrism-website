import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary/50 rounded-full animate-bounce"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Clear headline & subheadline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automate Your Social Media,
            <span className="gradient-text"> Maximize Your Revenue</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The only platform you need to streamline multi-platform social media management while unlocking new revenue streams through intelligent automation.
          </p>
          
          {/* Call-to-action */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <a 
              href="#survey" 
              className="inline-block"
            >
              <Button size="lg" className="glow hover:glow-intense transition-all duration-300 group">
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
                Learn More
              </Button>
            </a>
          </div>
          
          {/* Social proof - Platform logos */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-6">Trusted by influencers & agencies</p>
            <div className="flex items-center justify-center gap-8 flex-wrap opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">IG</span>
                </div>
                <span className="text-sm">Instagram</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">FB</span>
                </div>
                <span className="text-sm">Facebook</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">TT</span>
                </div>
                <span className="text-sm">TikTok</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">X</span>
                </div>
                <span className="text-sm">Twitter/X</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">YT</span>
                </div>
                <span className="text-sm">YouTube</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">TH</span>
                </div>
                <span className="text-sm">Threads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;