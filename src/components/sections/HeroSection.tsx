import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight px-4 sm:px-0">
            <span className="gradient-text">Extend</span> Beyond Limits. <br />
            <span className="gradient-text">Monetize</span> Your Presence. <br />
            <span className="gradient-text">Automate</span> Your Digital Empire.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            The only platform you need to streamline multi-platform social media management while unlocking new revenue streams through intelligent automation.
          </p>
          
          {/* Call-to-action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4 sm:px-0">
            <a 
                  href="https://airtable.com/appHyeDelOzMp9CYK/pagIaOAtKsQVxTfdW/form" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto"
                >
                  <Button size="lg" className="glow hover:glow-intense transition-all duration-300 group w-full sm:w-auto min-h-[48px]">
                    Join Waitlist
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
            </a>
            
            <a href="#about" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary w-full sm:w-auto min-h-[48px]">
                Learn More
              </Button>
            </a>
          </div>
          
          {/* Social proof - Platform logos */}
          <div className="mb-8 px-4 sm:px-0">
            <p className="text-sm text-muted-foreground mb-6">Trusted by influencers & agencies</p>
            <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/lovable-uploads/instagram_icon.png" alt="instagram icon" className="w-5 h-5 object-contain" />
                </div>
                <span className="text-xs sm:text-sm hidden sm:inline">Instagram</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/lovable-uploads/facebook_icon.png" alt="facebook icon" className="w-5 h-5 object-contain" />
                </div>
                <span className="text-xs sm:text-sm hidden sm:inline">Facebook</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/lovable-uploads/tiktok_icon.png" alt="tiktok icon" className="w-5 h-5 object-contain" />
                </div>
                <span className="text-xs sm:text-sm hidden sm:inline">TikTok</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/lovable-uploads/twitter_x_icon.png" alt="twitter/X icon" className="w-5 h-5 object-contain" />
                </div>
                <span className="text-xs sm:text-sm hidden sm:inline">Twitter/X</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="w-8 h-6 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/lovable-uploads/youtube_icon.png" alt="youtube icon" className="w-5 h-4 object-contain" />
                </div>
                <span className="text-xs sm:text-sm hidden sm:inline">YouTube</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="/lovable-uploads/threads_icon.png" alt="threads icon" className="w-5 h-5 object-contain" />
                </div>
                <span className="text-xs sm:text-sm hidden sm:inline">Threads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;