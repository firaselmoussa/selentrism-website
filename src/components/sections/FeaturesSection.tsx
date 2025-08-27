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

const roleFeatures = {
  regular: [
    {
      icon: Workflow,
      title: "Simple Automation",
      description: "Create basic workflows to automate your posting schedule across platforms."
    },
    {
      icon: Calendar,
      title: "Content Scheduling",
      description: "Plan and schedule your content in advance with intelligent timing optimization."
    },
    {
      icon: Users,
      title: "Engagement Boost",
      description: "Request authentic engagement from the community to increase your visibility."
    },
    {
      icon: Shield,
      title: "Wallet Management",
      description: "Simple deposit and withdrawal system for earning through participation."
    }
  ],
  influencer: [
    {
      icon: DollarSign,
      title: "Monetize Your Following",
      description: "Allow brands to advertise on your accounts and earn passive revenue."
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Deep insights into performance, revenue optimization, and growth tracking."
    },
    {
      icon: Zap,
      title: "AI Content Generation",
      description: "Create engaging content automatically that matches your brand voice."
    },
    {
      icon: Target,
      title: "Multi-Platform Sync",
      description: "Manage all your social accounts from one unified dashboard."
    }
  ],
  agency: [
    {
      icon: Workflow,
      title: "Client Management",
      description: "Manage multiple client accounts with advanced workflow automation."
    },
    {
      icon: DollarSign,
      title: "Revenue Optimization",
      description: "Maximize ROI across all client campaigns with intelligent ad placement."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Assign roles and manage team access across client projects."
    },
    {
      icon: TrendingUp,
      title: "White-label Reports",
      description: "Generate professional reports and analytics for your clients."
    }
  ]
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Features & Benefits 
            <span className="gradient-text"> by Role</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions for every type of user - from individual creators to large agencies
          </p>
        </div>
        
        {/* Regular Users */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">For Regular Users</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleFeatures.regular.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass hover:glow transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                      <Icon className="h-6 w-6 text-blue-400" />
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

        {/* Influencers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">For Influencers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleFeatures.influencer.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass hover:glow transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                      <Icon className="h-6 w-6 text-purple-400" />
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

        {/* Agencies */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">For Agencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleFeatures.agency.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass hover:glow transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                      <Icon className="h-6 w-6 text-emerald-400" />
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
      </div>
    </section>
  );
};

export default FeaturesSection;