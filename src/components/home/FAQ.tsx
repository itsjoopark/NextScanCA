"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I need a requisition?",
    answer:
      "No referral is needed to book a private scan through NextScan. However, having a requisition from your doctor can help the clinic know exactly what to image. If you don't have one, that's okay — you can still submit a request and discuss with your coordinator.",
  },
  {
    question: "Is this covered by OHIP?",
    answer:
      "Private imaging is not covered by OHIP. Patients pay the clinic directly at the time of service. Pricing is confirmed upfront so there are no surprises. Some extended health insurance plans may offer partial reimbursement — check with your provider.",
  },
  {
    question: "How does cross-border work?",
    answer:
      "We partner with clinics in New York and Michigan (near the Ontario border) as well as clinics in Mexico. Cross-border options often have shorter wait times and competitive pricing. Your coordinator handles the logistics — you just need a valid passport.",
  },
  {
    question: "How is my information handled?",
    answer:
      "NextScan follows PHIPA (Personal Health Information Protection Act) guidelines. Your personal and health information is only shared with the clinic you select. We do not sell or share your data with third parties. See our Privacy Policy for full details.",
  },
  {
    question: "What does NextScan cost?",
    answer:
      "NextScan's coordination service is free for patients. You only pay the imaging clinic directly for your scan. Pricing varies by clinic and scan type, and your coordinator will confirm the exact cost before you commit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-transparent py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
          {/* Left column */}
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter leading-[1.03] text-foreground/90">
              Frequently asked
              <br />
              questions
            </h2>
          </div>

          {/* Right column */}
          <div className="divide-y divide-border border-t border-b border-border">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full flex items-center justify-between py-5 text-left transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base leading-7 font-medium pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="pb-5">
                    <p className="text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
