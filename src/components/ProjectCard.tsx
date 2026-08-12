import React from "react";
import { motion } from "framer-motion";

export type CoverTheme = {
  /** Tailwind-independent raw colors so the gradient can be composed freely. */
  from: string;
  via: string;
  to: string;
  /** Accent used for the glyph strokes and the hover glow. */
  accent: string;
};

export const coverThemes: Record<string, CoverTheme> = {
  violet: { from: "#1e1b4b", via: "#4c1d95", to: "#7c3aed", accent: "#c4b5fd" },
  emerald: { from: "#052e2b", via: "#065f56", to: "#0d9488", accent: "#5eead4" },
  amber: { from: "#3b0d10", via: "#7c2d12", to: "#ea580c", accent: "#fdba74" },
  sky: { from: "#0c1b3a", via: "#0e4f8a", to: "#0284c7", accent: "#7dd3fc" },
  cyan: { from: "#08222b", via: "#0e5a6b", to: "#06b6d4", accent: "#67e8f9" },
  lime: { from: "#0d2a12", via: "#166534", to: "#4d9f2f", accent: "#bef264" },
  rose: { from: "#2b0a16", via: "#7f1d3a", to: "#be123c", accent: "#fda4af" },
};

/**
 * Abstract, code-flavoured marks. Each one is a plain stroked SVG so it stays
 * crisp at any size and costs a few hundred bytes instead of a 2 MB bitmap.
 */
const glyphs: Record<string, React.ReactNode> = {
  // Attention / transition matrix
  attention: (
    <g>
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={8 + c * 22}
            y={8 + r * 22}
            width="18"
            height="18"
            rx="3"
            fillOpacity={0.12 + ((r * 4 + c) % 7) * 0.11}
          />
        ))
      )}
    </g>
  ),
  // Knowledge-graph verification
  graph: (
    <g fill="none" strokeWidth="2.5" strokeLinecap="round">
      <path d="M20 78 L48 44 L84 62 M48 44 L40 12 M84 62 L92 26" />
      <circle cx="20" cy="78" r="7" fill="currentColor" />
      <circle cx="48" cy="44" r="9" fill="currentColor" />
      <circle cx="84" cy="62" r="7" fill="currentColor" />
      <circle cx="40" cy="12" r="5" fill="currentColor" />
      <circle cx="92" cy="26" r="5" fill="currentColor" />
    </g>
  ),
  // Low-rank adapters bolted onto a frozen stack
  adapter: (
    <g fill="none" strokeWidth="2.5" strokeLinecap="round">
      <rect x="10" y="14" width="54" height="14" rx="4" />
      <rect x="10" y="40" width="54" height="14" rx="4" />
      <rect x="10" y="66" width="54" height="14" rx="4" />
      <rect x="80" y="40" width="18" height="14" rx="4" fill="currentColor" />
      <path d="M64 21 H89 V40 M64 73 H89 V54" />
    </g>
  ),
  // Retrieval: query fanning into ranked chunks
  retrieval: (
    <g fill="none" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="18" cy="47" r="9" />
      <path d="M27 47 H44 M52 47 H62" />
      <rect x="62" y="12" width="36" height="16" rx="4" fillOpacity="0.35" />
      <rect x="62" y="39" width="36" height="16" rx="4" fill="currentColor" />
      <rect x="62" y="66" width="36" height="16" rx="4" fillOpacity="0.2" />
      <path d="M44 47 L62 20 M44 47 L62 74" strokeOpacity="0.5" />
    </g>
  ),
  // Degradation curve heading to failure
  curve: (
    <g fill="none" strokeWidth="2.5" strokeLinecap="round">
      <path d="M10 82 H100 M10 82 V10" strokeOpacity="0.45" />
      <path d="M14 22 C34 24 52 38 66 56 C74 66 82 74 96 78" />
      <path
        d="M14 34 C36 36 54 50 68 66 C76 74 84 78 96 80"
        strokeOpacity="0.4"
        strokeDasharray="5 5"
      />
      <circle cx="96" cy="78" r="5" fill="currentColor" stroke="none" />
    </g>
  ),
  // Temporal density grid
  grid: (
    <g>
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={6 + c * 20}
            y={16 + r * 22}
            width="16"
            height="18"
            rx="3"
            fillOpacity={0.14 + ((r * 5 + c * 3) % 6) * 0.13}
          />
        ))
      )}
    </g>
  ),
  // Habit loop / leaf-in-orbit
  loop: (
    <g fill="none" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="54" cy="47" r="30" strokeDasharray="6 7" />
      <path d="M54 62 C40 56 38 38 54 26 C70 38 68 56 54 62 Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M54 66 V32" />
    </g>
  ),
};

