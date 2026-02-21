"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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

interface ConfirmationProps {
  submission: SubmissionData;
}

export default function Confirmation({ submission }: ConfirmationProps) {
  const [question, setQuestion] = useState("");
  const [questionSent, setQuestionSent] = useState(false);
  const [refNumber] = useState(
    () => `NS-${Date.now().toString(36).toUpperCase()}`
  );

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // MVP: just show confirmation
    setQuestionSent(true);
    setQuestion("");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Success header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
          <CheckCircle className="h-10 w-10 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Request Submitted!
        </h1>
        <p className="mt-2 text-muted-foreground">
          Reference: <span className="font-mono text-sm font-medium">{refNumber}</span>
        </p>
      </div>

      {/* What happens next */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">What Happens Next</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              icon: "✅",
              text: "We've received your request",
            },
            {
              icon: "📞",
              text: "A coordinator will confirm availability and pricing within 1 business day",
            },
            {
              icon: "📧",
              text: `We'll reach out by email${submission.phone ? " (and phone)" : ""}`,
            },
            {
              icon: "🤝",
              text: "You choose — no obligation until you confirm",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-lg">{item.icon}</span>
              <p className="text-sm leading-6">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Scan details */}
      <Card>
        <CardContent className="divide-y divide-border">
          <div className="pb-4">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Scan Details
            </h3>
            <div>
              <p className="font-medium">
                {submission.scanType === "unsure"
                  ? "Not Sure (coordinator will help)"
                  : `${submission.scanType} Scan`}
              </p>
              {submission.bodyAreaName && (
                <p className="text-sm text-muted-foreground">
                  {submission.bodyAreaName}
                </p>
              )}
            </div>
          </div>

          {/* Selected clinic */}
          {submission.clinic && (
            <div className="py-4">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Selected Clinic
              </h3>
              <p className="font-medium">
                {submission.clinic.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {submission.clinic.city}, {submission.clinic.region}
              </p>
              <p className="text-sm text-muted-foreground mt-1 font-mono">
                ★ {submission.clinic.rating.toFixed(1)} (
                {submission.clinic.reviewCount} reviews)
              </p>
            </div>
          )}

          {/* Schedule preferences */}
          {submission.schedulePreferences.length > 0 && (
            <div className="py-4">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Preferred Times
              </h3>
              <div className="space-y-1">
                {submission.schedulePreferences
                  .filter((p) => p.date)
                  .map((pref, i) => (
                    <p key={i} className="text-sm">
                      {new Date(pref.date + "T12:00:00").toLocaleDateString(
                        "en-CA",
                        {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        }
                      )}{" "}
                      — {pref.timeSlot}
                    </p>
                  ))}
              </div>
            </div>
          )}

          {/* Contact */}
          <div className="pt-4">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Your Contact
            </h3>
            <p className="text-sm">{submission.email}</p>
            {submission.phone && (
              <p className="text-sm">{submission.phone}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Question form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Have a question about your request?</CardTitle>
        </CardHeader>
        <CardContent>
          {questionSent ? (
            <p className="text-sm text-emerald-600 font-medium">
              Thanks! We&apos;ll get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleQuestionSubmit} className="space-y-3">
              <Textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here..."
                rows={3}
              />
              <Button
                type="submit"
                disabled={!question.trim()}
                size="sm"
              >
                Send Question
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Back to home */}
      <div className="text-center">
        <Button variant="link" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to NextScan.ca
          </Link>
        </Button>
      </div>
    </div>
  );
}
