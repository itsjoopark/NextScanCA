"use client";

import { cn } from "@/lib/utils";
import data from "@/data/nextscan-data.json";

interface RegionFilterProps {
  selectedRegions: string[];
  onToggle: (regionId: string) => void;
}

const regionOptions = data.step3_regionOptions;

export default function RegionFilter({
  selectedRegions,
  onToggle,
}: RegionFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {regionOptions.map((region) => {
        const isActive = selectedRegions.includes(region.id);
        return (
          <button
            key={region.id}
            onClick={() => onToggle(region.id)}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-colors",
              isActive
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary"
            )}
            title={region.features?.join(", ")}
          >
            <span>{region.flag}</span>
            <span>{region.name}</span>
          </button>
        );
      })}
    </div>
  );
}
