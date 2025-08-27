import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const caseStudies = [
  {
    role: "Regular User",
    name: "Sarah M.",
    avatar: "SM",
    before: {
      followers: "2.5K",
      engagement: "1.2%",
      revenue: "$0"
    },
    after: {
      followers: "12.8K",
      engagement: "4.7%",
      revenue: "$850/mo"
    },
    growth: {
      followers: "+410%",
      engagement: "+290%",
      revenue: "New income stream"
    },
    color: "blue"
  },
  {
    role: "Influencer", 
    name: "Jake Rodriguez",
    avatar: "JR",
    before: {
      followers: "45K",
      engagement: "2.1%",
      revenue: "$1.2K/mo"
    },
    after: {
      followers: "180K",
      engagement: "6.8%",
      revenue: "$15.5K/mo"
    },
    growth: {
      followers: "+300%",
      engagement: "+224%",
      revenue: "+1,190%"
    },
    color: "purple"
  },
  {
    role: "Agency",
    name: "Digital Boost Co.",
    avatar: "DB",
    before: {
      clients: "8 clients",
      revenue: "$25K/mo",
      efficiency: "Manual processes"
    },
    after: {
      clients: "35 clients", 
      revenue: "$95K/mo",
      efficiency: "90% automated"
    },
    growth: {
      clients: "+337%",
      revenue: "+280%",
      efficiency: "10x faster delivery"
    },
    color: "emerald"
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success Stories &
            <span className="gradient-text"> Growth Metrics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from our beta users - this is what success looks like on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="glass hover:glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-${study.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-${study.color}-400 font-bold text-lg`}>{study.avatar}</span>
                </div>
                <CardTitle className="gradient-text">{study.role}</CardTitle>
                <p className="text-muted-foreground">{study.name}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Before */}
                <div className="bg-destructive/10 rounded-lg p-4">
                  <h4 className="font-semibold text-destructive mb-3 flex items-center">
                    <span className="w-2 h-2 bg-destructive rounded-full mr-2"></span>
                    Before
                  </h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(study.before).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize text-muted-foreground">{key}:</span>
                        <span className="text-destructive font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    After
                  </h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(study.after).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize text-muted-foreground">{key}:</span>
                        <span className="text-primary font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Growth */}
                <div className="bg-accent/10 rounded-lg p-4">
                  <h4 className="font-semibold text-accent mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Growth
                  </h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(study.growth).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize text-muted-foreground">{key}:</span>
                        <span className="text-accent font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Beta Users</div>
            </CardContent>
          </Card>
          
          <Card className="glass text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text">340%</div>
              <div className="text-sm text-muted-foreground">Avg Growth</div>
            </CardContent>
          </Card>
          
          <Card className="glass text-center">
            <CardContent className="p-6">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text">$2.5M+</div>
              <div className="text-sm text-muted-foreground">Revenue Generated</div>
            </CardContent>
          </Card>
          
          <Card className="glass text-center">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;