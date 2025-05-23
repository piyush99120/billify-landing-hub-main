
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HeroSection />
        <FeaturesSection />
        <FaqSection />
        <CtaSection />
      </main>
    </div>
  );
};

export default Index;
