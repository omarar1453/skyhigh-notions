import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  className?: string;
}

export default function StarRating({
  rating,
  reviewCount,
  size = "md",
  showCount = true,
  className,
}: StarRatingProps) {
  const sizes = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              sizes[size],
              star <= Math.floor(rating)
                ? "fill-amber-400 text-amber-400"
                : star <= rating
                  ? "fill-amber-400/50 text-amber-400"
                  : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
      </div>
      <span className={cn("font-semibold text-foreground", textSizes[size])}>
        {rating}
      </span>
      {showCount && reviewCount !== undefined && (
        <span className={cn("text-foreground-muted", textSizes[size])}>
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
