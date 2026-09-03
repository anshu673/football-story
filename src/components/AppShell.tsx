import type { ReactNode } from "react";
import stadiumNight from "@/assets/stadium-night.jpg";
import stadiumDay from "@/assets/stadium-day.jpg";

/**
 * Full-bleed stadium backdrop with a fixed veil + pitch grid.
 * Every screen's content renders in its own layer above the photo,
 * so cards, text and icons never blend into the image.
 */
export function AppShell({
  children,
  className = "",
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-background ${light ? "theme-light" : ""}`}
    >
      {/* layer 0 — photograph */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${light ? stadiumDay : stadiumNight})` }}
      />
      {/* layer 1 — veil so content stays legible */}
      <div aria-hidden className="veil pointer-events-none fixed inset-0" />
      {/* layer 2 — pitch grid texture */}
      <div aria-hidden className="grid-lines pointer-events-none fixed inset-0 opacity-60" />

      {/* layer 3 — content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[430px] flex-col">
        <div className={`flex flex-1 flex-col ${className}`}>{children}</div>
      </div>
    </div>
  );
}
