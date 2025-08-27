import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star, Clock, Gift } from "lucide-react";

const SurveySection = () => {
  return (
    <section id="survey" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the 
            <span className="gradient-text"> Exclusive Waitlist</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be among the first to revolutionize your social media presence. Limited early access spots available.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass glow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Early Access Application</CardTitle>
              <p className="text-muted-foreground">
                Help us tailor the perfect solution for your needs. Takes just 3 minutes to complete.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Benefits of joining */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Exclusive Access</h3>
                  <p className="text-sm text-muted-foreground">First 100 users get lifetime priority support</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Gift className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Bonus Features</h3>
                  <p className="text-sm text-muted-foreground">Early adopters get premium features for free</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Early Launch</h3>
                  <p className="text-sm text-muted-foreground">Get access 30 days before public release</p>
                </div>
              </div>

              {/* Survey CTA */}
              <div className="text-center space-y-4">
                <p className="text-lg font-medium">Ready to transform your social media strategy?</p>
                
                <a 
                  href="https://airtable.com/appYourAirtableAppId/shrYourFormId" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" className="glow hover:glow-intense transition-all duration-300 group">
                    Complete Survey & Join Waitlist
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </a>
                
                <p className="text-sm text-muted-foreground">
                  🔒 Your information is secure and will never be shared
                </p>
              </div>

              {/* Progress indicator */}
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Waitlist Progress</span>
                  <span className="text-sm text-muted-foreground">847 / 1000</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: "84.7%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Only 153 spots remaining for early access
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;