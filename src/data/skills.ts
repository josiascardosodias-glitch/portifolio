import bracketsIcon from '../assets/icons/brackets-angle.svg'
import computerIcon from '../assets/icons/computer-tower.svg'
import databaseIcon from '../assets/icons/database.svg'
import wrenchIcon from '../assets/icons/wrench.svg'

export type SkillGroup = {
  title: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    icon: bracketsIcon,
    skills: ['HTML e CSS', 'Flask', 'JavaScript', 'React'],
  },
  {
    title: 'Back-end',
    icon: computerIcon,
    skills: ['Python', 'Java', 'Spring Boot'],
  },
  {
    title: 'Banco de Dados',
    icon: databaseIcon,
    skills: ['SQLite', 'PostgreSQL'],
  },
  {
    title: 'Ferramentas',
    icon: wrenchIcon,
    skills: ['Git', 'GitHub', 'VS Code', 'Docker'],
  },
]
