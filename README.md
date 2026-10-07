# Thunder Store ⚡

**Site institucional responsivo para apresentação de produtos Apple e atendimento personalizado.**

A Thunder Store é uma loja especializada em produtos Apple e acessórios. Este projeto apresenta a marca, suas categorias de produtos, diferenciais, depoimentos de clientes e dúvidas frequentes, direcionando interessados para o atendimento pelo WhatsApp.

> Projeto acadêmico desenvolvido como parte dos estudos em Análise e Desenvolvimento de Sistemas. O site tem caráter institucional: **não é uma loja virtual com checkout**.

## 🌐 Acesso ao site

Após a publicação pelo GitHub Pages, o endereço previsto é:

**https://eufelipeagomes.github.io/thunderstore-site/**

> Confirme o endereço e o status da publicação nas configurações do GitHub Pages.

## ✨ Funcionalidades

- Página única (*one-page*) com navegação por âncoras: Início, Produtos, Clientes, Sobre e FAQ.
- Layout responsivo para computadores, tablets e celulares.
- Menu hambúrguer interativo em telas menores.
- Seção inicial (*hero*) com vídeo de apresentação.
- Seis categorias: iPhone, MacBook, iPad, Apple Watch, AirPods e Acessórios.
- Links de WhatsApp com mensagens pré-preenchidas para cada categoria.
- Seções de diferenciais, apresentação da loja e depoimentos de clientes.
- Perguntas frequentes (FAQ) com respostas expansíveis.
- Metadados básicos de SEO, textos alternativos nas imagens e favicon.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
| --- | --- |
| HTML5 | Estrutura semântica e conteúdo |
| CSS3 | Estilização, grids, Flexbox e responsividade |
| JavaScript | Interação do menu mobile e do FAQ |
| Git | Controle de versões |
| GitHub | Hospedagem do código-fonte |
| GitHub Pages | Publicação estática do site |

Não foram utilizados frameworks ou bibliotecas de interface.

## 📁 Estrutura principal

```text
thunderstore-site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── logo/
│   ├── produtos/
│   └── clientes/
├── videos/
│   └── video-home.mp4
├── README.md
└── DOCUMENTACAO_TECNICA.md
```

> A estrutura mostra os diretórios principais utilizados no projeto; os nomes de algumas imagens podem variar.

## ▶️ Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/eufelipeagomes/thunderstore-site.git
   ```

2. Acesse a pasta:

   ```bash
   cd thunderstore-site
   ```

3. Abra `index.html` em um navegador ou utilize a extensão **Live Server** no VS Code.

O projeto é estático e não requer instalação de dependências.

## 📱 Responsividade

A interface utiliza *media queries* CSS para adaptar o conteúdo a diferentes larguras. Em telas menores, o menu tradicional é substituído pelo botão hambúrguer; grids e seções são reorganizados verticalmente para melhorar a leitura e a navegação.

## 🧪 Testes realizados durante o desenvolvimento

Foram testados localmente o menu mobile, a navegação por âncoras, o FAQ, os links de WhatsApp e a apresentação do conteúdo em diferentes larguras de tela. A publicação online deve ser validada separadamente após o deploy.

## 🔭 Melhorias futuras

- Aprimorar a acessibilidade do FAQ e a navegação por teclado.
- Otimizar imagens e vídeo para desempenho.
- Adicionar imagens e descrições sociais para compartilhamento.
- Realizar auditoria com Lighthouse.
- Avaliar um domínio personalizado.

## 👨‍💻 Autor

**Felipe Gomes** — estudante de Análise e Desenvolvimento de Sistemas.

GitHub: [@eufelipeagomes](https://github.com/eufelipeagomes)

## ℹ️ Observação

Projeto desenvolvido para fins acadêmicos e de apresentação institucional. As marcas e nomes de produtos citados pertencem aos seus respectivos titulares.
