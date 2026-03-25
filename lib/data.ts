export interface City {
  name: string;
  slug: string;
  neighborhoods: string[];
  description?: string;
}

export interface Service {
  name: string;
  slug: string;
  description: string;
}

export interface Brand {
  name: string;
  slug: string;
}

export interface Testimonial {
  name: string;
  date: string;
  rating: number;
  text: string;
}

export const cities: City[] = [
  {
    name: "Americana",
    slug: "americana",
    description: "Americana, SP, possui diversos bairros organizados por regiões, destacando-se áreas residenciais valorizadas, bairros centrais e zonas em expansão. A cidade é bem conectada pelas rodovias Anhanguera e Luiz de Queiroz, facilitando o acesso entre os bairros. O Diego Chaveiro atende todas as regiões de Americana, desde o Centro até a Praia dos Namorados, com rapidez e segurança.",
    neighborhoods: [
      "Centro", 
      "Vila Jones", 
      "Vila Santa Maria", 
      "Vila Galo", 
      "Jardim Girassol", 
      "Jardim São Paulo", 
      "Vila Frezzarin", 
      "Jardim Ipiranga", 
      "Jardim Werner Plaas", 
      "Jardim Terramérica I", 
      "Jardim Terramérica II", 
      "Jardim Terramérica III", 
      "Nova Carioba", 
      "Cariobinha", 
      "São Vito", 
      "Jardim São José", 
      "Jardim Brasil", 
      "Jardim América", 
      "Jardim São Sebastião", 
      "Cidade Jardim", 
      "Jardim Planalto", 
      "Parque Universitário", 
      "Jardim Lizandra", 
      "Jardim Novo Horizonte", 
      "Bairro Carioba", 
      "Vila Bertini", 
      "Vila Cordenonsi", 
      "Vila Margarida", 
      "Vila Mariana", 
      "Praia dos Namorados", 
      "Balneário Riviera", 
      "Monte Carlo", 
      "Parque D. Pedro II",
      "Praia Azul",
      "Vila Molon",
      "Parque das Nações"
    ]
  },
  {
    name: "Campinas",
    slug: "campinas",
    description: "Campinas conta com centenas de bairros distribuídos por suas regiões e distritos, desde o charmoso Cambuí até distritos universitários como Barão Geraldo. O Diego Chaveiro atende toda a metrópole com rapidez, garantindo socorro 24h para residências, comércios e veículos em qualquer região da cidade.",
    neighborhoods: [
      "Cambuí", 
      "Nova Campinas", 
      "Taquaral", 
      "Jardim Madalena", 
      "Barão Geraldo", 
      "Sousas", 
      "Joaquim Egídio", 
      "Mansões Santo Antônio", 
      "Bonfim", 
      "Castelo", 
      "Vila Palmeiras", 
      "Centro", 
      "Swiss Park", 
      "Jardim Chapadão",
      "Ouro Verde",
      "Campo Grande"
    ]
  },
  {
    name: "Sumaré",
    slug: "sumare",
    description: "Sumaré, no interior de SP, é a sede do Diego Chaveiro, onde possuímos nosso ponto físico para melhor atendê-lo. A cidade é dividida em 7 regiões principais: Centro, Nova Veneza, Matão, Maria Antonia, Picerno, Área Cura e Zona Rural. Atendemos todas as regiões de Sumaré com rapidez e eficiência, garantindo socorro 24h para aberturas, chaves codificadas e segurança residencial.",
    neighborhoods: [
      "Centro", 
      "Jardim Paulista", 
      "Jardim Macarenko", 
      "Jardim Boa Esperança", 
      "Vila Rebouças", 
      "Parque Franceschini", 
      "Nova Veneza", 
      "Jardim Bela Vista", 
      "Jardim Luiz Cia", 
      "Jardim Monte Santo", 
      "Jardim Paulistano", 
      "Matão", 
      "Jardim Maria Antonia", 
      "Jardim Picerno I", 
      "Jardim Picerno II", 
      "Jardim Basilicata", 
      "Jardim das Orquídeas", 
      "Área Cura", 
      "Jardim Bom Retiro", 
      "Jardim Bandeirantes", 
      "Santiago", 
      "Jardim de Nadai", 
      "Chácaras Cruzeiro do Sul", 
      "Estância Árvore da Vida", 
      "Jardim Alvorada", 
      "Jardim Dall'Orto", 
      "Chácaras Primavera"
    ]
  },
  {
    name: "Hortolândia",
    slug: "hortolandia",
    description: "Hortolândia possui mais de 135 bairros e é caracterizada por um rápido desenvolvimento, misturando áreas residenciais tranquilas e polos comerciais/industriais. O Diego Chaveiro atende todas as regiões de Hortolândia, do Jardim Amanda ao Rosolém, com técnicos de plantão 24h para emergências.",
    neighborhoods: [
      "Centro", 
      "Jardim Amanda I", 
      "Jardim Amanda II", 
      "Jardim Rosolém", 
      "Jardim São Sebastião", 
      "Parque Gabriel", 
      "Parque Orestes Ôngaro", 
      "Parque Ortolândia", 
      "Jardim Firenze", 
      "Jardim Nova América", 
      "Jardim Santa Esmeralda", 
      "Jardim Boa Esperança", 
      "Jardim Malta", 
      "Jardim Minda", 
      "Chácaras Coelho", 
      "Granja Ito", 
      "Jardim Aline", 
      "Jardim Carmen Cristina", 
      "Jardim das Colinas", 
      "Jardim Nossa Senhora Auxiliadora", 
      "Jardim Nova Europa", 
      "Jardim Santa Fé", 
      "Jardim Santa Izabel", 
      "Jardim Santana", 
      "Jardim Santiago", 
      "Jardim São Bento", 
      "Jardim São Jorge", 
      "Jardim São Pedro", 
      "Jardim Stefânia", 
      "Jardim Sumarezinho", 
      "Jardim Villagio Ghiraldelli", 
      "Parque do Horto", 
      "Parque São Miguel", 
      "Recanto do Sol",
      "Novo Ângulo",
      "Bom Retiro"
    ]
  },
  {
    name: "Nova Odessa",
    slug: "nova-odessa",
    description: "Nova Odessa, conhecida como o 'Paraíso Verde', possui um planejamento urbano que equilibra áreas industriais, comerciais e residenciais de alta qualidade. O Diego Chaveiro atende toda a cidade, do Portal dos Nobres ao Centro, com técnicos especializados e atendimento 24h.",
    neighborhoods: [
      "Centro", 
      "Jardim Santa Rosa", 
      "Jardim Bela Vista", 
      "Portal dos Nobres", 
      "Jardim Flamboyant", 
      "Jardim Maria Helena", 
      "Altos do Klavin", 
      "Jardim Marajoara", 
      "Jardim São Manoel", 
      "Jardim dos Lagos", 
      "Distrito Industrial", 
      "Parque Industrial Progresso", 
      "Jardim Induspark",
      "Jardim Eden",
      "Parque Fabrício"
    ]
  },
  {
    name: "Paulínia",
    slug: "paulinia",
    description: "Paulínia é reconhecida por sua alta qualidade de vida e planejamento urbano, com bairros que variam de centros comerciais movimentados a complexos de condomínios de luxo. O Diego Chaveiro atende todas as regiões de Paulínia, do Parque Brasil 500 ao João Aranha, com rapidez e segurança 24h.",
    neighborhoods: [
      "Centro", 
      "Betel", 
      "João Aranha", 
      "São José", 
      "Parque Brasil 500",
      "Jardim América",
      "Santa Terezinha",
      "Vila Bressani",
      "Vila Monte Alegre",
      "Nova Veneza",
      "São Bento",
      "Alto de Pinheiros",
      "Parque da Represa"
    ]
  },
  {
    name: "Santa Bárbara d'Oeste",
    slug: "santa-barbara-do-oeste",
    description: "Santa Bárbara d'Oeste possui excelente infraestrutura e uma divisão clara entre áreas residenciais tradicionais, distritos industriais e novos condomínios de alto padrão. O Diego Chaveiro atende todas as zonas da cidade, da Cidade Nova ao Residencial Dona Margarida, com técnicos de plantão 24h.",
    neighborhoods: [
      "Centro", 
      "Cidade Nova", 
      "Mollon", 
      "Santa Rita", 
      "Jardim Europa",
      "Residencial Dona Margarida",
      "Residencial Furlan",
      "Terras de Santa Bárbara",
      "Jardim Panambi",
      "Vila Oliveira",
      "Jardim Primavera",
      "Planalto do Sol",
      "Distrito Industrial I",
      "Distrito Industrial II",
      "Distrito Industrial III"
    ]
  },
  {
    name: "Monte Mor",
    slug: "monte-mor",
    description: "Monte Mor, no interior de São Paulo, possui diversos bairros que se dividem entre a região central, áreas mais urbanizadas próximas à rodovia SP-101 e áreas rurais. O Diego Chaveiro atende todas as regiões de Monte Mor com rapidez e segurança 24h.",
    neighborhoods: [
      "Centro",
      "Jardim Progresso",
      "Jardim Moreira",
      "Jardim Paulista",
      "Jardim Alvorada",
      "Jardim Colina",
      "Parque dos Pinheiros",
      "Rio Acima",
      "Jardim Panorama",
      "Sítio Monjolinho",
      "Boa Esperança"
    ]
  }
];

