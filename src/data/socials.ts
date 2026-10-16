import githubIcon from '../assets/icons/github-logo.svg'
import instagramIcon from '../assets/icons/instagram-logo.svg'
import linkedinIcon from '../assets/icons/linkedin-logo.svg'

export type Social = {
  name: string
  href: string
  icon: string
  alt: string
}

export const socials: Social[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/josiascardosodias-glitch',
    icon: githubIcon,
    alt: 'imagem do icone do Github',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/josias-dias-cardoso/',
    icon: linkedinIcon,
    alt: 'imagem do aplicativo linkedin',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/josias.d_cardoso/',
    icon: instagramIcon,
    alt: 'imagem do icone do instagram',
  },
]

export const email = 'josiascardosodias@gmail.com'
