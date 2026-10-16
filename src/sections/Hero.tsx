import { useState } from 'react'
import envelopeIcon from '../assets/icons/envelope-simple.svg'
import { Section } from '../components/Section'
import { SocialLink } from '../components/SocialLink'
import { WhatsAppModal } from '../components/WhatsAppModal'
import { email, socials } from '../data/socials'

const buttonBase =
  'rounded-lg border border-accent p-4 font-bold transition-all duration-300 ease-in hover:-translate-y-1'

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Section>
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="mb-12 text-[5em] font-bold">Josias Dias Cardoso</h1>
        <h3 className="text-[2em] font-normal">Cursando Sistemas de Informação</h3>

        <div className="flex gap-2 p-0.5">
          {socials.map((social) => (
            <SocialLink key={social.name} {...social} />
          ))}
          <SocialLink icon={envelopeIcon} alt="imagem de um envelope" href={`mailto:${email}`} />
        </div>

        <div className="flex gap-4">
          <a className="flex" href="#project">
            <div className={`bg-[#ddd] ${buttonBase}`}>
              <p className="text-accent transition-all duration-300 ease-in hover:text-black">Ver projetos</p>
            </div>
          </a>

          <button
            type="button"
            className={`relative z-1 bg-[rgba(158,46,202,0.1)] ${buttonBase} after:absolute after:inset-y-0 after:left-0 after:-z-1 after:w-0 after:rounded-lg after:bg-[rgba(127,186,122,0.7)] after:transition-all after:duration-400 after:ease-in hover:after:w-full`}
            onClick={() => setModalOpen(true)}
          >
            <p>Entrar em contato</p>
          </button>
        </div>
      </div>

      {modalOpen && <WhatsAppModal onClose={() => setModalOpen(false)} />}
    </Section>
  )
}