export const services: Service[] = [
  {
    name: "Cópia de Chaves",
    slug: "copia-de-chaves",
    description: "Duplicação de chaves simples, tetra, de segurança e chaves para portas de vidro com precisão milimétrica."
  },
  {
    name: "Abertura de Portas",
    slug: "abertura-de-portas",
    description: "Serviço de emergência para quando as chaves são perdidas ou esquecidas dentro do imóvel, realizado sem danos."
  },
  {
    name: "Instalação e Troca de Fechaduras",
    slug: "instalacao-e-troca-de-fechaduras",
    description: "Instalação de novos mecanismos, incluindo fechaduras eletrônicas, digitais, simples e tetra para sua segurança."
  },
  {
    name: "Extração de Chaves Quebradas",
    slug: "extracao-de-chaves-quebradas",
    description: "Remoção técnica de fragmentos de chaves que ficaram presos dentro do cilindro da fechadura sem danificar o miolo."
  },
  {
    name: "Unificação de Segredo (Mestragem)",
    slug: "unificacao-de-segredo",
    description: "Configuração para que uma única chave abra múltiplas portas de um mesmo local, trazendo praticidade ao seu dia a dia."
  },
  {
    name: "Abertura de Veículos",
    slug: "abertura-de-veiculos",
    description: "Destrancamento de carros de todas as marcas e modelos sem causar danos à lataria ou ao mecanismo da porta."
  },
  {
    name: "Chaves Codificadas",
    slug: "chaves-codificadas",
    description: "Confecção, programação e conserto de chaves com chip eletrônico (transponder) e telecomandos automotivos."
  },
  {
    name: "Cópia de Chaves Canivete",
    slug: "copia-de-chaves-canivete",
    description: "Criação de chaves reserva completas, integrando o controle remoto e a lâmina em um design moderno e funcional."
  },
  {
    name: "Reparo de Ignição",
    slug: "reparo-de-ignicao",
    description: "Manutenção e troca do miolo da ignição quando a chave apresenta dificuldade para girar ou trava no cilindro."
  },
  {
    name: "Abertura de Cofres",
    slug: "abertura-de-cofres",
    description: "Manutenção e abertura técnica de cofres mecânicos ou digitais quando a senha é perdida ou o sistema apresenta falha."
  },
  {
    name: "Atendimento 24 Horas",
    slug: "atendimento-24-horas",
    description: "Plantão de emergência para socorro imediato em qualquer horário do dia ou da noite, todos os dias da semana."
  },
  {
    name: "Venda de Acessórios",
    slug: "venda-de-acessorios",
    description: "Comercialização de cadeados, molas de porta, lubrificantes (grafite) e chaveiros personalizados de alta qualidade."
  }
];

