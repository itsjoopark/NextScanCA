import Hero from "@/components/home/Hero";
import TrustBar from "@/components/shared/TrustBar";
import HowItWorks from "@/components/home/HowItWorks";
import Differentiators from "@/components/home/Differentiators";
import FAQ from "@/components/home/FAQ";
import GlowPanel from "@/components/shared/GlowPanel";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";

export default function HomePage() {
  return (
    <div className="px-2 sm:px-3 py-2 sm:py-3 space-y-3 sm:space-y-4">
      <FadeInOnScroll>
        <GlowPanel>
          <Hero />
        </GlowPanel>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <TrustBar />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <GlowPanel className="[&>section]:bg-transparent">
          <HowItWorks />
        </GlowPanel>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <GlowPanel className="[&>section]:bg-transparent">
          <Differentiators />
        </GlowPanel>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <GlowPanel className="[&>section]:bg-transparent">
          <FAQ />
        </GlowPanel>
      </FadeInOnScroll>
    </div>
  );
}
