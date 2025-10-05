import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Users, Target, Building2, Facebook, Instagram, Twitter, Youtube, ArrowLeft, Wallet, DollarSign, BarChart3, Calendar, Zap, Bell, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

type UserRole = "regular" | "influencer" | "agency" | null;

const MVP = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [adHostingEnabled, setAdHostingEnabled] = useState(true);

  // Mock data
  const connectedAccounts = [
    { platform: "Instagram", icon: Instagram, followers: "12.5K", status: "active" },
    { platform: "Facebook", icon: Facebook, followers: "8.2K", status: "active" },
    { platform: "Twitter", icon: Twitter, followers: "5.1K", status: "active" },
    { platform: "YouTube", icon: Youtube, followers: "3.4K", status: "inactive" },
  ];

  const adPlacements = [
    { id: 1, account: "@fitness_pro", platform: "Instagram", status: "active", earnings: 45.50 },
    { id: 2, account: "@beauty_tips", platform: "Facebook", status: "active", earnings: 32.00 },
    { id: 3, account: "@tech_reviews", platform: "Twitter", status: "pending", earnings: 0 },
  ];

  const engagementRequests = [
    { id: 1, type: "Like & Comment", platform: "Instagram", reward: 2.50, status: "available" },
    { id: 2, type: "Share & Like", platform: "Facebook", reward: 3.00, status: "available" },
    { id: 3, type: "Retweet", platform: "Twitter", reward: 1.50, status: "completed" },
  ];

  const transactions = [
    { id: 1, type: "Deposit", amount: 100.00, date: "2025-01-05", status: "completed" },
    { id: 2, type: "Earning", amount: 45.50, date: "2025-01-04", status: "completed" },
    { id: 3, type: "Withdrawal", amount: -50.00, date: "2025-01-03", status: "pending" },
  ];

  const campaigns = [
    { id: 1, name: "Spring Collection Launch", budget: 5000, spent: 2340, status: "active", reach: 45000 },
    { id: 2, name: "Brand Awareness Q1", budget: 10000, spent: 8750, status: "active", reach: 120000 },
    { id: 3, name: "Product Demo Series", budget: 3000, spent: 3000, status: "completed", reach: 35000 },
  ];

  const workflows = [
    { id: 1, name: "Daily Content Pipeline", steps: "Generate → Review → Post", schedule: "Daily at 9 AM", status: "active" },
    { id: 2, name: "Engagement Response", steps: "Monitor → AI Reply → Notify", schedule: "Every 2 hours", status: "active" },
    { id: 3, name: "Weekly Analytics", steps: "Collect → Analyze → Report", schedule: "Monday 8 AM", status: "paused" },
  ];

  const RoleCard = ({ icon: Icon, title, description, role }: { icon: any, title: string, description: string, role: UserRole }) => (
    <Card 
      className="cursor-pointer hover:border-primary transition-all hover:shadow-lg"
      onClick={() => setSelectedRole(role)}
    >
      <CardHeader className="text-center">
        <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Icon className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Select Role</Button>
      </CardContent>
    </Card>
  );

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="gradient-text">Role</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select how you want to experience the MVP dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <RoleCard
              icon={Users}
              title="Regular User"
              description="Monetize your social presence and participate in engagement activities"
              role="regular"
            />
            <RoleCard
              icon={Target}
              title="Influencer"
              description="Access advanced tools for content creation and audience growth"
              role="influencer"
            />
            <RoleCard
              icon={Building2}
              title="Agency"
              description="Manage campaigns and clients with enterprise-level features"
              role="agency"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 glass sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold gradient-text">Selentrism MVP</h1>
              <Badge variant="outline" className="capitalize">{selectedRole}</Badge>
            </div>
            <Button variant="outline" onClick={() => setSelectedRole(null)}>
              Change Role
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="accounts" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            {(selectedRole === "regular" || selectedRole === "influencer") && (
              <TabsTrigger value="ad-hosting">Ad Hosting</TabsTrigger>
            )}
            {(selectedRole === "influencer" || selectedRole === "agency") && (
              <TabsTrigger value="ad-placement">Ad Placement</TabsTrigger>
            )}
            {(selectedRole === "regular" || selectedRole === "influencer") && (
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
            )}
            <TabsTrigger value="workflows">Workflows</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            {selectedRole === "agency" && (
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            )}
          </TabsList>

          {/* Social Media Integration */}
          <TabsContent value="accounts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connected Social Media Accounts</CardTitle>
                <CardDescription>Manage your connected platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {connectedAccounts.map((account, idx) => {
                    const Icon = account.icon;
                    return (
                      <Card key={idx}>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <p className="font-semibold">{account.platform}</p>
                                <p className="text-sm text-muted-foreground">{account.followers} followers</p>
                              </div>
                            </div>
                            <Badge variant={account.status === "active" ? "default" : "secondary"}>
                              {account.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <Button className="w-full mt-4">+ Connect New Platform</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ad Hosting */}
          {(selectedRole === "regular" || selectedRole === "influencer") && (
            <TabsContent value="ad-hosting" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Advertisement Hosting</CardTitle>
                      <CardDescription>Allow others to post ads on your accounts</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={adHostingEnabled}
                        onCheckedChange={setAdHostingEnabled}
                      />
                      <Label>{adHostingEnabled ? "Enabled" : "Disabled"}</Label>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">Ad Verification System</h4>
                      <p className="text-sm text-muted-foreground">
                        Our system automatically checks if hosted ads remain published. If content is deleted before the agreed period, payment is withheld and penalties apply.
                      </p>
                    </div>
                    
                    <h4 className="font-semibold mt-6">Current Ad Placements</h4>
                    {adPlacements.map((ad) => (
                      <Card key={ad.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold">{ad.account}</p>
                              <p className="text-sm text-muted-foreground">{ad.platform}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant={ad.status === "active" ? "default" : "secondary"}>
                                {ad.status}
                              </Badge>
                              <p className="text-sm font-semibold mt-1">${ad.earnings.toFixed(2)}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Integrated Ads</CardTitle>
                  <CardDescription>Post content with integrated advertising</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-muted/50 rounded-lg mb-4">
                    <p className="text-sm text-muted-foreground">
                      Create your regular content and our AI will seamlessly integrate relevant products. Post to multiple platforms simultaneously while earning from integrated ads.
                    </p>
                  </div>
                  <Button className="w-full">Create Content with Integrated Ads</Button>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Ad Placement */}
          {(selectedRole === "influencer" || selectedRole === "agency") && (
            <TabsContent value="ad-placement" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ad Placement Management</CardTitle>
                  <CardDescription>Select accounts to promote your ads</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-4">Create New Ad Campaign</Button>
                  <div className="space-y-3">
                    {adPlacements.map((ad) => (
                      <Card key={ad.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold">{ad.account}</p>
                              <p className="text-sm text-muted-foreground">{ad.platform} • {ad.status}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm">Pause</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Engagement */}
          {(selectedRole === "regular" || selectedRole === "influencer") && (
            <TabsContent value="engagement" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {selectedRole === "influencer" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Request Engagement Boost</CardTitle>
                      <CardDescription>Increase visibility on your posts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full mb-4">Request Boost</Button>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Estimated reach:</span>
                          <span className="font-semibold">10K - 50K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">AI comments:</span>
                          <span className="font-semibold">Realistic & contextual</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle>Participate in Engagement</CardTitle>
                    <CardDescription>Earn by engaging with content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {engagementRequests.map((req) => (
                        <Card key={req.id}>
                          <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-semibold">{req.type}</p>
                                <p className="text-sm text-muted-foreground">{req.platform}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-primary">${req.reward}</p>
                                <Badge variant={req.status === "available" ? "default" : "secondary"} className="mt-1">
                                  {req.status}
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          )}

          {/* Workflows */}
          <TabsContent value="workflows" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Workflow Automation</CardTitle>
                <CardDescription>Build and schedule automated workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6">+ Create New Workflow</Button>
                <div className="space-y-4">
                  {workflows.map((workflow) => (
                    <Card key={workflow.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <p className="font-semibold">{workflow.name}</p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{workflow.steps}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {workflow.schedule}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={workflow.status === "active" ? "default" : "secondary"}>
                              {workflow.status}
                            </Badge>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wallet */}
          <TabsContent value="wallet" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Available Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">$248.50</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Total Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$1,245.00</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-muted-foreground">$95.00</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Financial Transactions</CardTitle>
                <CardDescription>Manage deposits and withdrawals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-6">
                  <Button className="flex-1">Deposit Funds</Button>
                  <Button variant="outline" className="flex-1">Withdraw</Button>
                </div>

                <h4 className="font-semibold mb-4">Transaction History</h4>
                <div className="space-y-3">
                  {transactions.map((txn) => (
                    <Card key={txn.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {txn.amount > 0 ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                            ) : (
                              <XCircle className="h-5 w-5 text-orange-500" />
                            )}
                            <div>
                              <p className="font-semibold">{txn.type}</p>
                              <p className="text-sm text-muted-foreground">{txn.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-bold ${txn.amount > 0 ? 'text-green-500' : 'text-orange-500'}`}>
                              {txn.amount > 0 ? '+' : ''}{txn.amount.toFixed(2)}
                            </p>
                            <Badge variant={txn.status === "completed" ? "default" : "secondary"} className="mt-1">
                              {txn.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Campaigns (Agency only) */}
          {selectedRole === "agency" && (
            <TabsContent value="campaigns" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Management</CardTitle>
                  <CardDescription>Plan, schedule, and track ad campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6">+ Create New Campaign</Button>
                  <div className="space-y-4">
                    {campaigns.map((campaign) => (
                      <Card key={campaign.id}>
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="font-semibold text-lg mb-1">{campaign.name}</p>
                                <Badge variant={campaign.status === "active" ? "default" : "secondary"}>
                                  {campaign.status}
                                </Badge>
                              </div>
                              <div className="flex gap-2">
                                {campaign.status === "active" && (
                                  <>
                                    <Button variant="outline" size="sm">Pause</Button>
                                    <Button variant="outline" size="sm">Edit</Button>
                                  </>
                                )}
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Budget</p>
                                <p className="font-semibold">${campaign.budget.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Spent</p>
                                <p className="font-semibold">${campaign.spent.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Reach</p>
                                <p className="font-semibold">{campaign.reach.toLocaleString()}</p>
                              </div>
                            </div>

                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
};

export default MVP;
