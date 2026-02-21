"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import data from "@/data/nextscan-data.json";
import { Clinic, getFilteredClinics } from "@/lib/clinics";
import RegionFilter from "./RegionFilter";
import ClinicCard from "./ClinicCard";

interface ClinicListProps {
  scanType: string | null;
  selectedClinicId: string | null;
  onSelectClinic: (clinicId: string) => void;
}

const allClinics = data.step4_clinics.records as unknown as Clinic[];
const defaultRegions = ["CA", "US", "ON", "MX"];

export default function ClinicList({
  scanType,
  selectedClinicId,
  onSelectClinic,
}: ClinicListProps) {
  const [selectedRegions, setSelectedRegions] =
    useState<string[]>(defaultRegions);
  const [showAll, setShowAll] = useState(false);

  const toggleRegion = (regionId: string) => {
    setSelectedRegions((prev) =>
      prev.includes(regionId)
        ? prev.filter((r) => r !== regionId)
        : [...prev, regionId]
    );
  };

  const filtered = getFilteredClinics(allClinics, scanType, selectedRegions);
  const displayedClinics = showAll ? filtered : filtered.slice(0, 6);

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        Choose your clinic
      </h2>
      <p className="text-sm leading-6 text-muted-foreground mb-1">
        {scanType && scanType !== "unsure"
          ? `Showing ${scanType} clinics`
          : "Showing all clinics"}{" "}
        sorted by distance from Toronto.
      </p>
      <p className="text-xs leading-5 text-muted-foreground mb-6">
        You pay the clinic directly. NextScan&apos;s coordination service is free.
      </p>

      {/* Region filters */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">
          Filter by region:
        </p>
        <RegionFilter
          selectedRegions={selectedRegions}
          onToggle={toggleRegion}
        />
      </div>

      {/* Clinic count */}
      <p className="text-xs text-muted-foreground mb-4">
        {filtered.length} clinic{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium">No clinics found</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
            Try expanding your region filters to see more options.
            {scanType === "CT" &&
              selectedRegions.length === 1 &&
              selectedRegions[0] === "ON" &&
              " No CT clinics are currently available in Ontario. The nearest CT options are in Quebec and New York."}
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setSelectedRegions(defaultRegions)}
          >
            Show all regions
          </Button>
        </div>
      )}

      {/* Clinic cards */}
      <div className="space-y-4">
        {displayedClinics.map((clinic) => (
          <ClinicCard
            key={clinic.id}
            clinic={clinic}
            isSelected={selectedClinicId === clinic.id}
            onSelect={onSelectClinic}
          />
        ))}
      </div>

      {/* Show more/less */}
      {filtered.length > 6 && (
        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? "Show fewer clinics"
              : `Show all ${filtered.length} clinics`}
          </Button>
        </div>
      )}
    </div>
  );
}
