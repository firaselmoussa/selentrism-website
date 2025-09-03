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
  X,
  BookMarked
} from "lucide-react";
import { focusManager } from "@tanstack/react-query";

const featureTable = [
  {
    icon: DollarSign,
    name: "Ad Hosting",
    description: "Monetize your accounts by allowing advertisers to place passive or direct ads that match your niche, vibe, and personality. Customize ad type, category, frequency, and placement (e.g., story only) to ensure alignment with your audience, brand, and content strategy.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: DollarSign,
    name: "Engagement Participation",
    description: "Earn by enabling automated liking, sharing, or commenting on sponsored content. You may customize and specify type of engagement (e.g. only liking) content type to engage with, as well as the frequency of engagement.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
  },
    {
    icon: Target,
    name: "Multi-Platform Integration",
    description: "Unified dashboard for managing multiple social media accounts across all major platforms including Instagram, Facebook, TikTok, Twitter/X, YouTube, and Threads. Centralized account management with cross-platform analytics.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Shield,
    name: "Integrated Wallet",
    description: "Complete financial management system with secure deposit/withdrawal capabilities, transaction history, and balance tracking.",
    regular: { available: true },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Target,
    name: "Ad Placement",
    description: "Promote products, services or content on other users’ accounts through passive or direct ads. Host accounts targeted and ad content is generated per account to ensure the highest authenticity, engagement, and relevance for both the audience and the host account.",
    regular: { available: false },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Users,
    name: "Engagement Request",
    description: "Advanced engagement boost system that increases content/account visibility through authentic community interactions. Includes AI-generated realistic comments, strategic liking, sharing  by real accounts and engagement timing optimization.",
    regular: { available: false },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Zap,
    name: "AI-Generated Content",
    description: "Advanced artificial intelligence system that creates realistic, engaging content tailored to specific audiences and brand voices. Generate authentic content that maintain natural engagement patterns while ensuring brand consistency and audience relevance.",
    regular: { available: false },
    influencer: { available: true },
    agency: { available: true }
  },
  {
    icon: Workflow,
    name: "Workflow Automation",
    description: "Build custom applications using drag-and-drop functionality to create seamless automation chains. Schedule workflows to run automatically at defined intervals, from simple content posting to complex multi-step campaigns.",
    regular: { available: false },
    influencer: { available: true },
    agency: { available: true }
  },
    {
    icon: Calendar,
    name: "Intelligent Scheduling",
    description: "Intelligent content scheduling system that automatically optimizes posting times for maximum engagement. Schedule workflows, campaigns, and content across multiple platforms with intelligent timing analysis, audience behavior insights, and cross-platform synchronization capabilities.",
    regular: { available: false },
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
    icon: BookMarked,
    name: "Advanced Marketing Suite",
    description: "Launch and manage full-scale targeted marketing campaigns with smart ad placement, comprehensive campaign management, revenue tracking, and automated billing. Gain complete control over ad types and strategies, and effortlessly handle multiple campaigns across unlimited clients and digital platforms.",
    regular: { available: false },
    influencer: { available: false },
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
              <div>
                <span className="font-bold text-lg text-center gradient-text">Regular</span>
               <br />
                <span className="text-xs text-muted-foreground max-w-3xl mx-auto">
                  Any social media user can join for free and start monetizing their presence.
                </span>
              </div>
              <div>
                <span className="font-bold text-lg text-center gradient-text">Influencer</span>
               <br />
                <span className="text-xs text-muted-foreground max-w-3xl mx-auto">
                  Creators with a dedicated following seeking advanced tools to engage and expand their reach.
                </span>
              </div>
              <div>
                <span className="font-bold text-lg text-center gradient-text">Agency</span>
               <br />
                <span className="text-xs text-muted-foreground max-w-3xl mx-auto">
                  Businesses or teams managing multiple clients and campaigns across platforms.
                </span>
              </div>
              
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