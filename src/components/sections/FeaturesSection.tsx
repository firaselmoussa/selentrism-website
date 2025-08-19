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
    title: "Workflow Automation",
    description: "Build custom applications using drag-and-drop functionality. Create seamless automation chains like generate_content → post_on_instagram."
  },
  {
    icon: DollarSign,
    title: "Advertisement Management",
    description: "Enable others to post ads on your accounts or select other users' accounts to promote your content. Full control with enable/disable options."
  },
  {
    icon: Users,
    title: "Engagement Optimization",
    description: "Request engagement boosts for increased visibility or participate in others' campaigns for compensation, ensuring authentic interactions."
  },
  {
    icon: Calendar,
    title: "Intelligent Scheduling",
    description: "Schedule workflows to run automatically at defined intervals. Set up campaigns and let the system handle execution seamlessly."
  },
  {
    icon: TrendingUp,
    title: "Campaign Analytics",
    description: "Comprehensive campaign management with metrics tracking, pause/resume functionality, and real-time performance insights."
  },
  {
    icon: Shield,
    title: "Integrated Wallet",
    description: "Complete financial management with balance tracking, deposit/withdrawal capabilities, and transparent transaction history."
  },
  {
    icon: Zap,
    title: "AI-Generated Content",
    description: "Advanced AI creates realistic comments and content, ensuring natural engagement patterns across all interactions."
  },
  {
    icon: Target,
    title: "Multi-Platform Integration",
    description: "Connect and manage multiple social media accounts across various platforms from a unified dashboard interface."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Features for
            <span className="gradient-text"> Social Media Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A unified solution combining automation, advertising management, and engagement optimization to simplify multi-platform social media management
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