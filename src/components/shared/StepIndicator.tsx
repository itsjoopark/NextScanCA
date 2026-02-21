import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export default function StepIndicator({
  currentStep,
  totalSteps,
  labels,
}: StepIndicatorProps) {
  const progressValue = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full">
      {/* Progress bar */}
      <Progress value={progressValue} className="mb-3 h-2" />

      {/* Step labels */}
      <div className="flex justify-between">
        {labels.map((label, i) => (
          <span
            key={label}
            className={cn(
              "text-xs font-medium transition-colors",
              i <= currentStep ? "text-primary" : "text-muted-foreground"
            )}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
