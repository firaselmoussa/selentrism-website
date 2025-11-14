import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Settings,
  Wallet,
  User,
  Plus,
  Briefcase,
  FolderKanban,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  TrendingUp,
  MessageSquare,
  PlayCircle,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";

type ViewType = "overview" | "business" | "project";

interface Business {
  id: string;
  name: string;
  projects: Project[];
}

interface Project {
  id: string;
  name: string;
  businessId?: string;
  tasks: Task[];
}

interface Task {
  id: string;
  title: string;
  type: "engagement" | "content" | "ad";
  status: "pending" | "active" | "completed";
  scheduledDate: string;
}

const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "",
  balance: 2450.50,
};

const mockBusinesses: Business[] = [
  {
    id: "b1",
    name: "Marketing Agency Pro",
    projects: [
      {
        id: "p1",
        name: "Client Campaign Q1",
        businessId: "b1",
        tasks: [
          { id: "t1", title: "Instagram Engagement Boost", type: "engagement", status: "active", scheduledDate: "2025-01-15" },
          { id: "t2", title: "Content Creation - 10 Posts", type: "content", status: "pending", scheduledDate: "2025-01-20" },
        ],
      },
    ],
  },
];

const mockIndependentProjects: Project[] = [
  {
    id: "p2",
    name: "Personal Brand Growth",
    tasks: [
      { id: "t3", title: "TikTok Engagement Request", type: "engagement", status: "completed", scheduledDate: "2025-01-10" },
    ],
  },
];

const Dashboard = () => {
  const [currentView, setCurrentView] = useState<ViewType>("overview");
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [connectedAccounts, setConnectedAccounts] = useState<string[]>([]);

  const handleBusinessClick = (business: Business) => {
    setSelectedBusiness(business);
    setSelectedProject(null);
    setCurrentView("business");
  };

  const handleProjectClick = (project: Project, business?: Business) => {
    setSelectedProject(project);
    setSelectedBusiness(business || null);
    setCurrentView("project");
  };

  const handleConnectAccount = (platform: string) => {
    if (connectedAccounts.includes(platform)) {
      setConnectedAccounts(connectedAccounts.filter((p) => p !== platform));
    } else {
      setConnectedAccounts([...connectedAccounts, platform]);
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Welcome back, {mockUser.name}</h2>
        <p className="text-muted-foreground">Manage your social media presence and campaigns</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Connect Social Media Accounts</CardTitle>
          <CardDescription>Grant permissions to manage your social media</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Instagram", icon: Instagram, color: "text-pink-500" },
              { name: "Facebook", icon: Facebook, color: "text-blue-500" },
              { name: "Twitter", icon: Twitter, color: "text-sky-500" },
              { name: "YouTube", icon: Youtube, color: "text-red-500" },
            ].map((platform) => {
              const isConnected = connectedAccounts.includes(platform.name);
              return (
                <Button
                  key={platform.name}
                  variant={isConnected ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => handleConnectAccount(platform.name)}
                >
                  <platform.icon className={`mr-2 h-5 w-5 ${platform.color}`} />
                  {isConnected ? "Connected" : `Connect ${platform.name}`}
                  {isConnected && <CheckCircle className="ml-auto h-4 w-4" />}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Services</CardTitle>
          <CardDescription>Sign up for services to boost your presence</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Engagement Boost", icon: TrendingUp, description: "Increase likes, views, and comments" },
              { name: "Ad Posting", icon: MessageSquare, description: "Post ads on other accounts" },
              { name: "Content Creation", icon: PlayCircle, description: "AI-generated content for your brand" },
            ].map((service) => (
              <div key={service.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <service.icon className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">{service.name}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <Button>Enable</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBusinessDetails = () => {
    if (!selectedBusiness) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{selectedBusiness.name}</h2>
            <p className="text-muted-foreground">Business Dashboard</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{selectedBusiness.projects.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {selectedBusiness.projects.reduce((sum, p) => sum + p.tasks.filter((t) => t.status === "active").length, 0)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(Math.random() * 10000).toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {selectedBusiness.projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => handleProjectClick(project, selectedBusiness)}
                >
                  <div className="flex items-center space-x-4">
                    <FolderKanban className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm text-muted-foreground">{project.tasks.length} tasks</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderProjectDetails = () => {
    if (!selectedProject) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{selectedProject.name}</h2>
            <p className="text-muted-foreground">
              {selectedBusiness ? `${selectedBusiness.name} / ${selectedProject.name}` : "Independent Project"}
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Schedule Engagement Boost
            </Button>
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Request Content Creation
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{selectedProject.tasks.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{selectedProject.tasks.filter((t) => t.status === "active").length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{selectedProject.tasks.filter((t) => t.status === "completed").length}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Tasks & Scheduled Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedProject.tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {task.type === "engagement" && <TrendingUp className="h-5 w-5 text-blue-500" />}
                    {task.type === "content" && <PlayCircle className="h-5 w-5 text-purple-500" />}
                    {task.type === "ad" && <MessageSquare className="h-5 w-5 text-green-500" />}
                    <div>
                      <h4 className="font-semibold">{task.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">{task.scheduledDate}</p>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={task.status === "completed" ? "default" : task.status === "active" ? "secondary" : "outline"}
                  >
                    {task.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-6">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/selentrism_icon_zoomin.jpeg" alt="Selentrism" className="h-8 w-8" />
            <span className="font-bold gradient-text">Selentrism</span>
          </Link>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon" title="Wallet">
              <Wallet className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" title="Settings">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src={mockUser.avatar} />
              <AvatarFallback>{mockUser.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r bg-card min-h-[calc(100vh-4rem)] p-4 space-y-6">
          {/* User Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={mockUser.avatar} />
                <AvatarFallback>{mockUser.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">{mockUser.name}</p>
                <p className="text-xs text-muted-foreground">{mockUser.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <DollarSign className="h-4 w-4 text-green-500" />
              <span className="font-semibold">${mockUser.balance.toFixed(2)}</span>
            </div>
          </div>

          <Separator />

          {/* Quick Actions */}
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setCurrentView("overview")}>
              <User className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Wallet className="mr-2 h-4 w-4" />
              Wallet
            </Button>
          </div>

          <Separator />

          {/* Actions */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase">Actions</h3>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Create Business
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>

          <Separator />

          {/* Businesses */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase">Businesses</h3>
            {mockBusinesses.map((business) => (
              <div key={business.id} className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                  onClick={() => handleBusinessClick(business)}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  {business.name}
                </Button>
                {business.projects.map((project) => (
                  <Button
                    key={project.id}
                    variant="ghost"
                    className="w-full justify-start pl-8"
                    size="sm"
                    onClick={() => handleProjectClick(project, business)}
                  >
                    <FolderKanban className="mr-2 h-3 w-3" />
                    {project.name}
                  </Button>
                ))}
              </div>
            ))}
          </div>

          <Separator />

          {/* Independent Projects */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase">Independent Projects</h3>
            {mockIndependentProjects.map((project) => (
              <Button
                key={project.id}
                variant="ghost"
                className="w-full justify-start"
                size="sm"
                onClick={() => handleProjectClick(project)}
              >
                <FolderKanban className="mr-2 h-4 w-4" />
                {project.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {currentView === "overview" && renderOverview()}
          {currentView === "business" && renderBusinessDetails()}
          {currentView === "project" && renderProjectDetails()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
