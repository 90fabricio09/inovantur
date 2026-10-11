import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SERVICOS } from '../data/site'
import { gsap, useGSAP, SEM_MOVIMENTO } from '../lib/movimento'
import Icone from './Icone'

/* A ideia forte da home: os serviços passam na horizontal enquanto a seção fica fixa
   (desktop). No celular viram uma lista simples com entrada em cascata — trilha fixada
   e scrub a cada pixel não se pagam numa GPU de celular. */
export default function TrilhaServicos() {
  const raiz = useRef(null)
  const trilho = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 961px) and (prefers-reduced-motion: no-preference)', () => {
        const distancia = () => trilho.current.scrollWidth - window.innerWidth
        gsap.to(trilho.current, {
          x: () => -distancia(),
          ease: 'none',
          scrollTrigger: { trigger: raiz.current, start: 'top top', end: () => `+=${distancia()}`, scrub: 0.8, pin: true, anticipatePin: 1, invalidateOnRefresh: true },
        })
      })
      mm.add('(max-width: 960px)', () => {
        if (SEM_MOVIMENTO) return
        gsap.utils.toArray('.trilha__cartao', raiz.current).forEach((c) =>
          gsap.from(c, { y: 50, autoAlpha: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 90%', once: true } }),
        )
      })
    },
    { scope: raiz },
  )

  return (
    <section className="trilha" id="servicos" ref={raiz}>
      <div className="trilha__in" ref={trilho}>
        <div className="trilha__intro">
          <span className="rotulo">O que fazemos</span>
          <h2>Seis jeitos de levar o seu grupo</h2>
          <p>Do aeroporto ao Porto de Santos, de feiras a excursões. Sempre com motorista.</p>
          <span className="trilha__dica" aria-hidden="true">Role para ver <Icone nome="arrow-right" /></span>
        </div>
        {SERVICOS.map((s, i) => (
          <Link key={s.slug} to={`/${s.slug}`} className="trilha__cartao">
            <img src={s.imagemCelular || s.imagem} alt="" loading="lazy" />
            <div className="trilha__corpo">
              <span className="trilha__num">0{i + 1}</span>
              <h3>{s.titulo}</h3>
              <p>{s.curto}</p>
              <span className="trilha__mais">Ver serviço <Icone nome="arrow-up-right" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
