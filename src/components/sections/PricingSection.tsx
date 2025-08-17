import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals getting started",
    icon: Zap,
    features: [
      "5 Social Media Accounts",
      "Basic Workflow Automation",
      "100 AI-Generated Posts/month",
      "Basic Analytics",
      "Email Support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    description: "For influencers and growing businesses",
    icon: Crown,
    features: [
      "25 Social Media Accounts",
      "Advanced Workflow Builder",
      "1,000 AI-Generated Posts/month",
      "Engagement Automation",
      "Revenue Analytics",
      "Priority Support",
      "Custom Integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$299",
    description: "For agencies and large organizations",
    icon: Rocket,
    features: [
      "Unlimited Accounts",
      "Full Platform Access",
      "Unlimited AI Content",
      "White-label Solutions",
      "Dedicated Account Manager",
      "Custom Development",
      "99.9% SLA"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your
            <span className="gradient-text"> Growth Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free, scale as you grow. All plans include our core automation features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`glass relative overflow-hidden transition-all duration-300 ${
                  plan.popular 
                    ? 'border-primary glow scale-105' 
                    : 'hover:glow hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={plan.popular ? "pt-8" : ""}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                  <div className="text-center">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="text-center">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/register" className="block">
                    <Button 
                      className={`w-full mt-6 ${
                        plan.popular 
                          ? 'glow hover:glow-intense' 
                          : 'hover:glow'
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;