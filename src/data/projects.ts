export type Project = {
  title: string
  status: string
  description: string
  technologies: string[]
  repository: string
}

export const projects: Project[] = [
  {
    title: 'Jogo Tetris Skill',
    status: 'Pronto para uso',
    description:
      'Skill que gera de forma super simples o jogo tetris completo e pronto para ser jogado direto do seu terminal.',
    technologies: ['C', 'Skill', 'VS Code'],
    repository: 'https://github.com/josiascardosodias-glitch/tetris-em-C.git',
  },
]
