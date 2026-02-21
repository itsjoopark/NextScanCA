import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            20+ vetted clinics across Canada &amp; border locations
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Get your MRI or CT scan in{" "}
            <span className="text-primary">3–7 days</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Compare pricing and availability at vetted clinics across Ontario
            and nearby border locations. No referral needed.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <a href="tel:+14165551234">
                <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                Call a Coordinator
              </a>
            </Button>
          </div>

          {/* Stat bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-semibold tracking-tight">27+</p>
              <p className="text-sm text-muted-foreground">Partner Clinics</p>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div>
              <p className="text-2xl font-semibold tracking-tight">3–7 days</p>
              <p className="text-sm text-muted-foreground">Typical Wait Time</p>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div>
              <p className="text-2xl font-semibold tracking-tight">Free</p>
              <p className="text-sm text-muted-foreground">Coordination Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
