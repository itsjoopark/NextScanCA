"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import data from "@/data/nextscan-data.json";
import StarRating from "@/components/shared/StarRating";
import SchedulePicker, { SchedulePreference } from "./SchedulePicker";
import { Clinic } from "@/lib/clinics";

interface IntakeFormProps {
  email: string;
  selectedClinic: Clinic | null;
  onSubmit: (formData: IntakeFormData) => void;
}

export interface IntakeFormData {
  email: string;
  phone: string;
  hasRequisition: boolean | null;
  requisitionFile: File | null;
  scanTimeline: string | null;
  schedulePreferences: SchedulePreference[];
  medicalScreening: {
    hasPacemaker: boolean | null;
    over250lbs: boolean | null;
    over6ft4: boolean | null;
    isPregnant: boolean | null;
  };
}

const screeningQuestions = data.step6_intakeForm.medicalScreeningQuestions;

export default function IntakeForm({
  email: initialEmail,
  selectedClinic,
  onSubmit,
}: IntakeFormProps) {
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState("");
  const [hasRequisition, setHasRequisition] = useState<boolean | null>(null);
  const [requisitionFile, setRequisitionFile] = useState<File | null>(null);
  const [scanTimeline, setScanTimeline] = useState<string | null>(null);
  const [schedulePreferences, setSchedulePreferences] = useState<
    SchedulePreference[]
  >([]);
  const [screening, setScreening] = useState<
    Record<string, boolean | null>
  >({
    hasPacemaker: null,
    over250lbs: null,
    over6ft4: null,
    isPregnant: null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!email || !email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }
    if (hasRequisition === null) {
      newErrors.hasRequisition =
        "Please indicate if you have a requisition";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      email,
      phone,
      hasRequisition,
      requisitionFile,
      scanTimeline,
      schedulePreferences,
      medicalScreening: {
        hasPacemaker: screening.hasPacemaker,
        over250lbs: screening.over250lbs,
        over6ft4: screening.over6ft4,
        isPregnant: screening.isPregnant,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight mb-2">
          Complete your request
        </h2>
        <p className="text-sm leading-6 text-muted-foreground">
          Fill in your details and we&apos;ll have a coordinator confirm
          availability within 1 business day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Contact Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={cn(errors.email && "border-destructive")}
                required
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number{" "}
                <span className="text-muted-foreground font-normal">
                  (optional but recommended)
                </span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(416) 555-0123"
              />
            </div>
          </div>

          <Separator />

          {/* Requisition */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Requisition
            </h3>

            <div>
              <p className="text-sm mb-3">
                Do you have a requisition for this scan?{" "}
                <span className="text-destructive">*</span>
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setHasRequisition(true)}
                  className={cn(
                    "flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors",
                    hasRequisition === true
                      ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20"
                      : "border-border text-muted-foreground hover:border-primary"
                  )}
                >
                  Yes, I have one
                </button>
                <button
                  type="button"
                  onClick={() => setHasRequisition(false)}
                  className={cn(
                    "flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors",
                    hasRequisition === false
                      ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20"
                      : "border-border text-muted-foreground hover:border-primary"
                  )}
                >
                  No, not yet
                </button>
              </div>
              {errors.hasRequisition && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.hasRequisition}
                </p>
              )}
            </div>

            {/* Conditional: file upload + timeline */}
            {hasRequisition === true && (
              <div className="space-y-4 pl-4 border-l-2 border-primary/20">
                <div className="space-y-2">
                  <Label>
                    Upload your requisition{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </Label>
                  <Input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.heic,.webp"
                    onChange={(e) =>
                      setRequisitionFile(e.target.files?.[0] || null)
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    PDF, JPG, PNG, HEIC, or WebP. Max 10MB.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">
                    How soon do you need your scan?
                  </p>
                  <div className="space-y-2">
                    {[
                      "As soon as possible",
                      "Within the next 2 weeks",
                      "Within the next month",
                      "I'm flexible / no rush",
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="scanTimeline"
                          value={option}
                          checked={scanTimeline === option}
                          onChange={(e) => setScanTimeline(e.target.value)}
                          className="h-4 w-4 text-primary accent-primary"
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Separator />

          {/* Schedule preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Schedule Preferences
            </h3>
            <SchedulePicker
              preferences={schedulePreferences}
              onChange={setSchedulePreferences}
            />
          </div>

          <Separator />

          {/* Medical screening */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Medical Screening
            </h3>
            <p className="text-sm text-muted-foreground">
              These help the clinic prepare for your visit. All questions are
              optional.
            </p>

            <div className="space-y-3">
              {screeningQuestions.map((q) => (
                <div
                  key={q.id}
                  className="flex items-center justify-between gap-4 p-4 bg-muted rounded-lg"
                >
                  <p className="text-sm">{q.question}</p>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      type="button"
                      size="sm"
                      variant={screening[q.id] === true ? "default" : "outline"}
                      onClick={() =>
                        setScreening((s) => ({ ...s, [q.id]: true }))
                      }
                    >
                      Yes
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant={screening[q.id] === false ? "default" : "outline"}
                      onClick={() =>
                        setScreening((s) => ({ ...s, [q.id]: false }))
                      }
                    >
                      No
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" className="w-full text-lg py-6">
            Submit Request
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            No obligation. A coordinator will confirm details before you commit.
          </p>
        </div>

        {/* Social proof sidebar */}
        {selectedClinic && (
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-muted rounded-lg border border-border p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Your Selected Clinic
              </p>
              <h4 className="text-lg font-medium">
                {selectedClinic.name}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                {selectedClinic.address.city}, {selectedClinic.address.region}
              </p>

              <div className="mt-3">
                <StarRating
                  rating={selectedClinic.reviews.rating}
                  reviewCount={selectedClinic.reviews.reviewCount}
                />
              </div>

              {/* Sample reviews */}
              <div className="mt-4 space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Patient Reviews
                </p>
                {selectedClinic.reviews.sampleReviews.map((review, i) => (
                  <blockquote
                    key={i}
                    className="text-sm text-muted-foreground italic border-l-2 border-border pl-3"
                  >
                    &ldquo;{review}&rdquo;
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
