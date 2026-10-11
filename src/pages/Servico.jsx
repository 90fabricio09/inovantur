import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SERVICOS, wa } from '../data/site'
import { gsap, useGSAP, useEntradas, SEM_MOVIMENTO } from '../lib/movimento'
import { useSeo } from '../lib/seo'
import { Contato, ListaFrota } from '../components/Blocos'
import Icone from '../components/Icone'
import NaoEncontrada from './NaoEncontrada'

export default function Servico() {
  const { slug } = useParams()
  const s = SERVICOS.find((x) => x.slug === slug)
  if (!s) return <NaoEncontrada />
  return <PaginaServico s={s} />
}

function PaginaServico({ s }) {
  const raiz = useRef(null)
  useSeo({ titulo: `${s.titulo} | Inovan Tur`, descricao: s.seo, caminho: `/${s.slug}` })
  useEntradas(raiz, [s.slug])

  useGSAP(
    () => {
      if (SEM_MOVIMENTO) return
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('.abertura__foto img', { scale: 1.12, duration: 1.6 })
        .from('.abertura__texto > *', { y: 30, autoAlpha: 0, duration: 0.9, stagger: 0.08 }, 0.1)
    },
    { scope: raiz, dependencies: [s.slug], revertOnUpdate: true },
  )

  const mensagem = `Olá! Vim pelo site da Inovan Tur e quero um orçamento de ${s.titulo.toLowerCase()}.`
  const outros = SERVICOS.filter((x) => x.slug !== s.slug)

  return (
    <main ref={raiz}>
      <section className="abertura abertura--pagina">
        <div className="abertura__foto">
          <img src={s.imagem} srcSet={s.imagemCelular ? `${s.imagemCelular} 720w, ${s.imagem} 1400w` : undefined} sizes="100vw" alt="" fetchPriority="high" />
        </div>
        <div className="caixa abertura__texto">
          <span className="abertura__selo"><Icone nome={s.icone} /> Serviço Inovan Tur</span>
          <h1>{s.titulo}</h1>
          <p>{s.curto}</p>
          <div className="abertura__acoes">
            <a className="botao botao--laranja botao--grande" href={wa(mensagem)} target="_blank" rel="noreferrer" data-local="servico-hero">
              <Icone nome="whatsapp" /> Pedir orçamento
            </a>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="caixa detalhe">
          <div className="detalhe__texto">
            {s.texto.map((p, i) => <p key={i} data-sobe>{p}</p>)}
          </div>
          <ul className="detalhe__lista" data-cascata>
            {s.destaques.map((d) => <li key={d}><Icone nome="check2" /> {d}</li>)}
          </ul>
        </div>
      </section>

      <section className="secao secao--clara">
        <div className="caixa">
          <div className="cabeca">
            <span className="rotulo rotulo--escuro" data-sobe>Frota</span>
            <h2 data-sobe>Escolha o veículo</h2>
          </div>
          <ListaFrota />
        </div>
      </section>

      <Contato servicoInicial={s.titulo} />

      <section className="secao">
        <div className="caixa">
          <div className="cabeca">
            <span className="rotulo" data-sobe>Outros serviços</span>
          </div>
          <div className="outros" data-cascata>
            {outros.map((o) => (
              <Link key={o.slug} to={`/${o.slug}`} className="outro">
                <Icone nome={o.icone} />
                <span>{o.titulo}</span>
                <Icone nome="arrow-up-right" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
