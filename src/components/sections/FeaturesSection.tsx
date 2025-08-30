import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Workflow, 
  DollarSign, 
  Users, 
  Calendar, 
  TrendingUp, 
  Shield,
  Zap,
  Target,
  Check,
  X
} from "lucide-react";

const featureTable = [
  {
    icon: Workflow,
    name: "Workflow Automation",
    regular: {
      available: true,
      description: "Create basic workflows to automate content generation & posting schedule across platforms. Plan and schedule your content in advance with intelligent timing optimization."
    },
    influencer: {
      available: true,
      description: "Build advanced custom applications using drag-and-drop functionality. Create complex automation chains like generate_content → analyze_performance → optimize_posting."
    },
    agency: {
      available: true,
      description: "Manage multiple client accounts with advanced workflow automation. Create sophisticated automation chains for multiple clients simultaneously."
    }
  },
  {
    icon: TrendingUp,
    name: "Analytics Dashboard",
    regular: {
      available: false,
      description: "Basic analytics not included in regular plan."
    },
    influencer: {
      available: true,
      description: "Deep insights into performance, revenue optimization, and growth tracking. Advanced metrics for content optimization and audience analysis."
    },
    agency: {
      available: true,
      description: "Generate professional white-label reports and analytics for your clients. Comprehensive dashboard for managing multiple client metrics."
    }
  },
  {
    icon: Users,
    name: "Team Management",
    regular: {
      available: false,
      description: "Team management features not available for regular users."
    },
    influencer: {
      available: false,
      description: "Individual influencer accounts don't include team management features."
    },
    agency: {
      available: true,
      description: "Assign roles and manage team access across client projects. Full collaboration tools for agency teams."
    }
  },
  {
    icon: DollarSign,
    name: "Paid Promotions",
    regular: {
      available: true,
      description: "Monetize your accounts by allowing advertisers to place ads. Promote your content on other users' accounts. Participate in engagement campaigns for compensation."
    },
    influencer: {
      available: true,
      description: "Allow brands to advertise on your accounts and earn passive revenue. Advanced monetization options with brand partnership tools."
    },
    agency: {
      available: true,
      description: "Maximize ROI across all client campaigns with intelligent ad placement. Advanced revenue optimization tools for client accounts."
    }
  },
  {
    icon: Users,
    name: "Engagement Optimization",
    regular: {
      available: true,
      description: "Request engagement boosts for increased visibility or participate in others' campaigns. Earn by enabling automated liking, sharing, or commenting on sponsored content."
    },
    influencer: {
      available: true,
      description: "Advanced engagement strategies with AI-generated authentic interactions. Premium engagement boost options for maximum visibility."
    },
    agency: {
      available: true,
      description: "Comprehensive engagement management across all client accounts. Advanced targeting and engagement optimization tools."
    }
  },
  {
    icon: Calendar,
    name: "Intelligent Scheduling",
    regular: {
      available: true,
      description: "Schedule workflows to run automatically at defined intervals. Basic scheduling with optimal timing suggestions."
    },
    influencer: {
      available: true,
      description: "Advanced scheduling with AI-powered optimal timing analysis. Cross-platform synchronization and content calendar management."
    },
    agency: {
      available: true,
      description: "Enterprise-level scheduling for multiple client accounts. Advanced campaign timing and cross-client coordination."
    }
  },
  {
    icon: Shield,
    name: "Integrated Wallet",
    regular: {
      available: true,
      description: "Simple deposit and withdrawal system for earning through participation. Basic transaction history and balance tracking."
    },
    influencer: {
      available: true,
      description: "Complete financial management with detailed revenue tracking. Advanced analytics for income optimization and tax reporting."
    },
    agency: {
      available: true,
      description: "Enterprise wallet management with client billing integration. Advanced financial reporting and multi-account management."
    }
  },
  {
    icon: Zap,
    name: "AI-Generated Content",
    regular: {
      available: true,
      description: "Basic AI content generation for comments and simple posts. Standard quality with limited customization options."
    },
    influencer: {
      available: true,
      description: "Advanced AI creates engaging content that matches your brand voice. Premium content generation with style consistency and audience targeting."
    },
    agency: {
      available: true,
      description: "Enterprise AI content generation for multiple client brands. Advanced customization and brand voice consistency across all accounts."
    }
  },
  {
    icon: Target,
    name: "Multi-Platform Integration",
    regular: {
      available: true,
      description: "Connect and manage basic social media accounts across popular platforms. Standard integration with major platforms."
    },
    influencer: {
      available: true,
      description: "Manage all your social accounts from one unified dashboard. Premium integrations with advanced cross-platform analytics."
    },
    agency: {
      available: true,
      description: "Enterprise-level multi-platform management for unlimited client accounts. Advanced API integrations and custom platform support."
    }
  }
];

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
        
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-6 p-4 glass rounded-lg">
              <div className="font-bold text-lg">Feature</div>
              <div className="font-bold text-lg text-center gradient-text">Regular</div>
              <div className="font-bold text-lg text-center gradient-text">Influencer</div>
              <div className="font-bold text-lg text-center gradient-text">Agency</div>
            </div>
            
            {/* Feature Rows */}
            <Accordion type="multiple" className="space-y-4">
              {featureTable.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <AccordionItem key={index} value={`feature-${index}`} className="glass rounded-lg overflow-hidden">
                    <AccordionTrigger className="p-4 hover:no-underline hover:bg-muted/20">
                      <div className="grid grid-cols-4 gap-4 w-full items-center">
                        <div className="flex items-center gap-3 text-left">
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-semibold">{feature.name}</span>
                        </div>
                        <div className="flex justify-center">
                          {feature.regular.available ? (
                            <Check className="h-5 w-5 text-green-400" />
                          ) : (
                            <X className="h-5 w-5 text-red-400" />
                          )}
                        </div>
                        <div className="flex justify-center">
                          {feature.influencer.available ? (
                            <Check className="h-5 w-5 text-green-400" />
                          ) : (
                            <X className="h-5 w-5 text-red-400" />
                          )}
                        </div>
                        <div className="flex justify-center">
                          {feature.agency.available ? (
                            <Check className="h-5 w-5 text-green-400" />
                          ) : (
                            <X className="h-5 w-5 text-red-400" />
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <Card className={`glass ${!feature.regular.available ? 'opacity-60' : ''}`}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-blue-400">Regular User</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <CardDescription className="text-sm">
                              {feature.regular.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                        
                        <Card className={`glass ${!feature.influencer.available ? 'opacity-60' : ''}`}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-purple-400">Influencer</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <CardDescription className="text-sm">
                              {feature.influencer.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                        
                        <Card className={`glass ${!feature.agency.available ? 'opacity-60' : ''}`}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-emerald-400">Agency</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <CardDescription className="text-sm">
                              {feature.agency.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;