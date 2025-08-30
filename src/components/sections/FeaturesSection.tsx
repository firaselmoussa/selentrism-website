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
    description: "Build custom applications using drag-and-drop functionality to create seamless automation chains. Schedule workflows to run automatically at defined intervals, from simple content posting to complex multi-step campaigns. Create automation sequences like generate_content → analyze_performance → optimize_posting with intelligent timing and cross-platform synchronization.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: TrendingUp,
    name: "Analytics Dashboard",
    description: "Comprehensive analytics and reporting system with deep insights into performance metrics, revenue optimization, and growth tracking. Generate professional reports with detailed campaign analytics, audience insights, and ROI measurements. Advanced dashboard with real-time performance monitoring and customizable reporting tools.",
    regular: { available: false },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Users,
    name: "Team Management",
    description: "Complete team collaboration and management system with role-based access control. Assign specific permissions, manage team member access across multiple accounts and projects. Includes user role management, access logging, and collaborative workspace features for seamless team coordination.",
    regular: { available: false },
    influencer: { available: false },
    agency: { available: true }
  },
  {
    icon: DollarSign,
    name: "Paid Promotions",
    description: "Comprehensive advertising and monetization platform allowing users to place ads on other accounts and earn revenue by hosting advertisements. Includes intelligent ad placement, campaign management, revenue tracking, and automated billing systems with full control over ad types and placement strategies.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Users,
    name: "Engagement Optimization",
    description: "Advanced engagement boost system that increases content visibility through authentic community interactions. Request engagement campaigns for your content or participate in others' campaigns for compensation. Includes AI-generated realistic comments, strategic liking, sharing, and engagement timing optimization.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Calendar,
    name: "Intelligent Scheduling",
    description: "AI-powered content scheduling system that automatically optimizes posting times for maximum engagement. Schedule workflows, campaigns, and content across multiple platforms with intelligent timing analysis, audience behavior insights, and cross-platform synchronization capabilities.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Shield,
    name: "Integrated Wallet",
    description: "Complete financial management system with secure deposit/withdrawal capabilities, transaction history, and balance tracking. Includes automated billing for campaigns, revenue distribution, payment processing, and detailed financial reporting with tax documentation support.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Zap,
    name: "AI-Generated Content",
    description: "Advanced artificial intelligence system that creates realistic, engaging content tailored to specific audiences and brand voices. Generate authentic comments, posts, captions, and interactions that maintain natural engagement patterns while ensuring brand consistency and audience relevance.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Target,
    name: "Multi-Platform Integration",
    description: "Unified dashboard for managing multiple social media accounts across all major platforms including Instagram, Facebook, TikTok, Twitter/X, YouTube, and Threads. Centralized account management with cross-platform analytics, synchronized posting, and comprehensive social media workflow automation.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
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
                      <div className="mt-4">
                        <Card className="glass">
                          <CardContent className="p-4">
                            <CardDescription className="text-base">
                              {feature.description}
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