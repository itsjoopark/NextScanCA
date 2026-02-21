"use client";

import { Monitor, ScanLine, HelpCircle, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import data from "@/data/nextscan-data.json";

interface ScanTypeSelectorProps {
  selectedType: string | null;
  onSelect: (type: string) => void;
}

const scanTypes = data.step1_scanTypes;

const iconMap: Record<string, React.ElementType> = {
  MRI: Monitor,
  CT: ScanLine,
  unsure: HelpCircle,
};

export default function ScanTypeSelector({
  selectedType,
  onSelect,
}: ScanTypeSelectorProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        What type of scan do you need?
      </h2>
      <p className="text-sm leading-6 text-muted-foreground mb-6">
        Select the imaging type your doctor recommended, or choose &quot;I&apos;m Not
        Sure&quot; and we&apos;ll help you figure it out.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {scanTypes.map((type) => {
          const Icon = iconMap[type.id] || HelpCircle;
          const isSelected = selectedType === type.id;

          return (
            <button
              key={type.id}
              onClick={() => onSelect(type.id)}
              className={cn(
                "relative flex flex-col items-center text-center p-6 rounded-lg border transition-colors",
                "hover:border-primary hover:bg-accent",
                isSelected
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-border bg-card"
              )}
            >
              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              )}

              <Icon className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-lg font-medium">{type.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{type.description}</p>
              {"bestFor" in type && type.bestFor && (
                <p className="mt-2 text-xs text-primary font-medium">
                  Best for: {type.bestFor}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
