import { Link } from 'react-router-dom'
import { CONTATO, SERVICOS, SITE, wa } from '../data/site'
import Icone from './Icone'

const ANO = new Date().getFullYear()

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="caixa rodape__in">
        <div className="rodape__marca">
          <img src="/img/logo-inovantur-claro.webp" alt="Inovan Tur" width="416" height="77" loading="lazy" />
          <p>Vans, micro-ônibus e ônibus com motorista em São Paulo desde {SITE.desde}.</p>
        </div>
        <nav aria-label="Serviços">
          <h4>Serviços</h4>
          {SERVICOS.map((s) => <Link key={s.slug} to={`/${s.slug}`}>{s.titulo}</Link>)}
        </nav>
        <div>
          <h4>Fale com a gente</h4>
          <a href={wa()} target="_blank" rel="noreferrer" data-local="rodape"><Icone nome="whatsapp" /> {CONTATO.whatsappExibir}</a>
          <a href={`mailto:${CONTATO.email}`}><Icone nome="envelope" /> {CONTATO.email}</a>
          <div className="rodape__redes">
            <a href={CONTATO.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icone nome="instagram" /></a>
            <a href={CONTATO.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Icone nome="facebook" /></a>
          </div>
        </div>
      </div>
      <div className="rodape-base">
        <p>© {ANO} Inovan Tur. Todos os direitos reservados.</p>
        <span className="rodape-divisor" aria-hidden="true">|</span>
        <a href="https://bettaagency.com.br/?utm_source=inovantur.com.br&utm_medium=rodape&utm_campaign=assinatura" target="_blank" rel="noopener noreferrer" className="rodape-betta">
          Desenvolvido por <strong>Betta Agency</strong>
        </a>
      </div>
    </footer>
  )
}
