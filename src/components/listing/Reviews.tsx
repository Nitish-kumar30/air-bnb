"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { CategoryRating, HighlightTag, RatingBar, Review } from "@/lib/types";
import { Icon } from "@/lib/icon-map";

function RatingDistribution({ bars }: { bars: RatingBar[] }) {
  return (
    <div>
      <p className="mb-2 font-medium">Overall rating</p>
      <div className="space-y-1.5">
        {bars.map((b) => (
          <div key={b.stars} className="flex items-center gap-2">
            <span className="w-2 text-xs text-black/60">{b.stars}</span>
            <div className="h-1 flex-1 rounded-full bg-black/10">
              <div
                className="h-1 rounded-full bg-black"
                style={{ width: `${b.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 160;

  return (
    <div>
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-200 font-medium">
          {review.avatarInitial}
        </div>
        <div>
          <p className="font-medium leading-tight">{review.name}</p>
          <p className="text-xs text-black/60">{review.timeOnAirbnb}</p>
        </div>
      </div>
      <div className="mb-1 flex items-center gap-1 text-xs text-black/70">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={10} className="fill-black" />
        ))}
        <span>· {review.date}</span>
      </div>
      <p className={expanded || !isLong ? "" : "line-clamp-3"}>
        {review.text}
      </p>
      {isLong && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-1 font-medium underline"
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default function Reviews({
  rating,
  reviewCount,
  categoryRatings,
  ratingBars,
  highlightTags,
  reviews,
}: {
  rating: number;
  reviewCount: number;
  categoryRatings: CategoryRating[];
  ratingBars: RatingBar[];
  highlightTags: HighlightTag[];
  reviews: Review[];
}) {
  return (
    <div id="reviews" className="border-b border-black/10 py-6">
      <div className="mb-10 flex flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-4 text-6xl font-semibold">
          <span aria-hidden>🥇</span>
          {rating.toFixed(2)}
          <span aria-hidden>🥇</span>
        </div>
        <h2 className="text-2xl font-semibold">Guest favourite</h2>
        <p className="mt-2 max-w-md text-black/70">
          This home is a guest favourite based on ratings, reviews and
          reliability
        </p>
        <button className="mt-2 font-medium underline">
          How reviews work
        </button>
      </div>

      <div className="mb-10 flex flex-wrap gap-x-8 gap-y-8">
        <div className="w-[45%] sm:w-36">
          <RatingDistribution bars={ratingBars} />
        </div>
        {categoryRatings.map((c) => (
          <div key={c.label} className="w-[45%] sm:w-24">
            <p className="mb-2 font-medium">{c.label}</p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">{c.score.toFixed(1)}</span>
              <Icon name={c.icon} size={18} />
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {highlightTags.map((t) => (
          <span
            key={t.label}
            className="flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm"
          >
            <Icon name={t.icon} size={16} />
            {t.label} <span className="text-black/50">{t.count}</span>
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

      <button className="mt-8 rounded-lg border border-black px-5 py-3 text-sm font-medium hover:bg-black/5">
        Show all {reviewCount} reviews
      </button>
    </div>
  );
}
