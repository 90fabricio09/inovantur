/* Todo clique em WhatsApp vira o evento "clique_whatsapp" no dataLayer — no GTM, um gatilho
   só para a conversão do Google Ads e do GA4, em qualquer página. O GTM só carrega no domínio
   da Inovan (ver index.html): o protótipo não suja os relatórios atuais. */
export function iniciarRastreamento() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest?.('a[href*="wa.me"]')
    if (!link) return
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'clique_whatsapp', local: link.dataset.local || 'outro', pagina: location.pathname })
  })
}

export function registrarPagina(caminho) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'troca_de_pagina', pagina: caminho })
}
