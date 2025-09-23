import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Users, Target, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const DemoSection = () => {
  const demoRoles = [
    {
      icon: Users,
      title: "Regular User",
      description: "Experience social media automation and monetization features",
      features: ["Ad hosting", "Integrated ads", "Engagement participation", "Wallet management"]
    },
    {
      icon: Target,
      title: "Influencer", 
      description: "Access advanced engagement and promotion tools",
      features: ["Ad placement", "Engagement boost", "Campaign analytics", "Multi-platform posting"]
    },
    {
      icon: Building2,
      title: "Agency",
      description: "Full campaign management and team coordination",
      features: ["Team management", "Campaign planning", "Client dashboards", "Advanced analytics"]
    }
  ];

  return (
    <section id="demo" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Experience the <span className="gradient-text">Future</span> of Social Media Management
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Try our interactive demo to see how Selentrism transforms your social media workflow. 
            Choose your role and explore features tailored to your needs.
          </p>
          
          <Link to="/demo" className="inline-block">
            <Button size="lg" className="glow hover:glow-intense transition-all duration-300 group mb-12">
              <Play className="mr-2 h-5 w-5" />
              Try Interactive Demo
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {demoRoles.map((role, index) => {
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

export default DemoSection;