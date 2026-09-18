const PALETTE = [
  "#ffd9df",
  "#ffe8cc",
  "#d9f2e6",
  "#dce8ff",
  "#f0dcff",
  "#fff3c4",
  "#d6f0f2",
  "#fddde6",
];

export default function PlaceholderImage({
  number,
  className = "",
}: {
  number: number;
  className?: string;
}) {
  const color = PALETTE[number % PALETTE.length];
  return (
    <div
      className={`flex items-center justify-center select-none ${className}`}
      style={{ backgroundColor: color }}
    >
      <span className="text-3xl font-semibold text-black/30">{number}</span>
    </div>
  );
}
