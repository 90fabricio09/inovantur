import { useEffect } from 'react'
import { SITE } from '../data/site'

function meta(atributo, chave, valor) {
  let el = document.head.querySelector(`meta[${atributo}="${chave}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(atributo, chave)
    document.head.appendChild(el)
  }
  el.setAttribute('content', valor)
}

/* Título, descrição e canonical por rota: cada serviço disputa a própria busca. */
export function useSeo({ titulo, descricao, caminho, noindex = false }) {
  useEffect(() => {
    const url = SITE.url + caminho
    document.title = titulo
    meta('name', 'description', descricao)
    meta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    meta('property', 'og:title', titulo)
    meta('property', 'og:description', descricao)
    meta('property', 'og:url', url)
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = url
  }, [titulo, descricao, caminho, noindex])
}
