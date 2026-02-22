"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="NextScan home">
            <Image
              src="/nextscan.svg"
              alt="NextScan"
              width={142}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#why-nextscan"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Why NextScan
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Button asChild>
              <Link href="/booking">Find Available Scans</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-3">
              <Link
                href="/#how-it-works"
                className={cn(
                  "px-3 py-2 text-sm font-medium text-muted-foreground",
                  "hover:text-foreground hover:bg-accent rounded-lg"
                )}
                onClick={() => setMobileOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/#why-nextscan"
                className={cn(
                  "px-3 py-2 text-sm font-medium text-muted-foreground",
                  "hover:text-foreground hover:bg-accent rounded-lg"
                )}
                onClick={() => setMobileOpen(false)}
              >
                Why NextScan
              </Link>
              <Link
                href="/#faq"
                className={cn(
                  "px-3 py-2 text-sm font-medium text-muted-foreground",
                  "hover:text-foreground hover:bg-accent rounded-lg"
                )}
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/privacy"
                className={cn(
                  "px-3 py-2 text-sm font-medium text-muted-foreground",
                  "hover:text-foreground hover:bg-accent rounded-lg"
                )}
                onClick={() => setMobileOpen(false)}
              >
                Privacy
              </Link>
              <div className="px-3 mt-2">
                <Button asChild className="w-full">
                  <Link href="/booking" onClick={() => setMobileOpen(false)}>
                    Find Available Scans
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
