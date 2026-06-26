export const ACCENT = "#2563eb";
export const ACCENT_VARIANTS = ["#2563eb", "#3b82f6", "#60a5fa", "#1d4ed8"] as const;
export const BG_BASE = "rgba(2,8,23,1)";
export const CONTAINER_WIDE = "max-w-[1440px]";
export const CONTAINER_MAIN = "max-w-7xl";
export const CONTAINER_NARROW = "max-w-5xl";

export const GLASS_CARD_STYLE = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
  border: "1px solid rgba(255,255,255,0.07)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(37,99,235,0.1)",
} as const;
