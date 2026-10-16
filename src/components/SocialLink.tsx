type SocialLinkProps = {
  icon: string
  alt: string
  href?: string
}

export function SocialLink({ icon, alt, href }: SocialLinkProps) {
  const image = <img className="size-6" src={icon} alt={alt} />

  return (
    <div className="flex size-10 items-center justify-center rounded-[20%] border border-[#ddd] bg-card backdrop-blur-md transition-all duration-400 ease-in-out hover:-translate-y-1">
      {href ? (
        <a className="flex" href={href} target="_blank">
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  )
}
