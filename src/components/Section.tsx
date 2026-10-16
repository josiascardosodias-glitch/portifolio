import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  title?: string
  compact?: boolean
  children: ReactNode
}

export function Section({ id, title, compact = false, children }: SectionProps) {
  const sizing = compact ? 'gap-[18px] px-3 py-8 text-center' : 'p-4 md:h-[120vh] md:p-0'

  return (
    <section id={id} className={`flex flex-col items-center justify-center bg-bg ${sizing}`}>
      {title && <h1 className="mb-12 text-5xl font-bold">{title}</h1>}
      {children}
    </section>
  )
}
