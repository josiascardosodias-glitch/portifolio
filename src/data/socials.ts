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
    href: import.meta.env.VITE_GITHUB_URL,
    icon: githubIcon,
    alt: 'imagem do icone do Github',
  },
  {
    name: 'LinkedIn',
    href: import.meta.env.VITE_LINKEDIN_URL,
    icon: linkedinIcon,
    alt: 'imagem do aplicativo linkedin',
  },
  {
    name: 'Instagram',
    href: import.meta.env.VITE_INSTAGRAM_URL,
    icon: instagramIcon,
    alt: 'imagem do icone do instagram',
  },
]

export const email = import.meta.env.VITE_CONTACT_EMAIL
