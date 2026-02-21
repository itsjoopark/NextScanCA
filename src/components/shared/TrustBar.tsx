import { Building2, Handshake, FileText, DollarSign, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const trustItems = [
  { icon: Building2, text: "Not a clinic" },
  { icon: Handshake, text: "We coordinate bookings" },
  { icon: FileText, text: "No referral needed" },
  { icon: DollarSign, text: "Pricing shown upfront" },
  { icon: Lock, text: "PHIPA-aligned privacy" },
];

export default function TrustBar() {
  return (
    <div className="bg-muted border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {trustItems.map((item) => (
            <Badge key={item.text} variant="outline" className="gap-1">
              <item.icon className="h-3 w-3" />
              {item.text}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
