"use client";

import { MapPin, ChevronRight, Check, Globe, Phone } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/shared/StarRating";
import { cn } from "@/lib/utils";
import {
  Clinic,
  getClinicDistance,
  getTravelDisplay,
  getReviewUrl,
} from "@/lib/clinics";

interface ClinicCardProps {
  clinic: Clinic;
  isSelected: boolean;
  onSelect: (clinicId: string) => void;
}

export default function ClinicCard({
  clinic,
  isSelected,
  onSelect,
}: ClinicCardProps) {
  const distance = getClinicDistance(clinic);
  const travelDisplay = getTravelDisplay(distance);
  const isOntario = clinic.region_code === "ON";
  const reviewUrl = getReviewUrl(clinic);

  return (
    <Card
      className={cn(
        "cursor-pointer transition-colors p-6",
        isSelected
          ? "border-primary ring-2 ring-primary/20"
          : "hover:border-primary"
      )}
    >
      <CardHeader className="p-0">
        {/* Ontario badges */}
        {isOntario && (
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge variant="secondary">Full Body Screening</Badge>
            <Badge variant="outline">
              Private pay · From <span className="font-mono">$2,500+</span> CAD
            </Badge>
          </div>
        )}

        {/* Header: name + rating */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium leading-tight">
            {clinic.name}
          </h3>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 hover:opacity-80"
          >
            <StarRating
              rating={clinic.reviews.rating}
              reviewCount={clinic.reviews.reviewCount}
            />
          </a>
        </div>
      </CardHeader>

      <CardContent className="p-0 pt-2">
        {/* Location + travel */}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span>
            {clinic.address.city}, {clinic.address.region}
          </span>
          <span className="text-border">·</span>
          <span>{travelDisplay}</span>
        </div>

        {/* Modality badges */}
        <div className="mt-3 flex gap-2">
          {clinic.modalities.map((mod) => (
            <Badge key={mod} variant="secondary">
              {mod}
            </Badge>
          ))}
        </div>

        {/* Sample review */}
        {clinic.reviews.sampleReviews[0] && (
          <blockquote className="mt-3 text-sm text-muted-foreground italic border-l-2 border-border pl-3">
            &ldquo;{clinic.reviews.sampleReviews[0]}&rdquo;
          </blockquote>
        )}

        {/* Footer: links + CTA */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {clinic.contact.website && (
              <a
                href={clinic.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium"
              >
                <Globe className="h-3.5 w-3.5" />
                Website
              </a>
            )}
            {clinic.contact.phone && (
              <a
                href={`tel:${clinic.contact.phone}`}
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium"
              >
                <Phone className="h-3.5 w-3.5" />
                {clinic.contact.phone}
              </a>
            )}
            {!clinic.contact.website && !clinic.contact.phone && (
              <span className="text-sm text-muted-foreground">
                Contact via NextScan
              </span>
            )}
          </div>

          <Button
            onClick={() => onSelect(clinic.id)}
            size="sm"
          >
            {isSelected ? (
              <>
                <Check className="h-4 w-4 mr-1.5" />
                Selected
              </>
            ) : (
              <>
                Select Clinic
                <ChevronRight className="h-4 w-4 ml-1.5" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
