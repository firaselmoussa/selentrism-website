import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Target, Eye, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About the 
            <span className="gradient-text"> Global Presence Project</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problem Statement */}
          <Card className="glass">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive mr-3" />
                <h3 className="text-2xl font-bold">The Problem</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Social media management across multiple platforms is fragmented, time-consuming, and lacks unified revenue optimization. 
                Influencers, agencies, and businesses struggle with manual posting, inconsistent engagement, 
                and missed monetization opportunities while juggling multiple tools and platforms.
              </p>
            </CardContent>
          </Card>

          {/* Our Solution */}
          <Card className="glass">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Our Solution</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A unified automation platform that combines workflow creation, intelligent scheduling, 
                ad management, and engagement optimization. Our drag-and-drop interface lets users create 
                custom automation chains while our AI ensures authentic, revenue-generating interactions.
              </p>
            </CardContent>
          </Card>

          {/* Vision & Mission */}
          <Card className="glass">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold">Vision & Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To democratize social media success by making professional-grade automation and monetization 
                tools accessible to everyone. We're building the future where digital presence management 
                is seamless, profitable, and authentically engaging.
              </p>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="glass">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold">Current Stage</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We're in the final development phase with beta testing underway. 
                Early access launching Q2 2024 with full platform rollout by Q3. 
                Join our waitlist to be among the first to revolutionize your digital presence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;