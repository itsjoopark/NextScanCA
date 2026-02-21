import { ClipboardCheck, Building2, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Choose Your Scan",
    description:
      "Select your scan type (MRI or CT) and the body area you need imaged. Not sure? We can help you figure it out.",
    icon: ClipboardCheck,
  },
  {
    number: "2",
    title: "Pick a Clinic",
    description:
      "Compare clinics by distance, reviews, and availability. See ratings from real patients and choose what works for you.",
    icon: Building2,
  },
  {
    number: "3",
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Skip the public waitlist. Find a private scan in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-2">
                {/* Step icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-5">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
