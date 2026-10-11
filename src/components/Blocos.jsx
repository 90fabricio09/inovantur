import { useState } from 'react'
import { CONTATO, FROTA, SERVICOS, wa } from '../data/site'
import Icone from './Icone'

/* Frota em linhas, estilo tabela de revista: número de lugares grande à esquerda. */
export function ListaFrota() {
  return (
    <ul className="lista-frota" data-cascata>
      {FROTA.map((v) => (
        <li key={v.nome}>
          <a href={wa(`Olá! Vim pelo site da Inovan Tur e quero um orçamento de ${v.nome.toLowerCase()} (até ${v.lugares} passageiros).`)} target="_blank" rel="noreferrer" data-local="frota">
            <span className="lista-frota__lugares">{v.lugares}<small>lugares</small></span>
            <img src={v.imagem} alt={v.nome} loading="lazy" />
            <span className="lista-frota__nome">
              <strong>{v.nome}</strong>
              <span>{v.modelo}</span>
            </span>
            <span className="lista-frota__itens">{v.itens.join(' · ')}</span>
            <span className="lista-frota__seta"><Icone nome="arrow-up-right" /></span>
          </a>
        </li>
      ))}
    </ul>
  )
}

/* Sem servidor: monta a mensagem e abre o WhatsApp. */
function Form({ servicoInicial = '' }) {
  const [f, setF] = useState({ nome: '', servico: servicoInicial, data: '', pessoas: '', trajeto: '' })
  const [erro, setErro] = useState('')
  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }))

  const enviar = (e) => {
    e.preventDefault()
    if (!f.nome.trim() || !f.trajeto.trim()) {
      setErro('Preencha seu nome e o trajeto, por favor.')
      return
    }
    setErro('')
    const linhas = [
      `Olá! Sou ${f.nome.trim()} e quero um orçamento com a Inovan Tur.`,
      f.servico && `Serviço: ${f.servico}`,
      f.data && `Data: ${f.data.split('-').reverse().join('/')}`,
      f.pessoas && `Passageiros: ${f.pessoas}`,
      `Trajeto: ${f.trajeto.trim()}`,
    ].filter(Boolean)
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'clique_whatsapp', local: 'formulario', pagina: location.pathname })
    window.open(wa(linhas.join('\n')), '_blank', 'noopener')
  }

  return (
    <form className="form" onSubmit={enviar} noValidate>
      <input aria-label="Seu nome" placeholder="Seu nome *" value={f.nome} onChange={set('nome')} autoComplete="name" />
      <select aria-label="Serviço" value={f.servico} onChange={set('servico')}>
        <option value="">Qual serviço?</option>
        {SERVICOS.map((s) => <option key={s.slug}>{s.titulo}</option>)}
      </select>
      <div className="form__dupla">
        <input aria-label="Data" type="date" value={f.data} onChange={set('data')} />
        <input aria-label="Passageiros" type="number" min="1" inputMode="numeric" placeholder="Passageiros" value={f.pessoas} onChange={set('pessoas')} />
      </div>
      <input aria-label="Trajeto" placeholder="Trajeto * (ex.: Escola → Museu do Ipiranga)" value={f.trajeto} onChange={set('trajeto')} />
      {erro && <p className="form__erro" role="alert">{erro}</p>}
      <button type="submit" className="botao botao--branco"><Icone nome="whatsapp" /> Enviar pelo WhatsApp</button>
    </form>
  )
}

export function Contato({ servicoInicial }) {
  return (
    <section className="contato" id="contato">
      <div className="caixa contato__in">
        <div className="contato__texto">
          <span className="rotulo rotulo--escuro" data-sobe>Orçamento</span>
          <h2 data-sobe>Para onde o seu grupo vai?</h2>
          <p data-sobe>Conte o trajeto e o tamanho do grupo. A resposta chega no WhatsApp.</p>
          <div className="contato__canais" data-cascata>
            <a href={wa()} target="_blank" rel="noreferrer" data-local="contato"><Icone nome="whatsapp" /> {CONTATO.whatsappExibir}</a>
            <a href={`mailto:${CONTATO.email}`}><Icone nome="envelope" /> {CONTATO.email}</a>
          </div>
        </div>
        <div data-sobe="0.1"><Form servicoInicial={servicoInicial} /></div>
      </div>
    </section>
  )
}
