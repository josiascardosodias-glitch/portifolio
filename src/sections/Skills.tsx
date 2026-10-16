import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { Tags } from '../components/Tag'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <Section id="habilits" title="Habilidades">
      <div className="mx-auto grid grid-cols-1 gap-8 p-3 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <h2>
              <img className="inline size-6" src={group.icon} alt="#" /> {group.title}
            </h2>
            <Tags items={group.skills} hoverable />
          </Card>
        ))}
      </div>
    </Section>
  )
}
