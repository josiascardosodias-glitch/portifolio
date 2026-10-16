import { SocialLink } from '../components/SocialLink'
import { email, socials } from '../data/socials'

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilits' },
  { label: 'Formação', href: '#forme' },
  { label: 'Projetos', href: '#project' },
]

const column = 'flex flex-col items-center gap-4 md:items-start'
const linkText = 'transition-all duration-200 ease-in hover:-translate-y-1'

export function Footer() {
  return (
    <footer className="relative grid w-full gap-2 bg-footer p-4 md:flex md:h-[calc(60vh+12em)] md:justify-center md:gap-[20%] md:px-0 md:pt-[12em] md:pb-0">
      <div className={column}>
        <h2 className="text-2xl font-bold">Josias Dias Cardoso</h2>
        <p>Desenvolvedor em Constante Evolução</p>
      </div>

      <div className={column}>
        <h3 className="text-[1.17em] font-bold">Navegação</h3>
        {navigation.map((item) => (
          <a key={item.href} className="flex" href={item.href}>
            <span className={linkText}>{item.label}</span>
          </a>
        ))}
      </div>

      <div className={column}>
        <h3 className="text-[1.17em] font-bold">contato</h3>
        <a
          className="relative mt-3 flex after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
          href="#"
        >
          <span className={linkText}>{email}</span>
        </a>
        <div className="flex gap-2">
          {socials.map((social) => (
            <SocialLink key={social.name} {...social} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[20%] left-[5%] hidden h-px w-[90%] rounded-[50%] bg-[#ddd] md:block" />
    </footer>
  )
}
