import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import DemoSection from "@/components/sections/DemoSection";
import SurveySection from "@/components/sections/SurveySection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        {/* <CaseStudiesSection /> */}
        <DemoSection />
        <SurveySection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
