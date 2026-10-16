import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { Tag, Tags } from '../components/Tag'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <Section id="project" title="Projetos em Destaque" compact>
      {projects.map((project) => (
        <Card key={project.title}>
          <h2>{project.title}</h2>
          <div className="flex flex-wrap gap-2.5">
            <Tag>{project.status}</Tag>
          </div>
          <p>{project.description}</p>
          <Tags items={project.technologies} />
          <a
            className="mt-4 block rounded-[10px] bg-[#ddd] p-3 text-center font-bold text-[#5f2cff] transition-all duration-200 ease-in hover:-translate-y-1"
            href={project.repository}
            target="_blank"
          >
            Ver Repositório
          </a>
        </Card>
      ))}
    </Section>
  )
}
