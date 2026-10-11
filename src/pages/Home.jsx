import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ANOS, MOTIVOS, PUBLICOS, SITE, wa } from '../data/site'
import { gsap, useGSAP, useEntradas, SEM_MOVIMENTO } from '../lib/movimento'
import { useSeo } from '../lib/seo'
import Faixa from '../components/Faixa'
import TrilhaServicos from '../components/TrilhaServicos'
import { Contato, ListaFrota } from '../components/Blocos'
import Icone from '../components/Icone'

export default function Home() {
  const raiz = useRef(null)
  useSeo({
    titulo: 'Inovan Tur | Vans, Micro-ônibus e Ônibus com Motorista em SP',
    descricao: `Viagens em grupo com motorista em São Paulo desde ${SITE.desde}: city tour, excursões, feiras e congressos, aeroportos e Porto de Santos.`,
    caminho: '/',
  })
  useEntradas(raiz)

  useGSAP(
    () => {
      if (SEM_MOVIMENTO) return
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('.abertura__foto img', { scale: 1.15, duration: 1.8 })
        .from('.abertura h1 .linha > span', { yPercent: 110, duration: 1.1, stagger: 0.09 }, 0.15)
        .from(['.abertura__selo', '.abertura__texto p', '.abertura__acoes > *'], { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.08 }, 0.5)
    },
    { scope: raiz },
  )

  return (
    <main ref={raiz}>
      <section className="abertura">
        <div className="abertura__foto">
          {/* Em tela estreita (retrato) vai um recorte vertical da frente do ônibus: a foto
              horizontal esticada para a altura do celular mostrava só a lateral, ampliada. */}
          <picture>
            <source media="(max-width: 700px)" srcSet="/img/onibus-estrada-retrato.webp" />
            <img
              src="/img/onibus-estrada.webp"
              srcSet="/img/onibus-estrada-720.webp 720w, /img/onibus-estrada.webp 1400w"
              sizes="100vw"
              alt="Ônibus da frota Inovan na estrada"
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="caixa abertura__texto">
          <span className="abertura__selo"><span data-conta={ANOS}>{ANOS}</span> anos na estrada · São Paulo</span>
          <h1>
            <span className="linha"><span>Viagens em grupo</span></span>
            <span className="linha"><span>com motorista,</span></span>
            <span className="linha"><span className="destaque">desde {SITE.desde}.</span></span>
          </h1>
          <p>City tour, excursões, feiras e congressos, aeroportos e Porto de Santos — de van, micro-ônibus ou ônibus.</p>
          <div className="abertura__acoes">
            <a className="botao botao--laranja botao--grande" href={wa()} target="_blank" rel="noreferrer" data-local="hero">
              <Icone nome="whatsapp" /> Pedir orçamento
            </a>
            <Link className="botao botao--vazado botao--grande" to="/lista-de-carros">Ver a frota</Link>
          </div>
        </div>
      </section>

      <Faixa />
      <TrilhaServicos />

      <section className="secao" id="para-quem">
        <div className="caixa">
          <div className="cabeca">
            <span className="rotulo" data-sobe>Para quem</span>
            <h2 data-sobe>Cada grupo tem um jeito de viajar</h2>
          </div>
          <div className="publicos" data-cascata>
            {PUBLICOS.map((p) => (
              <div key={p.titulo} className="publico">
                <Icone nome={p.icone} />
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao--clara" id="frota">
        <div className="caixa">
          <div className="cabeca cabeca--linha">
            <div>
              <span className="rotulo rotulo--escuro" data-sobe>Frota</span>
              <h2 data-sobe>Do tamanho do seu grupo</h2>
            </div>
            <Link className="botao botao--escuro" to="/lista-de-carros" data-sobe>Frota completa <Icone nome="arrow-right" /></Link>
          </div>
          <ListaFrota />
        </div>
      </section>

      <section className="secao">
        <div className="caixa motivos">
          <div className="cabeca">
            <span className="rotulo" data-sobe>Por que a Inovan Tur</span>
            <h2 data-sobe>O que não muda em nenhuma viagem</h2>
          </div>
          <ol className="motivos__lista" data-cascata>
            {MOTIVOS.map((m, i) => (
              <li key={m.titulo}>
                <span>0{i + 1}</span>
                <div><h3>{m.titulo}</h3><p>{m.texto}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Contato />
    </main>
  )
}
