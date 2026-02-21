"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I need a doctor's referral or requisition?",
    answer:
      "No referral is needed to book a private scan through NextScan. However, having a requisition from your doctor can help the clinic know exactly what to image. If you don't have one, that's okay — you can still submit a request and discuss with your coordinator.",
  },
  {
    question: "How much does a private MRI or CT scan cost?",
    answer:
      "Pricing varies by clinic and scan type. Standard MRI and CT scans at Canadian clinics outside Ontario typically range from $400–$1,200 CAD. Ontario full-body screening clinics start at $2,500+ CAD. US border clinics range from $300–$800 USD. Mexico clinics offer the lowest prices at $200–$600 USD. Your coordinator will confirm exact pricing before you commit.",
  },
  {
    question: "Is NextScan a clinic? Who performs the scan?",
    answer:
      "NextScan is not a clinic and does not perform scans. We are a free coordination service that helps you find and connect with private imaging clinics. All scans are performed by independent, vetted clinics with licensed technicians and radiologists.",
  },
  {
    question: "How fast can I get scanned?",
    answer:
      "Most patients can get scanned within 3–7 days of submitting a request. Some clinics have same-week availability. Your coordinator will confirm the earliest available appointment when they follow up.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Yes. NextScan follows PHIPA (Personal Health Information Protection Act) guidelines. Your personal and health information is only shared with the clinic you select. We do not sell or share your data with third parties. See our Privacy Policy for full details.",
  },
  {
    question: "What happens after I submit my request?",
    answer:
      "A NextScan coordinator will reach out within 1 business day (usually sooner) to confirm clinic availability, pricing, and next steps. You're under no obligation — you only proceed if you're satisfied with the options.",
  },
  {
    question: "Can I get scanned in the US or Mexico?",
    answer:
      "Yes. We partner with clinics in New York and Michigan (near the Ontario border) as well as clinics in Mexico. Cross-border options often have shorter wait times and competitive pricing. You'll need a valid passport for US or Mexico clinics.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-muted py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about private imaging through NextScan.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-accent transition-colors"
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
                <div className="px-6 pb-5">
                  <p className="text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
