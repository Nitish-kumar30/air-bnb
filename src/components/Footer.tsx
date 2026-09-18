import { Globe } from "lucide-react";

const COLUMNS = [
  {
    title: "Support",
    links: ["Help Centre", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options", "Report neighbourhood concern"],
  },
  {
    title: "Hosting",
    links: ["Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibly", "Airbnb-friendly apartments"],
  },
  {
    title: "Airbnb",
    links: ["Newsroom", "New features", "Careers", "Investors", "Gift cards", "Airbnb.org emergency stays"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-neutral-50">
      <div className="mx-auto max-w-[1760px] px-6 py-10 lg:px-20">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-sm font-semibold">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-black/70 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1760px] flex-col-reverse items-center justify-between gap-4 px-6 py-6 text-sm text-black/70 sm:flex-row lg:px-20">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>© 2026 Airbnb Clone, Inc.</span>
            <span aria-hidden>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span aria-hidden>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span aria-hidden>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 font-medium hover:underline">
              <Globe size={16} />
              English (IN)
            </button>
            <button className="font-medium hover:underline">₹ INR</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
