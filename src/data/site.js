/* Fonte única do site Inovan Tur. Conteúdo do inovantur.com.br (11/10/2026), corrigido.
   Ficou de fora de propósito:
   - "30.000 clientes satisfeitos" e o contador "Anos de Experiência 0+" (sem fonte / quebrado);
   - promoção "até 5% só este mês" fixa no site;
   - depoimentos (Carlos M., Joana S., Laura R.) sem origem verificável;
   - "sem taxas ocultas" e "garantia de preço em conta" (promessas que a empresa precisa assinar);
   - fotos de banco de imagem de locadora sem motorista.
   CONFIRMAR: endereço — o site atual diz "Jaraguá" no título e "Berrini" na manchete. */

export const SITE = {
  nome: 'Inovan Tur',
  url: 'https://inovantur.com.br',
  desde: 2007,
}

export const ANOS = new Date().getFullYear() - SITE.desde

export const CONTATO = {
  whatsapp: '5511995540250',
  whatsappExibir: '(11) 99554-0250',
  email: 'contato@inovantur.com.br',
  instagram: 'https://www.instagram.com/inovantur',
  facebook: 'https://www.facebook.com/inovantur',
}

export const wa = (texto = 'Olá! Vim pelo site da Inovan Tur e quero um orçamento.') =>
  `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`

/* Mesmos endereços do site atual (os links "Veja mais" da home), para não perder o que o
   Google já indexou. As variantes do menu antigo redirecionam para cá (vercel.json). */
export const SERVICOS = [
  {
    slug: 'city-tour-em-sao-paulo',
    titulo: 'City tour em São Paulo',
    curto: 'Os principais pontos da cidade com motorista que conhece São Paulo.',
    imagem: '/img/onibus-2.webp',
    icone: 'compass',
    seo: 'City tour em São Paulo para grupos de van, micro-ônibus ou ônibus com motorista. Roteiro do seu grupo e atendimento bilíngue sob consulta.',
    texto: [
      'Escolha o roteiro que mais agradar o seu grupo e conheça São Paulo com conforto, em vans, micro-ônibus ou ônibus revisados e equipados.',
      'O passeio é conduzido por motoristas que conhecem a cidade e seus principais pontos. Se o grupo precisar, há atendimento bilíngue.',
    ],
    destaques: ['Roteiro do seu grupo', 'Vans, micro-ônibus e ônibus', 'Motoristas que conhecem a cidade', 'Bilíngue sob consulta'],
  },
  {
    slug: 'aluguel-de-vans-para-feiras-congressos-e-eventos-corporativos-em-sao-paulo',
    titulo: 'Feiras, congressos e eventos',
    curto: 'Vans executivas e micro-ônibus para os principais eventos de São Paulo.',
    imagem: '/img/micro-entrada.webp',
    imagemCelular: '/img/micro-entrada-720.webp',
    icone: 'calendar-event',
    seo: 'Aluguel de vans e micro-ônibus com motorista para feiras, congressos e eventos corporativos em São Paulo, com vidros escurecidos e ar-condicionado.',
    texto: [
      'O transporte certo para o seu evento: vans executivas de vidros escurecidos e micro-ônibus, com motoristas experientes e cordiais.',
      'Ar-condicionado, bancos individuais e modelos atuais, para que o dia do evento seja o mais cômodo possível para a sua equipe ou seus convidados.',
    ],
    destaques: ['Vans executivas', 'Vidros escurecidos', 'Bancos individuais', 'Micro-ônibus para grupos maiores'],
  },
  {
    slug: 'locacao-de-vans-para-atendimento-corporativo',
    titulo: 'Atendimento corporativo',
    curto: 'Vans para equipes e executivos, com Wi-Fi a bordo e ar-condicionado.',
    imagem: '/img/van-hotel-2.webp',
    icone: 'briefcase',
    seo: 'Locação de vans com motorista para atendimento corporativo em São Paulo: transporte de equipes e executivos com Wi-Fi a bordo e ar-condicionado.',
    texto: [
      'Locação de vans pensada para o mundo corporativo: reuniões em movimento, transporte de funcionários e deslocamentos executivos.',
      'Wi-Fi a bordo, ar-condicionado e motoristas qualificados para viagens seguras e pontuais.',
    ],
    destaques: ['Wi-Fi a bordo', 'Ar-condicionado', 'Motoristas qualificados', 'Pontualidade'],
  },
  {
    slug: 'servico-de-embarque-e-desembarque-em-portos-de-sp',
    titulo: 'Porto de Santos',
    curto: 'Embarque e desembarque dentro do terminal marítimo, sem dor de cabeça.',
    imagem: '/img/van-estrada.webp',
    imagemCelular: '/img/van-estrada-720.webp',
    icone: 'water',
    seo: 'Transfer para o Porto de Santos com van, micro-ônibus ou ônibus com motorista. Desembarque dentro do terminal marítimo.',
    texto: [
      'Com a Inovan Tur, o deslocamento até o Porto de Santos é muito mais tranquilo: sem preocupação com pedágio, estacionamento ou logística.',
      'Os passageiros desembarcam dentro do terminal marítimo, mais perto do acesso às salas de embarque. Vans, micro-ônibus e ônibus com motorista.',
    ],
    destaques: ['Desembarque no terminal', 'Sem pedágio nem estacionamento', 'Vans, micro e ônibus', 'Ida, volta ou as duas'],
  },
  {
    slug: 'receptivo-em-aeroportos-e-hoteis-de-sao-paulo',
    titulo: 'Aeroportos e hotéis',
    curto: 'Receptivo e traslado aeroporto – hotel – aeroporto em São Paulo.',
    imagem: '/img/van-hotel.webp',
    imagemCelular: '/img/van-hotel-720.webp',
    icone: 'airplane',
    seo: 'Receptivo e transfer em aeroportos e hotéis de São Paulo com van ou micro-ônibus com motorista. Guarulhos e Congonhas.',
    texto: [
      'Aluguel de van e micro-ônibus com motorista para receptivos nos aeroportos de São Paulo e traslados aeroporto – hotel – aeroporto.',
      'Informe o horário do voo e a quantidade de bagagem na reserva: o horário de saída já considera o tempo até o embarque.',
    ],
    destaques: ['Guarulhos e Congonhas', 'Hotéis de São Paulo', 'Horário calculado pelo voo', 'Bilíngue sob consulta'],
  },
  {
    slug: 'locacao-de-micro-onibus-e-onibus-para-viagens-e-excursoes',
    titulo: 'Viagens e excursões',
    curto: 'Micro-ônibus e ônibus para viagens curtas ou de vários dias.',
    imagem: '/img/onibus-traseira.webp',
    imagemCelular: '/img/onibus-traseira-720.webp',
    icone: 'signpost-split',
    seo: 'Locação de micro-ônibus e ônibus com motorista para viagens e excursões saindo de São Paulo, curtas ou de vários dias.',
    texto: [
      'Explore destinos, participe de eventos especiais ou viaje com amigos, família ou colegas em um ambiente confortável e seguro.',
      'Micro-ônibus e ônibus modernos e bem equipados, para grupos pequenos ou grandes, em viagens curtas ou excursões de vários dias.',
    ],
    destaques: ['Micro-ônibus até 30 lugares', 'Ônibus de 46 lugares', 'Curtas ou de vários dias', 'Motorista profissional'],
  },
]

