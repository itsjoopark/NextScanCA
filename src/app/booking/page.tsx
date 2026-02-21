"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import data from "@/data/nextscan-data.json";
import { Clinic } from "@/lib/clinics";
import StepIndicator from "@/components/shared/StepIndicator";
import TrustBar from "@/components/shared/TrustBar";
import ScanTypeSelector from "@/components/booking/ScanTypeSelector";
import BodyAreaGrid from "@/components/booking/BodyAreaGrid";
import ClinicList from "@/components/booking/ClinicList";
import IntakeForm, { IntakeFormData } from "@/components/booking/IntakeForm";

const allClinics = data.step4_clinics.records as unknown as Clinic[];
const bodyAreaDisplayNames = data.step7_confirmation
  .bodyAreaDisplayNames as Record<string, string>;

const STEP_LABELS = ["Choose Scan", "Pick Clinic", "Your Info"];

export default function BookingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  // Step 1 state
  const [scanType, setScanType] = useState<string | null>(null);
  const [bodyArea, setBodyArea] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  // Step 2 state
  const [selectedClinicId, setSelectedClinicId] = useState<string | null>(null);

  const selectedClinic = selectedClinicId
    ? allClinics.find((c) => c.id === selectedClinicId) || null
    : null;

  // Handlers
  const handleScanTypeSelect = useCallback((type: string) => {
    setScanType(type);
    setBodyArea(null); // Reset body area when scan type changes
  }, []);

  const handleBodyAreaSelect = useCallback(
    (area: string) => {
      setBodyArea(area);
      // Auto-advance after 300ms
      setTimeout(() => {
        setCurrentStep(1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    },
    []
  );

  const handleClinicSelect = useCallback(
    (clinicId: string) => {
      setSelectedClinicId(clinicId);
      // Auto-advance after 300ms
      setTimeout(() => {
        setCurrentStep(2);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    },
    []
  );

  const handleFormSubmit = useCallback(
    (formData: IntakeFormData) => {
      // In MVP, store submission data in sessionStorage and redirect to confirmation
      const submission = {
        scanType,
        bodyArea,
        bodyAreaName: bodyArea
          ? bodyAreaDisplayNames[bodyArea] || bodyArea
          : null,
        clinic: selectedClinic
          ? {
              name: selectedClinic.name,
              city: selectedClinic.address.city,
              region: selectedClinic.address.region,
              rating: selectedClinic.reviews.rating,
              reviewCount: selectedClinic.reviews.reviewCount,
            }
          : null,
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      sessionStorage.setItem("nextscan_submission", JSON.stringify(submission));
      router.push("/confirmation");
    },
    [scanType, bodyArea, selectedClinic, router]
  );

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <TrustBar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Step indicator */}
        <div className="mb-8">
          <StepIndicator
            currentStep={currentStep}
            totalSteps={3}
            labels={STEP_LABELS}
          />
        </div>

        {/* Back button */}
        {currentStep > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={goBack}
            className="mb-6 text-muted-foreground"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
        )}

        {/* Step 1: Scan Type + Body Area */}
        {currentStep === 0 && (
          <div className="space-y-8">
            <ScanTypeSelector
              selectedType={scanType}
              onSelect={handleScanTypeSelect}
            />

            {scanType && (
              <>
                <Separator />
                <BodyAreaGrid
                  scanType={scanType}
                  selectedArea={bodyArea}
                  onSelect={handleBodyAreaSelect}
                />
              </>
            )}

            {/* Optional email capture */}
            {scanType && (
              <div className="bg-muted rounded-lg p-6 border border-border">
                <div className="space-y-2">
                  <Label htmlFor="early-email">
                    Email{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional — we&apos;ll email your scan options)
                    </span>
                  </Label>
                  <Input
                    id="early-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Clinic Selection */}
        {currentStep === 1 && (
          <div>
            {/* Selection summary */}
            <div className={cn(
              "bg-primary/5 rounded-lg p-4 mb-6 flex items-center gap-3 border border-primary/20"
            )}>
              <ClipboardList className="h-5 w-5 text-primary flex-shrink-0" />
              <p className="text-sm">
                <span className="font-medium">
                  {scanType === "unsure" ? "Not sure" : scanType}
                </span>
                {bodyArea && (
                  <>
                    {" · "}
                    <span className="font-medium">
                      {bodyAreaDisplayNames[bodyArea] || bodyArea}
                    </span>
                  </>
                )}
              </p>
            </div>

            <ClinicList
              scanType={scanType}
              selectedClinicId={selectedClinicId}
              onSelectClinic={handleClinicSelect}
            />
          </div>
        )}

        {/* Step 3: Intake Form */}
        {currentStep === 2 && (
          <IntakeForm
            email={email}
            selectedClinic={selectedClinic}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </>
  );
}
