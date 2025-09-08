import React from "react";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className = "" }: ProseProps) {
  return (
    <div
      className={`prose prose-invert prose-gray-100 max-w-none prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-cyan-400 prose-strong:text-gray-200 prose-code:text-rose-300 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-blockquote:border-l-cyan-400 prose-blockquote:text-gray-300 prose-li:text-gray-300 prose-img:rounded-lg prose-img:border prose-img:border-gray-800 prose-hr:border-gray-800 prose-hr:my-8 prose-h1:text-2xl sm:text-3xl md:text-4xl prose-h2:text-xl sm:text-2xl md:text-3xl prose-h3:text-lg sm:text-xl md:text-2xl prose-p:text-sm sm:text-base prose-li:text-sm sm:text-base prose-a:text-sm sm:text-base prose-code:text-xs sm:text-sm ${className}`}
    >
      {children}
    </div>
  );
}


