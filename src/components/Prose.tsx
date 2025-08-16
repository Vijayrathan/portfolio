import React from 'react'

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-invert prose-sky max-w-none">
      {children}
    </div>
  )
}