export const brands: Brand[] = [
  { name: "Volkswagen", slug: "volkswagen" },
  { name: "Fiat", slug: "fiat" },
  { name: "Chevrolet", slug: "chevrolet" },
  { name: "Ford", slug: "ford" },
  { name: "Toyota", slug: "toyota" },
  { name: "Honda", slug: "honda" },
  { name: "Hyundai", slug: "hyundai" },
  { name: "Renault", slug: "renault" },
  { name: "Jeep", slug: "jeep" },
  { name: "Nissan", slug: "nissan" },
  { name: "BMW", slug: "bmw" },
  { name: "Mercedes-Benz", slug: "mercedes-benz" },
  { name: "Audi", slug: "audi" },
  { name: "Land Rover", slug: "land-rover" },
  { name: "Mitsubishi", slug: "mitsubishi" },
  { name: "Peugeot", slug: "peugeot" },
  { name: "Citroën", slug: "citroen" },
  { name: "Kia", slug: "kia" },
  { name: "Volvo", slug: "volvo" },
  { name: "Chery", slug: "chery" }
];

export const testimonials: Testimonial[] = [
  {
    name: "Sabrina Santos",
    date: "4 meses atrás",
    rating: 5,
    text: "Atendimento super rápido, recomendo"
  },
  {
    name: "Andreza Cardoso",
    date: "4 meses atrás",
    rating: 5,
    text: "Excelente profissional , muito satisfeita com o trabalho que entregam ,ótima afiação ."
  },
  {
    name: "Michel Stock",
    date: "4 meses atrás",
    rating: 5,
    text: "Muito bom excelente profissional!"
  },
  {
    name: "Severino Eduardo Pantarotti",
    date: "5 meses atrás",
    rating: 5,
    text: "Bom atendimento e rapidez no serviço. Recomendo"
  },
  {
    name: "Fúria Da noite",
    date: "5 meses atrás",
    rating: 5,
    text: "Serviço de primeiro e qualidade nos produtos."
  },
  {
    name: "Orivaldo manfrin neto manfrin",
    date: "5 meses atrás",
    rating: 5,
    text: "O mais top do Brasil!!!"
  },
  {
    name: "Wesley Tiago Siqueira",
    date: "5 meses atrás",
    rating: 5,
    text: "Um ótimo atendimento e rapidez na execução do serviço prestado tá de parabéns..."
  }
];
