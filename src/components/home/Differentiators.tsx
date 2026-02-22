import { Handshake, Building2, DollarSign, FileOutput, Lock } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface DiffItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const items: DiffItem[] = [
  {
    title: "We coordinate, we do not diagnose",
    description:
      "NextScan is an administrative coordination service, not a clinic. We connect you with independent imaging providers.",
    icon: Handshake,
  },
  {
    title: "Vetted partner clinics",
    description:
      "We work with established imaging providers and confirm availability and process before presenting options.",
    icon: Building2,
  },
  {
    title: "Pricing clarity",
    description:
      "You see the full cost before booking. No surprise invoices from us.",
    icon: DollarSign,
  },
  {
    title: "Report delivery coordination",
    description:
      "We help ensure reports are routed to your physician based on clinic process.",
    icon: FileOutput,
  },
  {
    title: "Privacy and security",
    description:
      "We collect only what is needed, use secure systems, and limit access to your information.",
    icon: Lock,
  },
];

function BentoCard({
  item,
  className,
}: {
  item: DiffItem;
  className?: string;
}) {
  return (
    <div
      className={`bg-muted border border-muted rounded-2xl p-6 flex flex-col justify-between ${className ?? ""}`}
    >
      <div>
        <div className="inline-flex items-center justify-center w-10 h-10 bg-muted rounded-xl mb-5">
          <item.icon className="h-5 w-5 text-foreground" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight mb-2">
          {item.title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Differentiators() {
  return (
    <section id="why-nextscan" className="bg-background py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            We find care at your service
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground max-w-xl mx-auto">
            We are not a clinic or a directory. We are a care coordination
            service built to take the burden off patients.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
          {/* Row 1, Col 1 */}
          <BentoCard item={items[0]} />

          {/* Row 1, Col 2 */}
          <BentoCard item={items[1]} />

          {/* Row 1–2, Col 3 (tall card spanning 2 rows) */}
          <BentoCard
            item={items[2]}
            className="md:row-span-2"
          />

          {/* Row 2, Col 1 */}
          <BentoCard item={items[3]} />

          {/* Row 2, Col 2 */}
          <BentoCard item={items[4]} />
        </div>
      </div>
    </section>
  );
}
