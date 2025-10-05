import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Users, Target, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const MVPSection = () => {
  const mvpRoles = [
    {
      icon: Users,
      title: "Regular User",
      description: "Monetize your social presence while participating in engagement activities",
      features: ["Social media integration", "Ad hosting", "Integrated ads", "Engagement participation", "Wallet management"]
    },
    {
      icon: Target,
      title: "Influencer", 
      description: "Full suite of tools for content creators and influencers",
      features: ["All regular features", "Ad placement", "Engagement boost", "Workflow automation", "Multi-platform posting"]
    },
    {
      icon: Building2,
      title: "Agency",
      description: "Enterprise-level campaign management and analytics",
      features: ["All features", "Campaign management", "Team coordination", "Advanced analytics", "Scheduling automation"]
    }
  ];

  return (
    <section id="mvp" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Try Our <span className="gradient-text">Functional MVP</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the full power of Selentrism with our functional MVP. Explore real features with simulated data 
            across social media integration, ad management, workflow automation, and more.
          </p>
          
          <Link to="/mvp" className="inline-block">
            <Button size="lg" className="glow hover:glow-intense transition-all duration-300 group mb-12">
              <Rocket className="mr-2 h-5 w-5" />
              Launch MVP Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {mvpRoles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{role.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {role.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MVPSection;
