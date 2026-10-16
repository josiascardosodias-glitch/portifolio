export type Project = {
  title: string
  status: string
  description: string
  technologies: string[]
  repository: string
}

export const projects: Project[] = [
  {
    title: 'Sistema de Gerenciamento de Turma',
    status: 'Em Desenvolvimento',
    description:
      'Projeto feito em Python que possui interação com banco de dados SQL para armazenar dados de alunos como (nome, senha, idade e nota) e também armazenar informações do professor. Onde o mesmo pode criar ou acessar uma turma e gerar notas que podem ser visualizadas pelos alunos.',
    technologies: ['Python', 'SQLite', 'Flask', 'HTML', 'CSS'],
    repository: 'https://github.com/josiascardosodias-glitch/projeso_sis.escolar',
  },
  {
    title: 'Jogo Tetris Skill',
    status: 'Pronto para uso',
    description:
      'Skill que gera de forma super simples o jogo tetris completo e pronto para ser jogado direto do seu terminal.',
    technologies: ['C', 'Skill', 'VS Code'],
    repository: 'https://github.com/josiascardosodias-glitch/tetris-em-C.git',
  },
]
