import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, Target, Building2, ArrowLeft, Instagram, Facebook, 
  BarChart3, Calendar, Wallet, CreditCard, Zap, Eye,
  Settings, Play, PauseCircle, RotateCcw
} from "lucide-react";
import { Link } from "react-router-dom";

type UserRole = 'regular' | 'influencer' | 'agency' | null;

const Demo = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);

  const roles = [
    {
      id: 'regular' as const,
      icon: Users,
      title: "Regular User",
      description: "Experience basic social media automation and monetization features"
    },
    {
      id: 'influencer' as const,
      icon: Target, 
      title: "Influencer",
      description: "Access advanced engagement and promotion tools for content creators"
    },
    {
      id: 'agency' as const,
      icon: Building2,
      title: "Agency",
      description: "Full campaign management and team coordination capabilities"
    }
  ];

  const getDashboardFeatures = (role: UserRole) => {
    const baseFeatures = [
      {
        id: 'social-integration',
        title: 'Social Media Integration',
        description: 'Connect and manage multiple social media accounts',
        icon: Instagram,
        available: true
      },
      {
        id: 'wallet',
        title: 'Wallet & Balance Management',
        description: 'View wallet details and transaction history',
        icon: Wallet,
        available: true
      },
      {
        id: 'financial',
        title: 'Financial Transactions',
        description: 'Deposit funds or withdraw available balance',
        icon: CreditCard,
        available: true
      }
    ];

    const roleSpecificFeatures = {
      regular: [
        {
          id: 'ad-hosting',
          title: 'Advertisement Hosting',
          description: 'Allow other users to post ads on your accounts with automated verification',
          icon: Eye,
          available: true
        },
        {
          id: 'integrated-ads',
          title: 'Integrated Ads',
          description: 'Post content with passive product integration across multiple platforms',
          icon: Zap,
          available: true
        },
        {
          id: 'engagement-participation',
          title: 'Engagement Participation',
          description: 'Earn by providing authentic engagement for other users',
          icon: BarChart3,
          available: true
        }
      ],
      influencer: [
        {
          id: 'ad-hosting',
          title: 'Advertisement Hosting',
          description: 'Enable/disable ad hosting with deletion monitoring and payment protection',
          icon: Eye,
          available: true
        },
        {
          id: 'ad-placement',
          title: 'Ad Placement',
          description: 'Select and promote ads on other users\' accounts',
          icon: Target,
          available: true
        },
        {
          id: 'integrated-ads',
          title: 'Integrated Ads',
          description: 'Multi-platform posting with automated product integration',
          icon: Zap,
          available: true
        },
        {
          id: 'workflow-automation',
          title: 'Workflow Automation',
          description: 'Build custom workflows using drag-and-drop functionality',
          icon: Settings,
          available: true
        },
        {
          id: 'workflow-scheduling',
          title: 'Workflow Scheduling',
          description: 'Schedule automated workflows at defined intervals',
          icon: Calendar,
          available: true
        },
        {
          id: 'engagement-boost',
          title: 'Engagement Boost Requests',
          description: 'Request increased visibility and authentic engagement',
          icon: BarChart3,
          available: true
        },
        {
          id: 'engagement-participation',
          title: 'Engagement Participation',
          description: 'Provide engagement services to other users for compensation',
          icon: Users,
          available: true
        }
      ],
      agency: [
        {
          id: 'ad-placement',
          title: 'Ad Placement',
          description: 'Strategic ad placement across multiple client accounts',
          icon: Target,
          available: true
        },
        {
          id: 'workflow-automation',
          title: 'Workflow Automation',
          description: 'Advanced workflow builder with team collaboration features',
          icon: Settings,
          available: true
        },
        {
          id: 'workflow-scheduling',
          title: 'Workflow Scheduling',
          description: 'Enterprise-level scheduling with team coordination',
          icon: Calendar,
          available: true
        },
        {
          id: 'engagement-boost',
          title: 'Engagement Boost Requests',
          description: 'Campaign-scale engagement management and analytics',
          icon: BarChart3,
          available: true
        },
        {
          id: 'campaign-management',
          title: 'Ad Campaign Management',
          description: 'Plan, schedule, and manage comprehensive ad campaigns',
          icon: Play,
          available: true
        }
      ]
    };

    return [...baseFeatures, ...(roleSpecificFeatures[role!] || [])];
  };

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Choose Your <span className="gradient-text">Demo Experience</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Select your role to explore features tailored to your specific needs and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <Card 
                  key={role.id}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:shadow-lg"
                  onClick={() => setSelectedRole(role.id)}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">{role.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {role.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button className="w-full group-hover:glow transition-all duration-300">
                      Start Demo
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const currentRole = roles.find(r => r.id === selectedRole)!;
  const features = getDashboardFeatures(selectedRole);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => setSelectedRole(null)}
            className="flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Change Role
          </button>
          <Badge variant="outline" className="border-primary/50">
            <currentRole.icon className="h-4 w-4 mr-2" />
            {currentRole.title} Demo
          </Badge>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">{currentRole.title}</span> Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore the features and capabilities available to {currentRole.title.toLowerCase()}s
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Instagram className="h-5 w-5 mr-2 text-pink-500" />
                    Connected Accounts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">5</div>
                  <p className="text-sm text-muted-foreground">Active social media accounts</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wallet className="h-5 w-5 mr-2 text-green-500" />
                    Balance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">$1,247.50</div>
                  <p className="text-sm text-muted-foreground">Available balance</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-blue-500" />
                    Monthly Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">$3,892</div>
                  <p className="text-sm text-muted-foreground">This month's earnings</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={feature.id} className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <IconComponent className="h-5 w-5 mr-3 text-primary" />
                        {feature.title}
                        {feature.available && (
                          <Badge variant="secondary" className="ml-auto text-xs">
                            Active
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4 mr-2" />
                          Configure
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Engagement Rate</span>
                      <span className="font-semibold">4.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Campaigns</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue Growth</span>
                      <span className="font-semibold text-green-600">+23%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Ad campaign completed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">New engagement request</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Payment processed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              This is just a preview of what Selentrism can do. Join our waitlist to be notified when we launch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
              <a 
                href="https://airtable.com/appHyeDelOzMp9CYK/pagIaOAtKsQVxTfdW/form" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="glow">Join Waitlist</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;