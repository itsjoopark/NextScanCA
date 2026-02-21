import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy — NextScan.ca",
  description:
    "How NextScan handles your personal and health information. Plain language, PHIPA-aligned.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-prose mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-8">
        {/* Plain language summary */}
        <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
          <h2 className="text-lg font-medium mb-3">
            The Short Version
          </h2>
          <ul className="space-y-2 text-sm leading-6">
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium mt-0.5">•</span>
              We only collect the information you give us through our booking form.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium mt-0.5">•</span>
              We share it only with the clinic you select so they can process your scan request.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium mt-0.5">•</span>
              We never sell your data to anyone.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium mt-0.5">•</span>
              You can ask us to delete your information at any time.
            </li>
          </ul>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            Who We Are
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            NextScan.ca (&quot;NextScan&quot;, &quot;we&quot;, &quot;us&quot;) is a coordination service
            that helps patients find and connect with private medical imaging clinics.
            We are <strong>not</strong> a healthcare provider, clinic, or medical practice.
            We do not perform scans, provide diagnoses, or offer medical advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            What Information We Collect
          </h2>
          <p className="text-sm leading-6 text-muted-foreground mb-3">
            When you use our booking form, we collect:
          </p>
          <ul className="list-disc list-inside text-sm leading-6 text-muted-foreground space-y-1">
            <li><strong>Contact information</strong> — your email address and optionally your phone number</li>
            <li><strong>Scan preferences</strong> — the type of scan, body area, and preferred scheduling</li>
            <li><strong>Clinical screening answers</strong> — basic safety questions (e.g., pacemaker, pregnancy)</li>
            <li><strong>Requisition documents</strong> — if you choose to upload one</li>
            <li><strong>Clinic selection</strong> — which clinic you prefer</li>
          </ul>
          <p className="text-sm leading-6 text-muted-foreground mt-3">
            We do <strong>not</strong> collect payment information. You pay the clinic directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-sm leading-6 text-muted-foreground space-y-1">
            <li>To connect you with your selected clinic and coordinate your scan booking</li>
            <li>To communicate with you about your request (confirmations, follow-ups)</li>
            <li>To improve our service based on aggregate, anonymized usage patterns</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            Who We Share Your Information With
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            We share your information <strong>only</strong> with the clinic you select through our
            platform, so they can process and schedule your scan. We do not sell, rent, or
            share your data with advertisers, data brokers, or any other third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            Health Information &amp; PHIPA Alignment
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            While NextScan is not a health information custodian under Ontario&apos;s
            Personal Health Information Protection Act (PHIPA), we voluntarily align
            our practices with PHIPA principles. This means we treat all health-related
            information you provide with the same care and protections that PHIPA requires
            of healthcare providers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            Data Storage &amp; Security
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Your information is stored securely using industry-standard encryption.
            Access is limited to NextScan team members who need it to process your
            request. We retain your data only as long as necessary to fulfill your
            booking request and any follow-up, after which it is securely deleted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            Your Rights
          </h2>
          <p className="text-sm leading-6 text-muted-foreground mb-3">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-sm leading-6 text-muted-foreground space-y-1">
            <li><strong>Access</strong> — request a copy of the information we hold about you</li>
            <li><strong>Correct</strong> — ask us to update inaccurate information</li>
            <li><strong>Delete</strong> — ask us to permanently delete your information</li>
            <li><strong>Withdraw</strong> — cancel your request at any time before a scan is booked</li>
          </ul>
          <p className="text-sm leading-6 text-muted-foreground mt-3">
            To exercise any of these rights, email us at{" "}
            <a href="mailto:hello@nextscan.ca" className="text-primary hover:text-primary/80 font-medium">
              hello@nextscan.ca
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            Cookies &amp; Analytics
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            We use privacy-friendly analytics to understand how people use our site
            (e.g., which pages are visited, where users drop off). We do not use
            tracking cookies for advertising. No personal information is shared
            with analytics providers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            Changes to This Policy
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            We may update this policy from time to time. If we make significant changes,
            we&apos;ll update the date below and, if you&apos;ve provided contact information,
            notify you directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            Contact Us
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            If you have questions about this privacy policy or how we handle your data,
            please contact us at{" "}
            <a href="mailto:hello@nextscan.ca" className="text-primary hover:text-primary/80 font-medium">
              hello@nextscan.ca
            </a>.
          </p>
        </section>

        <Separator />

        <p className="text-xs text-muted-foreground">
          Last updated: February 2026
        </p>
      </div>
    </div>
  );
}
