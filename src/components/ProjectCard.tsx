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
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition"
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="w-full h-[50dvh] overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-white/70 line-clamp-2">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4 text-sm text-sky-300">
          {/* {href && href !== "#" && (
            <a href={href} className="hover:underline">
              Live
            </a>
          )} */}
          <a href={repo} className="hover:underline">
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
