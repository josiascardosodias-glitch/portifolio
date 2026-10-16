import type { ReactNode } from 'react'

type CardProps = {
  className?: string
  children: ReactNode
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div
      className={`box-content w-4/5 rounded-2xl border border-accent bg-card p-8 backdrop-blur-md transition-all duration-300 ease-in hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] [&_h2]:mb-5 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:text-[1.2rem] [&_p]:leading-relaxed ${className}`}
    >
      {children}
    </div>
  )
}
