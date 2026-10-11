import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const SEM_MOVIMENTO =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
/* Celular/tablet: as entradas continuam; o que segue cada pixel da rolagem ou roda o tempo
   todo fica só no desktop. É a GPU do celular que trava, não a CPU. */
export const MODO_LEVE =
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse), (max-width: 900px)').matches

/* A barra de endereço do celular muda a altura da janela ao rolar; sem isto o ScrollTrigger
   recalcula os gatilhos no meio da rolagem e ela engasga. */
ScrollTrigger.config({ ignoreMobileResize: true })

/* Entradas declarativas: data-sobe (sobe e aparece) e data-cascata (filhos em lote).
   Chamar uma vez por página, com o elemento raiz como escopo. */
export function useEntradas(escopo, deps = []) {
  useGSAP(
    () => {
      if (SEM_MOVIMENTO) return
      gsap.utils.toArray('[data-sobe]').forEach((el) => {
        gsap.from(el, {
          y: 36,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: Number(el.dataset.sobe) || 0,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })
      gsap.utils.toArray('[data-cascata]').forEach((grupo) => {
        const itens = gsap.utils.toArray(grupo.children)
        gsap.set(itens, { y: 40, autoAlpha: 0 })
        ScrollTrigger.batch(itens, {
          start: 'top 90%',
          once: true,
          onEnter: (lote) => gsap.to(lote, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1, overwrite: true }),
        })
      })
      gsap.utils.toArray('[data-conta]').forEach((el) => {
        const alvo = Number(el.dataset.conta)
        const estado = { v: 0 }
        el.textContent = '0'
        gsap.to(estado, {
          v: alvo,
          duration: 1.6,
          ease: 'power2.out',
          // 'top bottom': conta assim que aparece. Com 'top 92%', um número logo abaixo da
          // dobra ficava em 0 até a pessoa rolar.
          scrollTrigger: { trigger: el, start: 'top bottom', once: true },
          onUpdate: () => { el.textContent = Math.round(estado.v) },
        })
      })
    },
    { scope: escopo, dependencies: deps, revertOnUpdate: true },
  )
}

export { gsap, ScrollTrigger, useGSAP }
