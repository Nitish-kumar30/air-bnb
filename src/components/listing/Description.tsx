"use client";

import { useState } from "react";

export default function Description({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-black/10 py-6">
      <p className="mb-2 text-sm text-black/50">
        Some info has been automatically translated.{" "}
        <button className="underline">Show original</button>
      </p>
      <p className={`whitespace-pre-line ${expanded ? "" : "line-clamp-4"}`}>
        {text}
      </p>
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-2 flex items-center gap-1 font-medium underline"
        >
          Show more <span aria-hidden>›</span>
        </button>
      )}
    </div>
  );
}
