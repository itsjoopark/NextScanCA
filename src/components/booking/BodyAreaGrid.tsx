"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import data from "@/data/nextscan-data.json";

interface BodyAreaGridProps {
  scanType: string;
  selectedArea: string | null;
  onSelect: (area: string) => void;
}

const bodyAreas = data.step2_bodyAreas as Record<
  string,
  Array<{ id: string; name: string; description: string }>
>;

export default function BodyAreaGrid({
  scanType,
  selectedArea,
  onSelect,
}: BodyAreaGridProps) {
  const areas = bodyAreas[scanType] || [];

  if (areas.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        Which body area needs imaging?
      </h2>
      <p className="text-sm leading-6 text-muted-foreground mb-6">
        Select the area your doctor wants scanned, or choose &quot;Other / Not
        Sure&quot; if you need guidance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {areas.map((area) => {
          const isSelected = selectedArea === area.id;
          return (
            <button
              key={area.id}
              onClick={() => onSelect(area.id)}
              className={cn(
                "w-full text-left rounded-lg border p-4 transition-colors",
                "hover:border-primary hover:bg-accent",
                isSelected
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-border bg-card"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="text-sm font-medium">{area.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{area.description}</div>
                </div>
                {isSelected && (
                  <div className="ml-2 mt-0.5 w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
