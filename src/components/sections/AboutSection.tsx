import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Target, Eye, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About the 
            <span className="gradient-text"> Selentrism</span>
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
                Managing a strong digital presence has become increasingly complex for individuals, influencers, and businesses.
                With multiple platforms to juggle, campaigns to oversee, and engagement to maintain, the process is time-consuming and overwhelming.
                 Many users struggle to turn their presence into meaningful revenue, while brands face difficulties in placing authentic and effective ads. 
                 On top of this, achieving genuine engagement often means relying on costly or unreliable third-party services, leaving a significant gap between potential and reality.
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
                Selentrism provides a fully automated platform that simplifies social media management and opens new opportunities for monetization. By combining automation, advertising management, and AI-powered engagement optimization, we make it easier for users to grow, scale, and monetize their accounts. Our system ensures advertisers can place targeted, authentic campaigns while publishers can generate income with ease. Whether you’re an individual user, an influencer, or a global brand, our platform streamlines the entire process, turning complexity into clarity and effort into results.
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
                Our vision is to revolutionize the way people and brands build, manage, and grow their digital presence by making social media more accessible, profitable, and impactful for everyone. We are driven by the mission to deliver a futuristic, automated platform that empowers users to scale their accounts authentically, unlock revenue streams regardless of their size or reach, and provide advertisers with smarter, data-driven solutions. By fostering genuine engagement across global audiences, we aim to reshape the future of digital interaction.
              </p>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="glass">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold">Current Stage</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We are currently in the prototype and MVP pre-launch phase. The core features such as account integration, ad placement, and engagement requests are already in place. At the same time, we are finalizing our minimum viable product, which includes automation workflows, wallet and balance management, and complete campaign tools. As we move into pre-launch, we are working closely with early adopters and partners to refine the experience before unveiling the platform to the public.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;