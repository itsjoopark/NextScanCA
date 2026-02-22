"use client";

import { useState } from "react";

export default function GlowPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      className={`landing-panel ${className ?? ""}`}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onPointerLeave={() => setPos(null)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: pos ? 1 : 0,
          background: pos
            ? `radial-gradient(900px circle at ${pos.x}px ${pos.y}px, rgba(177,219,219,0.3), transparent 70%)`
            : "none",
        }}
      />
      {children}
    </div>
  );
}
