import Hero from "@/components/home/Hero";
import TrustBar from "@/components/shared/TrustBar";
import HowItWorks from "@/components/home/HowItWorks";
import Differentiators from "@/components/home/Differentiators";
import FAQ from "@/components/home/FAQ";
import GridBackground from "@/components/shared/GridBackground";

export default function HomePage() {
  return (
    <div className="px-2 sm:px-3 py-2 sm:py-3 space-y-3 sm:space-y-4">
      <GridBackground />
      <div className="landing-panel">
        <Hero />
      </div>
      <div>
        <TrustBar />
      </div>
      <div className="landing-panel [&>section]:bg-transparent">
        <HowItWorks />
      </div>
      <div className="landing-panel [&>section]:bg-transparent">
        <Differentiators />
      </div>
      <div className="landing-panel [&>section]:bg-transparent">
        <FAQ />
      </div>
    </div>
  );
}
