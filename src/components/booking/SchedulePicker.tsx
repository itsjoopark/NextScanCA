"use client";

import { useState } from "react";
import { ChevronDown, X, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import data from "@/data/nextscan-data.json";

export interface SchedulePreference {
  date: string;
  timeSlot: string;
}

interface SchedulePickerProps {
  preferences: SchedulePreference[];
  onChange: (preferences: SchedulePreference[]) => void;
}

const { maxSlots, timeOptions } = data.step5_schedulingOptions;

function getMinDate(): string {
  const d = new Date();
  // Add 2 business days minimum lead time
  let businessDays = 0;
  while (businessDays < 2) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) businessDays++;
  }
  return d.toISOString().split("T")[0];
}

export default function SchedulePicker({
  preferences,
  onChange,
}: SchedulePickerProps) {
  const [isExpanded, setIsExpanded] = useState(preferences.length > 0);
  const minDate = getMinDate();

  const addSlot = () => {
    if (preferences.length < maxSlots) {
      onChange([...preferences, { date: "", timeSlot: "anytime" }]);
    }
  };

  const removeSlot = (index: number) => {
    onChange(preferences.filter((_, i) => i !== index));
  };

  const updateSlot = (
    index: number,
    field: "date" | "timeSlot",
    value: string
  ) => {
    const updated = preferences.map((p, i) =>
      i === index ? { ...p, [field]: value } : p
    );
    onChange(updated);
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-accent transition-colors"
        onClick={() => {
          setIsExpanded(!isExpanded);
          if (!isExpanded && preferences.length === 0) {
            onChange([{ date: "", timeSlot: "anytime" }]);
          }
        }}
      >
        <div>
          <span className="text-sm font-medium">
            Add preferred dates (optional)
          </span>
          <p className="text-xs text-muted-foreground mt-0.5">
            Up to {maxSlots} date/time preferences
          </p>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      {isExpanded && (
        <div className="px-5 pb-5 space-y-3 border-t border-border pt-4">
          {preferences.map((pref, index) => (
            <div key={index} className="flex items-center gap-3">
              <Input
                type="date"
                min={minDate}
                value={pref.date}
                onChange={(e) => updateSlot(index, "date", e.target.value)}
                className="flex-1"
              />
              <select
                value={pref.timeSlot}
                onChange={(e) => updateSlot(index, "timeSlot", e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {timeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label} ({opt.hours})
                  </option>
                ))}
              </select>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeSlot(index)}
                className="text-muted-foreground hover:text-destructive"
                aria-label="Remove slot"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}

          {preferences.length < maxSlots && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={addSlot}
              className="text-primary"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add another time preference
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
