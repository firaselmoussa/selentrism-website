import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How secure is my social media data?",
    answer: "We use enterprise-grade encryption and never store your social media passwords. All connections use official API integrations with permissions that you can revoke at any time. Your data is protected by the same security standards used by major financial institutions."
  },
  // {
  //   question: "What's the pricing structure?",
  //   answer: "We offer a freemium model with basic automation features available at no cost. Premium plans start at $29/month for influencers and $99/month for agencies, with custom enterprise pricing available. Early adopters get 50% off their first year."
  // },
  {
    question: "When will the platform be fully available?",
    answer: "Beta testing is currently underway with select users. Early access launches in Q1 2026, with full public release scheduled for Q3 2026. Waitlist members get priority access and exclusive onboarding support."
  },
  {
    question: "Which social media platforms do you support?",
    answer: "Currently supporting Instagram, Facebook, Twitter/X, TikTok, YouTube, and Threads. We're constantly adding new platforms based on user demand."
  },
  {
    question: "How does the AI ensure authentic engagement?",
    answer: "Our AI models are trained on millions of real interactions to generate natural, contextually appropriate responses. We use advanced sentiment analysis and user behavior patterns to ensure all automated interactions feel genuine and maintain your brand voice."
  },
  {
    question: "Can I cancel or modify my automation at any time?",
    answer: "Absolutely. You have full control over all automations with the ability to pause, modify, or completely stop any workflow instantly. There are no long-term contracts, and you can downgrade or cancel your subscription at any time."
  },
  {
    question: "Do you offer white-label solutions for agencies?",
    answer: "Yes, our Enterprise plan includes white-label capabilities, allowing agencies to brand the platform as their own. This includes custom domains, branded reports, and dedicated account management."
  },
  {
    question: "How much revenue can I expect to generate?",
    answer: "Revenue varies based on your following, engagement rates, and participation level. Our beta users report an average of 300% increase in social media revenue within the first 3 months. Individual results may vary."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked 
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Selentrism
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="glass rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;