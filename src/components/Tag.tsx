import type { ReactNode } from 'react'

type TagsProps = {
  items: string[]
  hoverable?: boolean
}

export function Tags({ items, hoverable = false }: TagsProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <Tag key={item} hoverable={hoverable}>
          {item}
        </Tag>
      ))}
    </div>
  )
}

type TagProps = {
  hoverable?: boolean
  children: ReactNode
}

export function Tag({ hoverable = false, children }: TagProps) {
  const hover = hoverable ? 'transition-all duration-200 ease-in hover:-translate-y-1' : ''

  return (
    <span className={`rounded-lg border border-accent bg-card px-3.5 py-2 text-sm ${hover}`}>
      {children}
    </span>
  )
}
