import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, SEM_MOVIMENTO, MODO_LEVE } from '../lib/movimento'

const PALAVRAS = ['City tour', 'Porto de Santos', 'Feiras e congressos', 'Aeroportos', 'Excursões', 'Corporativo', 'Estudo do meio']

/* Faixa infinita: um tween só, parado fora da tela. No desktop acelera com a rolagem. */
export default function Faixa() {
  const raiz = useRef(null)

  useGSAP(
    () => {
      if (SEM_MOVIMENTO) return
      const loop = gsap.to('.faixa__trilho', { xPercent: -50, duration: 30, ease: 'none', repeat: -1 })
      ScrollTrigger.create({ trigger: raiz.current, start: 'top bottom', end: 'bottom top', onToggle: (s) => (s.isActive ? loop.play() : loop.pause()) })
      if (MODO_LEVE) return
      const voltar = gsap.delayedCall(0.25, () => gsap.to(loop, { timeScale: 1, duration: 0.8, overwrite: true })).pause()
      ScrollTrigger.create({
        trigger: raiz.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (s) => {
          gsap.to(loop, { timeScale: 1 + Math.min(Math.abs(s.getVelocity()) / 250, 5), duration: 0.25, overwrite: true })
          voltar.restart(true)
        },
      })
    },
    { scope: raiz },
  )

  const itens = [...PALAVRAS, ...PALAVRAS]
  return (
    <div className="faixa" ref={raiz} aria-hidden="true">
      <div className="faixa__trilho">
        {itens.map((p, i) => <span key={i}>{p}<i>✦</i></span>)}
      </div>
    </div>
  )
}