export const FROTA = [
  { nome: 'Van 15 lugares', lugares: 15, modelo: 'Renault Master Executiva', imagem: '/img/van15.webp', itens: ['Ar-condicionado', 'Poltronas', 'Espaço para bagagem'] },
  { nome: 'Van 18 lugares', lugares: 18, modelo: 'Mercedes-Benz Sprinter 416 Longa', imagem: '/img/van18.webp', itens: ['Ar-condicionado', 'Poltronas', 'Portas deslizantes'] },
  { nome: 'Van 20 lugares', lugares: 20, modelo: 'Mercedes-Benz Sprinter 416 Longa', imagem: '/img/van-hotel-2.webp', itens: ['Ar-condicionado', 'Poltronas reclináveis', 'Espaço para bagagem'] },
  { nome: 'Micro-ônibus', lugares: 30, modelo: 'Marcopolo Volare', imagem: '/img/micro-lateral.webp', itens: ['Ar-condicionado', '30 poltronas reclináveis'] },
  { nome: 'Ônibus', lugares: 46, modelo: 'Marcopolo G7', imagem: '/img/onibus-2.webp', itens: ['Ar-condicionado', 'Wi-Fi', 'TV', 'Poltronas executivas'] },
]

export const PUBLICOS = [
  { icone: 'building', titulo: 'Empresas', texto: 'Equipes, executivos, convenções e feiras.' },
  { icone: 'compass', titulo: 'Turismo e grupos', texto: 'City tour, excursões e passeios do seu jeito.' },
  { icone: 'people', titulo: 'Escolas', texto: 'Estudo do meio e viagens escolares com segurança.' },
  { icone: 'airplane', titulo: 'Viajantes', texto: 'Aeroportos, hotéis e Porto de Santos.' },
]

export const MOTIVOS = [
  { titulo: 'Motorista profissional', texto: 'Toda locação é com motorista — ninguém do grupo precisa dirigir.' },
  { titulo: 'De 15 a 46 lugares', texto: 'Vans, micro-ônibus e ônibus para o tamanho exato do grupo.' },
  { titulo: `Desde ${SITE.desde}`, texto: 'Pontualidade, cortesia e discrição no transporte de passageiros.' },
  { titulo: 'Aluguéis flexíveis', texto: 'Só ida, ida e volta, o dia todo ou vários dias.' },
]
