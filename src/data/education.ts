import bookIcon from '../assets/icons/book-open.svg'
import graduationIcon from '../assets/icons/graduation-cap.svg'

export type Education = {
  title: string
  institution: string
  icon: string
  tags: string[]
}

export const education: Education[] = [
  {
    title: 'Sistemas de Informação',
    institution: 'Faccat',
    icon: graduationIcon,
    tags: ['Graduação', 'Cursando'],
  },
  {
    title: 'Discover',
    institution: 'Rocketseat',
    icon: bookIcon,
    tags: ['Curso', 'Finalizado'],
  },
  {
    title: 'Engenharia de Prompt',
    institution: 'Rocketseat',
    icon: bookIcon,
    tags: ['Curso', 'Finalizado'],
  },
]
