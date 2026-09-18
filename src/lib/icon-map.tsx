import {
  Waves,
  Fan,
  DoorOpen,
  Utensils,
  Wifi,
  Briefcase,
  Car,
  Bath,
  PawPrint,
  Camera,
  ShieldAlert,
  Flame,
  SprayCan,
  CircleCheck,
  Search,
  MessageCircle,
  Map,
  Tag,
  BedDouble,
  Gift,
  Sparkles,
  Image as ImageIcon,
  LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  waves: Waves,
  fan: Fan,
  "door-open": DoorOpen,
  utensils: Utensils,
  wifi: Wifi,
  briefcase: Briefcase,
  car: Car,
  bath: Bath,
  "paw-print": PawPrint,
  camera: Camera,
  "shield-alert": ShieldAlert,
  flame: Flame,
  "spray-can": SprayCan,
  "circle-check": CircleCheck,
  search: Search,
  "message-circle": MessageCircle,
  map: Map,
  tag: Tag,
  "bed-double": BedDouble,
  gift: Gift,
  sparkles: Sparkles,
  image: ImageIcon,
};

export function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Sparkles;
  return <Cmp size={size} className={className} />;
}
