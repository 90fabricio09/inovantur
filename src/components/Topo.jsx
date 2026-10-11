import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CONTATO, wa } from '../data/site'
import Icone from './Icone'

export default function Topo() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setAberto(false), [pathname])
  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])
  useEffect(() => {
    document.body.classList.toggle('menu-aberto', aberto)
  }, [aberto])

  return (
    <header className={`topo ${rolou || aberto ? 'topo--solido' : ''}`}>
      <div className="caixa topo__in">
        <Link to="/" className="marca" aria-label="Inovan Tur — início">
          <img src="/img/logo-inovantur-claro.webp" alt="Inovan Tur" width="416" height="77" />
        </Link>
        <nav className={`menu ${aberto ? 'menu--aberto' : ''}`} aria-label="Principal">
          <Link to="/#servicos">Serviços</Link>
          <NavLink to="/lista-de-carros">Frota</NavLink>
          <Link to="/#para-quem">Para quem</Link>
          <Link to="/#contato">Contato</Link>
          <a className="botao botao--laranja" href={wa()} target="_blank" rel="noreferrer" data-local="topo">
            <Icone nome="whatsapp" /> {CONTATO.whatsappExibir}
          </a>
        </nav>
        <button className={`hamburguer ${aberto ? 'hamburguer--x' : ''}`} aria-label={aberto ? 'Fechar menu' : 'Abrir menu'} aria-expanded={aberto} onClick={() => setAberto((v) => !v)}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}
