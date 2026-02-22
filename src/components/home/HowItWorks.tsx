import {
  ClipboardCheck,
  Building2,
  ClipboardList,
  CheckCircle,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    title: "Choose Your Scan",
    description:
      "Select your scan type (MRI or CT) and the body area you need imaged. Not sure? We can help you figure it out.",
    icon: ClipboardCheck,
  },
  {
    title: "Pick a Clinic",
    description:
      "Compare clinics by distance, reviews, and availability. See ratings from real patients and choose what works for you.",
    icon: Building2,
  },
  {
    title: "Personalized Plan",
    description:
      "Tell us your scan type, body area, travel preferences, timing constraints, and your doctor's contact — we'll match you with the right options.",
    icon: ClipboardList,
  },
  {
    title: "Get Scanned",
    description:
      "Submit your request and a coordinator confirms availability and pricing within 1 business day. You pay the clinic directly.",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter leading-[1.03] text-foreground/90 mb-12 text-center">
          How NextScan works
        </h2>

        {/* 4-column steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.title}>
              <step.icon className="h-10 w-10 text-primary mb-5" />
              <h3 className="text-xl font-semibold tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
