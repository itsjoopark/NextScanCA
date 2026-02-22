import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-foreground text-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold text-background">NextScan</span>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Helping Ontario patients access private MRI and CT scans faster.
              We coordinate — you choose.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-background mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/booking" className="text-sm text-muted-foreground hover:text-background transition-colors">
                  Find Available Scans
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-sm text-muted-foreground hover:text-background transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm text-muted-foreground hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-background mb-3">
              Contact
            </h3>
            <p className="text-sm text-muted-foreground">
              Have questions? Our coordinators are here to help.
            </p>
            <Link
              href="/booking"
              className="inline-block mt-2 text-sm text-muted-foreground hover:text-background transition-colors"
            >
              Find Available Scans
            </Link>
            <a
              href="https://cal.com/dan-pappo-sd3rpz/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Book a call with a coordinator
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <Separator className="my-10 bg-muted-foreground/20" />
        <div>
          <p className="text-xs leading-5 text-muted-foreground">
            NextScan is not a healthcare provider or clinic. We are a coordination service that helps
            patients find and connect with private imaging clinics. We do not provide medical advice,
            diagnoses, or treatment. All scans are performed by independent clinics. Pricing is set by
            each clinic and paid directly to them. NextScan&apos;s coordination service is free for patients.
            Private imaging is not covered by OHIP.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} NextScan.ca. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
