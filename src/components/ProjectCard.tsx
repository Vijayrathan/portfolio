import React from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  href?: string;
  repo?: string;
};

export function ProjectCard({
  title,
  description,
  tags = [],
  image = "/public/placeholder.jpg",
  href,
  repo = "#",
}: ProjectCardProps) {
  return (
    <motion.a
      href={href || repo}
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 block"
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="w-full h-48 sm:h-56 md:h-[50dvh] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-1 line-clamp-1">{title}</h3>
        <p className="text-xs sm:text-sm text-white/70 line-clamp-3 sm:line-clamp-2 leading-relaxed mb-3 sm:mb-2">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-2">
          {tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/70 border border-white/10 hover:border-white/20 transition-colors duration-300"
            >
              {t}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/50">
              +{tags.length - 4}
            </span>
          )}
        </div>
        <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm text-sky-300">
          {/* {href && href !== "#" && (
            <a href={href} className="hover:underline">
              Live
            </a>
          )} */}
          <a 
            href={repo} 
            className="hover:underline flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background:
            "radial-gradient(600px 200px at 50% 0%, rgba(56,189,248,0.15), transparent)",
        }}
      />
    </motion.a>
  );
}
