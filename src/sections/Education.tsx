import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { Tags } from '../components/Tag'
import { education } from '../data/education'

export function Education() {
  return (
    <Section id="forme" title="Formação & Cursos">
      <div className="grid w-full grid-cols-1 gap-5">
        {education.map((item) => (
          <Card key={item.title} className="m-auto">
            <img className="size-6" src={item.icon} alt="" />
            <h2>{item.title}</h2>
            <p>{item.institution}</p>
            <Tags items={item.tags} />
          </Card>
        ))}
      </div>
    </Section>
  )
}
