import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Workflow, 
  DollarSign, 
  Users, 
  Calendar, 
  TrendingUp, 
  Shield,
  Zap,
  Target
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Drag & Drop Workflows",
    description: "Create automated workflows with our intuitive visual editor. From content generation to posting - all automated."
  },
  {
    icon: DollarSign,
    title: "Monetize Your Accounts",
    description: "Enable ad management and let other users post on your accounts. Generate passive income from your social media presence."
  },
  {
    icon: Users,
    title: "Engagement Automation",
    description: "Request authentic engagement from real users. Increase views, likes, and comments naturally."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Schedule your campaigns and workflows to run automatically. Set it once, profit forever."
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Track performance metrics, campaign success rates, and revenue generation in real-time."
  },
  {
    icon: Shield,
    title: "Secure Wallet System",
    description: "Built-in wallet for deposits, withdrawals, and automatic payment distribution."
  },
  {
    icon: Zap,
    title: "AI-Powered Content",
    description: "Generate high-quality content automatically using advanced AI models tailored to your niche."
  },
  {
    icon: Target,
    title: "Multi-Platform Support",
    description: "Manage Instagram, Twitter, TikTok, LinkedIn, and more from a single dashboard."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="gradient-text"> Digital Domination</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate, monetize, and scale your social media presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="glass hover:glow transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;