type ProjectCardProps = {
  title: string;
  description: string | string[];
  tags?: string[];
  href?: string;
  repo?: string;
  /** Key into `coverThemes`. Falls back to the cyan theme. */
  theme?: keyof typeof coverThemes;
  /** Key into `glyphs`. Used only when no `cover` render is supplied. */
  glyph?: keyof typeof glyphs;
  /**
   * Path to a rendered cover plot in /public/covers. These are produced by
   * scripts/generate_covers.py — real plots of what the project does.
   */
  cover?: string;
  /** Short label rendered on the cover, e.g. "2026 · NLP". */
  kicker?: string;
};

export function ProjectCard({
  title,
  description,
  tags = [],
  href,
  repo,
  theme = "cyan",
  glyph,
  cover,
  kicker,
}: ProjectCardProps) {
  const [showAllTags, setShowAllTags] = React.useState(false);
  const [coverLoaded, setCoverLoaded] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const navigateTo = href || repo;
  const t = coverThemes[theme] ?? coverThemes.cyan;

  // Detect mobile device
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onClick={() => {
        if (navigateTo) {
          window.location.assign(navigateTo);
        }
      }}
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 block z-0 min-h-[360px] sm:min-h-[420px] will-change-transform ${
        navigateTo ? "cursor-pointer" : ""
      }`}
      initial={{ y: isMobile ? 4 : 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: isMobile ? "tween" : "spring",
        stiffness: isMobile ? 0 : 120,
        damping: isMobile ? 0 : 20,
        duration: isMobile ? 0.6 : undefined,
        ease: isMobile ? "easeOut" : undefined,
      }}
    >
      {/* Gradient cover — replaces the old bitmap hero image */}
      <div className="relative w-full h-40 sm:h-48 md:h-52 overflow-hidden">
        {/* Base gradient */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(135deg, ${t.from} 0%, ${t.via} 52%, ${t.to} 100%)`,
          }}
        />
        {/* Mesh highlights */}
        <div
          className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            backgroundImage: `radial-gradient(60% 80% at 12% 8%, rgba(255,255,255,0.30), transparent 60%),
              radial-gradient(50% 70% at 92% 96%, ${t.accent}55, transparent 62%)`,
          }}
        />
        {/* Technical grid — only when the gradient is doing the work alone */}
        {!cover && (
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        )}
        {/* Rendered plot. Sits on the gradient, which doubles as its placeholder. */}
        {cover && (
          <>
            <img
              src={cover}
              alt={`${title} — rendered visualization`}
              loading="lazy"
              decoding="async"
              onLoad={() => setCoverLoaded(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] ${
                coverLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* Tints the plot toward the card's hue so the grid reads as one system */}
            <div
              className="absolute inset-0 mix-blend-soft-light opacity-70"
              style={{
                backgroundImage: `linear-gradient(135deg, ${t.via} 0%, ${t.to} 100%)`,
              }}
            />
          </>
        )}
        {/* Glyph */}
        {!cover && glyph && (
          <svg
            viewBox="0 0 108 94"
            aria-hidden
            className="absolute right-4 top-1/2 -translate-y-1/2 h-20 sm:h-24 w-auto text-white opacity-80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105"
            stroke="currentColor"
            fill="currentColor"
          >
            {glyphs[glyph]}
          </svg>
        )}
        {/* Bottom fade into the card body */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
        {kicker && (
          <span className="absolute left-3 sm:left-4 top-3 sm:top-4 rounded-full bg-black/35 px-2.5 py-1 text-[10px] sm:text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm border border-white/15">
            {kicker}
          </span>
        )}
      </div>

      <div className="p-4 sm:p-5 grid grid-rows-[auto_1fr] gap-2 h-full">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-1 line-clamp-2">
            {title}
          </h3>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sky-300 hover:underline inline-flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          )}
        </div>
        <div>
          {Array.isArray(description) ? (
            <ul className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3 sm:mb-2 list-disc pl-5 space-y-1">
              {description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3 sm:mb-2">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-2">
            {(showAllTags ? tags : tags.slice(0, 4)).map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/70 border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                {t}
              </span>
            ))}
            {tags.length > 4 && !showAllTags && (
              <button
                type="button"
                className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/60 border border-white/10 hover:border-white/20 hover:text-white transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowAllTags(true);
                }}
              >
                +{tags.length - 4}
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background:
            "radial-gradient(600px 200px at 50% 0%, rgba(56,189,248,0.15), transparent)",
        }}
      />
    </motion.div>
  );
}
