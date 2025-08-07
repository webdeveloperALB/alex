import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import PrivacySection from "@/components/privacy-section";
import HowItWorksSection from "@/components/how-it-works-section";
import FaqIntroSection from "@/components/faq-intro-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <PrivacySection />
      <HowItWorksSection />
      <FaqIntroSection />
      <FooterSection />
    </div>
  );
}
