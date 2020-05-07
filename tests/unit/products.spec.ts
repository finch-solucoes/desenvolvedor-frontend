import {
  storeProducts,
  toggleFavoriteProduct,
} from '../../src/store/modules/products/actions';
import reducer, {
  INITIAL_STATE,
} from '../../src/store/modules/products/reducer';
import { Product } from '../../src/store/modules/products/types';

const products: Product[] = [
  {
    id: 1,
    nome: 'Fone Bluetooth XPTO',
    valor: 198.0,
    exclusivo: false,
    promocao: true,
    favorito: false,
    imagem: 'https://i.imgur.com/ZwIhQDO.jpg',
    decricaoCurta:
      'Aparelho intra auricular de som em alta definição sem fio para os viciados de plantão',
    descricaoLonga:
      'Os novos fones de ouvido bluetooth XPTO proporcionam o melhor cancelamento de ruído da classe e a capacidade de misturar o som do ambiente para uma maior consciência dos arredores quando o desejar, fazendo dele o fone de ouvido esportivo mais versátil do mercado. Projetado para o esporte com um design reflexivo exclusivo, os fones de ouvido bluetooth XPTO apresentam o lendário som XPTO e um design de ajuste ergonômico que mantém os fones no lugar, independentemente da intensidade da rotina de exercícios. À prova de suor e disponível em azul, preto, vermelho e azul-esverdeado, os fones de ouvido bluetooth XPTO não precisam de bateria, pois extraem energia e áudio digital diretamente do conector lightning em dispositivos Apple.',
    fichaTecnica: [
      {
        titulo: 'Lightning connector',
        descricao: 'Sim',
      },
      {
        titulo: 'Dynamic Drivers (mm)',
        descricao: '14.8',
      },
      {
        titulo: 'Frequency Response',
        descricao: '10 Hz-22 kHz',
      },
      {
        titulo: 'Dimensões do produto',
        descricao: '1,2 x 2,6 x 2,2 cm ; 104 g',
      },
      {
        titulo: 'Tipo de fones',
        descricao: 'Intra-auricular',
      },
      {
        titulo: 'Tecnologia de conexão',
        descricao: 'Bluetooth',
      },
    ],
  },
  {
    id: 2,
    nome: 'Guarda-Chuva XPTO',
    valor: 19.9,
    exclusivo: true,
    promocao: false,
    favorito: false,
    imagem: 'https://i.imgur.com/jl3mWPw.jpg',
    decricaoCurta:
      'Abertura e fechamentos automáticos da copa, estrutura em fibra',
    descricaoLonga:
      'Guarda chuva original XPTO modelo c-108 abre e fecha automático! Compacto, 37cm quando fechado e 122cm quando aberto. Um dos melhores guarda chuvas do brasil, qualidade garantida! Empresa no Brasil ha mais de 10 anos, sinônimo de qualidade e credibilidade. 90 dias de garantia de fábrica. Cabo em polímero de alto brilho. Design americano, simples, fino e elegante. Haste central com 3 estágios em aço cromado. Tecido 100% em poliéster totalmente impermeável, de alta qualidade e secagem ultra rápida. Sistema central e ponteiras em fibra de vidro, mesmo material de varas de pesca profissionais. Ponteiras flexíveis de altíssima resistência. Sistema interno de molas nas varetas em alumínio no sistema anti-vento. Sistema anti-vento (se virar com ventos fortes não quebra) reforçado com ligas em poliuretano, firmes e flexíveis.',
    fichaTecnica: [
      {
        titulo: 'Cor',
        descricao: 'Azul Marinho',
      },
      {
        titulo: 'Comprimento fechado',
        descricao: '37cm',
      },
      {
        titulo: 'Comprimento aberto',
        descricao: '122 cmz',
      },
      {
        titulo: 'Garantia',
        descricao: '90 dias de fábrica',
      },
      {
        titulo: 'Modelo',
        descricao: 'c-108',
      },
      {
        titulo: 'Material vareta',
        descricao: 'Aço cromado e fibra de vidro',
      },
    ],
  },
  {
    id: 3,
    nome: 'Notebook XPTO',
    valor: 2564.9,
    exclusivo: false,
    promocao: true,
    favorito: false,
    imagem: 'https://i.imgur.com/550ZKEa.jpg',
    decricaoCurta: 'Onde a brincadeira termina e o jogo começa',
    descricaoLonga:
      'A nova série de PCs Gaming XPTO foi projetada para atender as necessidades dos Gamers, com gráficos poderoso, desempenho extremamente rápido e sistema térmico especial, eles farão todas suas experiências se tornarem mais intensas e reais; com o novo notebook XPTO Gaming você terá uma incrível experiência em um notebook com um design elegante e desempenho excepcional; este notebook conta com a 8ª geração de processadores Intel core até Core i7, que fornecem um desempenho poderoso, seja para você jogar todos seus games, streamming de vídeos ou trabalhar em projetos que exigem maior capacidade gráfica; possui placa de vídeo dedicada NVIDIA GeForce GTX de 4GB, que permitem você jogar em configurações intensas com detalhes absolutamente claros; a tela Full HD com painel IPS e antirreflexo proporciona imagens maravilhosas e detalhes surpreendentes, fornecendo visuais fantásticos para jogar seus games preferidos; armazenamento de até 1TB + 256GB SSD permite você armazenar seus conteúdos sem se preocupar com falta de espaço.',
    fichaTecnica: [
      {
        titulo: 'Cor',
        descricao: 'Preto',
      },
      {
        titulo: 'Tipo de processador',
        descricao: 'Intel Core i7',
      },
      {
        titulo: 'Memória Ram',
        descricao: '16gb',
      },
      {
        titulo: 'SSD',
        descricao: '256gb',
      },
      {
        titulo: 'Modelo de placa de vídeo',
        descricao: 'NVIDIA GeForce GTX 1050 Ti com 4GB GDDR5',
      },
      {
        titulo: 'Resolução máxima da tela',
        descricao: '1920 x 1080',
      },
    ],
  },
  {
    id: 4,
    nome: 'Smartphone XPTO',
    valor: 1666.0,
    exclusivo: false,
    promocao: true,
    favorito: false,
    imagem: 'https://i.imgur.com/mtsY67r.jpg',
    decricaoCurta:
      'Um deleite cromático. Inspirando-se na magia do céu, o Smartphone XPTO reflete as fascinantes cores da luz',
    descricaoLonga:
      'Testemunhe a beleza da misteriosa Aurora e da escuridão da noite. Atreva-se a impressionar. O Leica Quad Camera System acomoda sua fotografia para ajudar a ver o mundo em sua totalidade. Este super sistema de câmera incomparável inclui uma Lente SuperZoom, uma Câmera Super Sensora de 40 MP e uma Lente Ultra Grande Angular de 20 MP, dando a você a liberdade de capturar seus momentos incríveis. A nova lente teleobjetiva periscópio permite que mais recursos de zoom óptico sejam colocados em um corpo compacto sem perder a qualidade da imagem. Juntamente com a saturação de cor fornecida pela câmera principal de 40 MP e a estabilidade do OIS, a Lente SuperZoom oferece 10x zoom híbrido para ver o nunca antes visto com grande resolução e riqueza de detalhes. Além disso, pode trazer a lua à sua frente com zoom de até 50x.',
    fichaTecnica: [
      {
        titulo: 'Cor',
        descricao: 'Preto',
      },
      {
        titulo: 'Memória ROM',
        descricao: '256gb',
      },
      {
        titulo: 'Memória Ram',
        descricao: '8gb',
      },
      {
        titulo: 'Tecnologia de conexão',
        descricao: '4G',
      },
      {
        titulo: 'Peso do envio',
        descricao: '599 g',
      },
      {
        titulo: 'Dimensões da embalagem',
        descricao: '18 x 10 x 6 cm',
      },
    ],
  },
];

describe('Products reducer', () => {
  it('should be able to store products in REDUX', () => {
    const state = reducer(INITIAL_STATE, storeProducts(products));

    expect(state.all).toStrictEqual(products);
  });
});
