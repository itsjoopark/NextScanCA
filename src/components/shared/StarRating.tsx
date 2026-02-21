import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  reviewCount: number;
  showCount?: boolean;
  size?: "sm" | "md";
}

export default function StarRating({
  rating,
  reviewCount,
  showCount = true,
  size = "sm",
}: StarRatingProps) {
  const starSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className="flex items-center gap-1.5">
      <Star className={cn(starSize, "fill-amber-400 text-amber-400")} />
      <span className={cn("font-medium", size === "sm" ? "text-sm" : "text-base")}>
        {rating.toFixed(1)}
      </span>
      {showCount && (
        <span className={cn("text-muted-foreground", size === "sm" ? "text-xs" : "text-sm")}>
          ({reviewCount} reviews)
        </span>
      )}
    </div>
  );
}
