import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { wa } from '../data/site'
import { useEntradas } from '../lib/movimento'
import { useSeo } from '../lib/seo'
import { Contato, ListaFrota } from '../components/Blocos'
import Icone from '../components/Icone'

/* Mesmo endereço da página de frota do site atual (/lista-de-carros). */
export function Frota() {
  const raiz = useRef(null)
  useSeo({
    titulo: 'Frota: Vans, Micro-ônibus e Ônibus com Motorista | Inovan Tur',
    descricao: 'Vans de 15, 18 e 20 lugares, micro-ônibus de 30 e ônibus de 46 lugares, todos com motorista profissional.',
    caminho: '/lista-de-carros',
  })
  useEntradas(raiz)
  return (
    <main ref={raiz}>
      <section className="secao secao--clara secao--topo">
        <div className="caixa">
          <div className="cabeca">
            <span className="rotulo rotulo--escuro" data-sobe>Frota Inovan Tur</span>
            <h1 data-sobe>De 15 a 46 lugares, sempre com motorista</h1>
            <p data-sobe>Toque no veículo para pedir o orçamento direto no WhatsApp.</p>
          </div>
          <ListaFrota />
        </div>
      </section>
      <Contato />
    </main>
  )
}

export function NaoEncontrada() {
  useSeo({ titulo: 'Página não encontrada | Inovan Tur', descricao: 'Esta página não existe.', caminho: '/404', noindex: true })
  return (
    <main className="secao secao--topo nao-encontrada">
      <div className="caixa">
        <span className="rotulo">Erro 404</span>
        <h1>Essa estrada não existe.</h1>
        <p>O endereço pode ter mudado. Volte ao início ou fale com a gente.</p>
        <div className="abertura__acoes">
          <Link className="botao botao--laranja" to="/">Voltar ao início</Link>
          <a className="botao botao--vazado" href={wa()} target="_blank" rel="noreferrer" data-local="404"><Icone nome="whatsapp" /> WhatsApp</a>
        </div>
      </div>
    </main>
  )
}
