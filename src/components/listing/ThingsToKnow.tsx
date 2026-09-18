import { CalendarX, ClipboardList, ShieldCheck } from "lucide-react";

export default function ThingsToKnow({
  cancellationPolicy,
  houseRules,
  safetyItems,
}: {
  cancellationPolicy: string;
  houseRules: string[];
  safetyItems: string[];
}) {
  const groups = [
    {
      icon: CalendarX,
      title: "Cancellation policy",
      items: [cancellationPolicy],
    },
    {
      icon: ClipboardList,
      title: "House rules",
      items: houseRules,
    },
    {
      icon: ShieldCheck,
      title: "Safety & property",
      items: safetyItems,
    },
  ];

  return (
    <div className="border-b border-black/10 py-6">
      <h2 className="mb-6 text-xl font-semibold">Things to know</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title}>
            <g.icon size={24} className="mb-3" />
            <p className="mb-2 font-medium">{g.title}</p>
            {g.items.map((item) => (
              <p key={item} className="mb-1 text-sm text-black/70">
                {item}
              </p>
            ))}
            <button className="mt-2 text-sm font-medium underline">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
