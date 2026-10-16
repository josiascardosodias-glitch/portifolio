const phone = 'NUMERO_REMOVIDO'
const message = 'Olá! Gostaria de saber um pouco mais sobre o seu trabalho.'

type WhatsAppModalProps = {
  onClose: () => void
}

export function WhatsAppModal({ onClose }: WhatsAppModalProps) {
  function goToWhatsApp() {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-[rgba(32,3,117,0.6)] backdrop-blur-[1px]"
      onClick={onClose}
    >
      <div className="rounded-lg bg-[rgb(32,3,117)] p-6 text-center">
        <p className="p-6 font-bold text-[#ddd]">Gostaria de ser redirecionado para o Whats App ?</p>
        <button
          className="cursor-pointer rounded border text-[13.333px] border-[#ddd] bg-[#411a7f] p-2 text-[#ddd] backdrop-blur-md transition-all duration-200 ease-in hover:-translate-y-2"
          onClick={goToWhatsApp}
        >
          Ir para Whats App
        </button>
      </div>
    </div>
  )
}
