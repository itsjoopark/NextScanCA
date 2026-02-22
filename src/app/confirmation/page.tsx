"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import Confirmation from "@/components/booking/Confirmation";

interface SubmissionData {
  scanType: string | null;
  bodyArea: string | null;
  bodyAreaName: string | null;
  clinic: {
    name: string;
    city: string;
    region: string;
    rating: number;
    reviewCount: number;
  } | null;
  email: string;
  phone: string;
  schedulePreferences: Array<{ date: string; timeSlot: string }>;
  submittedAt: string;
}

let _cachedRaw: string | null = null;
let _cachedParsed: SubmissionData | null = null;

function getSubmission() {
  if (typeof window === "undefined") return null;
  const stored = sessionStorage.getItem("nextscan_submission");
  if (stored !== _cachedRaw) {
    _cachedRaw = stored;
    _cachedParsed = stored ? (JSON.parse(stored) as SubmissionData) : null;
  }
  return _cachedParsed;
}

function subscribe(callback: () => void) {
  // sessionStorage doesn't fire events in the same tab, but we only need
  // the initial read — this satisfies the useSyncExternalStore contract.
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function ConfirmationPage() {
  const router = useRouter();
  const submission = useSyncExternalStore(subscribe, getSubmission, () => null);

  useEffect(() => {
    if (submission === null && typeof window !== "undefined") {
      const stored = sessionStorage.getItem("nextscan_submission");
      if (!stored) {
        router.push("/booking");
      }
    }
  }, [submission, router]);

  if (submission === null) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <Skeleton className="w-20 h-20 rounded-full" />
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-48" />
        </div>
        <Skeleton className="h-40 w-full rounded-lg" />
        <Skeleton className="h-60 w-full rounded-lg" />
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 py-12">
      <Confirmation submission={submission} />
    </div>
  );
}
