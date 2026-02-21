import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span
            className="animate-fade-in-up inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            20+ vetted clinics across Canada &amp; border locations
          </span>

          {/* Headline */}
          <h1
            className="animate-fade-in-up text-5xl sm:text-6xl font-medium tracking-tighter leading-[1.03] text-center"
            style={{ animationDelay: "100ms" }}
          >
            <span className="bg-gradient-to-r from-[hsl(195,60%,30%)] to-primary bg-clip-text text-transparent">
              Skip the wait.
            </span>
            <br />
            <span className="text-foreground/90">
              Find and coordinate your next MRI &amp; CT scan today.
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="animate-fade-in-up mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            style={{ animationDelay: "200ms" }}
          >
            Compare pricing and availability at vetted clinics across Ontario
            and nearby border locations. No referral needed.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
              <Link href="/booking">
                Find Available Scans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6"
            >
              <a href="https://cal.com/dan-pappo-sd3rpz/30min" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                Speak to a Coordinator
              </a>
            </Button>
          </div>

          {/* Stat bar */}
          <div
            className="animate-fade-in-up mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 text-center sm:divide-x sm:divide-border"
            style={{ animationDelay: "400ms" }}
          >
            <div className="sm:px-6">
              <p className="text-2xl font-semibold tracking-tight">3–7 days</p>
              <p className="text-sm text-muted-foreground">
                Typical wait for available appointments
              </p>
            </div>
            <div className="sm:px-6">
              <p className="text-2xl font-semibold tracking-tight">20+ clinics</p>
              <p className="text-sm text-muted-foreground">
                Vetted options across Canada &amp; near the border
              </p>
            </div>
            <div className="sm:px-6">
              <p className="text-2xl font-semibold tracking-tight">Pricing shown</p>
              <p className="text-sm text-muted-foreground">
                See costs before you commit to booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
