import { ChevronLeft, ChevronRight, Rows3 } from "lucide-react";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function MonthGrid({
  monthLabel,
  startWeekday,
  daysInMonth,
  selectedStart,
  selectedEnd,
  showPrev,
  showNext,
}: {
  monthLabel: string;
  startWeekday: number;
  daysInMonth: number;
  selectedStart?: number;
  selectedEnd?: number;
  showPrev?: boolean;
  showNext?: boolean;
}) {
  const cells: (number | null)[] = [
    ...Array(startWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="flex-1">
      <div className="mb-4 flex items-center justify-between">
        {showPrev ? (
          <button className="rounded-full p-1 hover:bg-black/5">
            <ChevronLeft size={18} />
          </button>
        ) : (
          <span className="w-6" />
        )}
        <p className="font-medium">{monthLabel}</p>
        {showNext ? (
          <button className="rounded-full p-1 hover:bg-black/5">
            <ChevronRight size={18} />
          </button>
        ) : (
          <span className="w-6" />
        )}
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
        {WEEKDAYS.map((d, i) => (
          <span key={i} className="text-black/50">
            {d}
          </span>
        ))}
        {cells.map((day, i) => {
          const inRange =
            day && selectedStart && selectedEnd
              ? day >= selectedStart && day <= selectedEnd
              : false;
          const isEdge = day === selectedStart || day === selectedEnd;
          return (
            <div key={i} className="flex items-center justify-center py-1">
              {day && (
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    isEdge
                      ? "bg-black text-white"
                      : inRange
                        ? "bg-black/5"
                        : ""
                  }`}
                >
                  {day}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar({
  nights,
  location,
  rangeLabel,
}: {
  nights: number;
  location: string;
  rangeLabel: string;
}) {
  return (
    <div className="border-b border-black/10 py-6">
      <h2 className="text-xl font-semibold">
        {nights} nights in {location.split(",")[0]}
      </h2>
      <p className="mb-6 text-black/60">{rangeLabel}</p>

      <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
        <MonthGrid
          monthLabel="October 2026"
          startWeekday={4}
          daysInMonth={31}
          selectedStart={18}
          selectedEnd={23}
          showPrev
        />
        <MonthGrid
          monthLabel="November 2026"
          startWeekday={0}
          daysInMonth={30}
          showNext
        />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button className="rounded-full border border-black/20 p-2 hover:bg-black/5">
          <Rows3 size={16} />
        </button>
        <button className="font-medium underline">Clear dates</button>
      </div>
    </div>
  );
}
