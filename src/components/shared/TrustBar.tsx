import { Building2, Handshake, FileText, DollarSign, Lock } from "lucide-react";

const trustItems = [
  { icon: Building2, text: "Not a clinic" },
  { icon: Handshake, text: "We coordinate bookings" },
  { icon: FileText, text: "No referral needed" },
  { icon: DollarSign, text: "Pricing shown upfront" },
  { icon: Lock, text: "PHIPA-aligned privacy" },
];

export default function TrustBar() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {trustItems.map((item) => (
          <span key={item.text} className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <item.icon className="h-4 w-4" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
