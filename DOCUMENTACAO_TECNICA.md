# Documentação técnica — Thunder Store

## 1. Identificação do projeto

**Nome:** Thunder Store  
**Tipo:** Site institucional responsivo (*one-page*)  
**Desenvolvedor:** Felipe Gomes  
**Contexto:** Projeto acadêmico de Análise e Desenvolvimento de Sistemas  
**Tecnologias:** HTML5, CSS3, JavaScript, Git e GitHub

## 2. Resumo

O projeto Thunder Store consiste no desenvolvimento de um site institucional para uma loja especializada em produtos Apple e acessórios. O objetivo é apresentar a empresa e suas principais categorias, transmitir informações relevantes ao consumidor e facilitar o contato comercial pelo WhatsApp. A solução foi construída com tecnologias web fundamentais, sem frameworks e sem funcionalidades de comércio eletrônico transacional.

## 3. Problema e justificativa

Uma loja que utiliza principalmente canais de atendimento e redes sociais pode se beneficiar de um endereço próprio para organizar informações institucionais, apresentar categorias e esclarecer dúvidas recorrentes. O site concentra essas informações em uma interface única, com navegação simples e acesso rápido ao atendimento.

Do ponto de vista acadêmico, o projeto permite demonstrar a integração entre estrutura HTML, estilização CSS, programação de interações com JavaScript, responsividade e versionamento com Git.

## 4. Objetivos

### 4.1 Objetivo geral

Desenvolver um site institucional responsivo para a Thunder Store, apresentando a marca, produtos, diferenciais e canais de contato de maneira organizada e acessível em diferentes dispositivos.

### 4.2 Objetivos específicos

- Construir uma página estruturada com HTML5.
- Aplicar identidade visual consistente com CSS3.
- Criar navegação interna por âncoras.
- Implementar interações com JavaScript puro.
- Adaptar a interface a computadores, tablets e celulares.
- Facilitar o atendimento com links personalizados de WhatsApp.
- Organizar o código-fonte em repositório Git.
- Disponibilizar o projeto por hospedagem estática.

## 5. Escopo

### 5.1 Incluído

- Cabeçalho com identidade visual e navegação.
- Seção principal com apresentação e vídeo.
- Faixa de informações de confiança.
- Seis categorias de produtos.
- Seções de diferenciais, Sobre e Clientes.
- FAQ interativo.
- Links para WhatsApp e canais externos.
- Layout responsivo e favicon.

### 5.2 Fora do escopo

- Cadastro e autenticação de usuários.
- Catálogo com atualização automática de estoque.
- Carrinho de compras e checkout.
- Integração com meios de pagamento.
- Banco de dados, painel administrativo e APIs próprias.

**Importante:** o site é institucional e não processa compras diretamente.

## 6. Requisitos funcionais

| ID | Requisito | Implementação |
| --- | --- | --- |
| RF01 | Exibir informações da loja | Seções Hero e Sobre |
| RF02 | Apresentar categorias | Grade com seis cards |
| RF03 | Navegar entre seções | Links com identificadores `#inicio`, `#produtos`, `#clientes`, `#sobre` e `#faq` |
| RF04 | Iniciar contato comercial | Links `wa.me` com mensagens pré-preenchidas |
| RF05 | Exibir avaliações e clientes | Seção Clientes e link externo |
| RF06 | Consultar dúvidas frequentes | FAQ expansível por JavaScript |
| RF07 | Navegar pelo celular | Menu hambúrguer com abertura e fechamento |

## 7. Requisitos não funcionais

| ID | Requisito | Abordagem |
| --- | --- | --- |
| RNF01 | Responsividade | Flexbox, CSS Grid e *media queries* |
| RNF02 | Facilidade de uso | Menu simples, navegação interna e botões de contato |
| RNF03 | Manutenibilidade | Separação entre HTML, CSS e JavaScript |
| RNF04 | Compatibilidade | Tecnologias web nativas dos navegadores modernos |
| RNF05 | Publicação simples | Hospedagem estática pelo GitHub Pages |
| RNF06 | Informações para buscadores | `title`, `meta description` e textos alternativos |

## 8. Arquitetura e organização

A aplicação é composta por arquivos estáticos, executados diretamente no navegador:

```text
Navegador
   │
   ├── index.html       → conteúdo e estrutura
   ├── css/style.css    → aparência e responsividade
   ├── js/script.js     → interações
   ├── img/             → imagens e identidade visual
   └── videos/          → mídia da seção principal

Links externos → WhatsApp / canal de clientes / GitHub
```

Não há servidor de aplicação nem banco de dados. O GitHub hospeda o repositório e o GitHub Pages pode disponibilizar os arquivos estáticos na internet.

## 9. Estrutura das seções

1. **Cabeçalho:** logo, menu de navegação e acesso ao WhatsApp.
2. **Hero:** chamada principal, texto de apresentação, botões e vídeo.
3. **Confiança:** informações sobre clientes, procedência, envios e atendimento.
4. **Produtos:** seis cards com imagens e consulta via WhatsApp.
5. **Diferenciais:** procedência, envio nacional e atendimento personalizado.
6. **Sobre:** breve apresentação da loja e indicadores.
7. **Clientes:** fotos e depoimentos apresentados na página.
8. **FAQ:** cinco perguntas frequentes com abertura e fechamento de respostas.
9. **Rodapé:** identificação do desenvolvedor e link para seu GitHub.

## 10. Implementação técnica

### 10.1 HTML5

O `index.html` organiza os elementos da página em cabeçalho, seções de conteúdo e rodapé. Cada seção principal possui um `id` utilizado na navegação por âncoras, como `href="#produtos"`.

O HTML também inclui atributos de apoio à acessibilidade no botão do menu, como `aria-label`, `aria-expanded` e `aria-controls`.

### 10.2 CSS3

O `style.css` define cores, tipografia, espaçamentos, imagens, botões e composição visual. As categorias e os depoimentos usam CSS Grid; outras áreas usam Flexbox. As regras `@media (max-width: 768px)` e `@media (max-width: 480px)` reorganizam os elementos em telas menores.

A identidade visual utiliza predominantemente preto, branco, cinza-claro e laranja (`#f56a00`).

### 10.3 JavaScript — FAQ

O script seleciona os botões `.faq-pergunta`, associa eventos de clique e alterna a exibição da resposta imediatamente seguinte. Também troca o indicador visual entre `+` e `−`.

**Conceitos demonstrados:** seleção de elementos no DOM, iteração com `forEach`, eventos, condicionais e alteração de estilos e conteúdo.

### 10.4 JavaScript — menu mobile

O script seleciona `.menu-toggle` e `#menu-principal`. Ao clicar no botão, utiliza `classList.toggle("ativo")` para mostrar ou ocultar o menu. O símbolo alterna entre `☰` e `✕`, e os atributos de acessibilidade são atualizados. Ao selecionar uma seção, o menu é fechado.

**Conceitos demonstrados:** manipulação de classes, eventos, seleção de links e atualização de atributos HTML.

### 10.5 WhatsApp

Os links utilizam `https://wa.me/` com número de atendimento e parâmetro `text` para preencher automaticamente a mensagem. Cada categoria possui uma mensagem relacionada ao produto selecionado. O envio da mensagem depende da confirmação do visitante no WhatsApp.

## 11. Responsividade

A página mantém uma apresentação horizontal em telas maiores e reorganiza o conteúdo em larguras menores. As principais adaptações são:

- Substituição do menu tradicional por menu hambúrguer.
- Hero com texto e vídeo em disposição vertical.
- Grade de produtos em duas colunas em telas intermediárias e uma coluna em celulares menores.
- Cards de diferenciais e clientes empilhados.
- Ajustes de tamanho de fonte, espaçamento, vídeo e botões.

Os pontos de quebra utilizados no projeto são **768px** e **480px**. Eles orientam a apresentação, mas não representam uma lista fechada de dispositivos.

## 12. SEO e acessibilidade

**Implementações realizadas:** título da página, descrição em metadados, favicon, atributos `alt` em imagens, elementos `<button>` nas interações e informações `aria-*` no menu mobile.

**Melhorias recomendadas:** permitir que o FAQ comunique seu estado expandido por `aria-expanded`; revisar contraste e foco visível de elementos interativos; testar navegação completa por teclado; executar auditoria de acessibilidade e desempenho.

## 13. Controle de versão

O projeto utiliza Git e um repositório GitHub, com commits por etapa de desenvolvimento. O fluxo básico é:

```bash
git status
git add .
git commit -m "Descreve a alteracao realizada"
git push origin main
```

Esse processo registra a evolução do código e facilita a identificação das alterações.

## 14. Plano de testes

| Teste | Procedimento | Resultado esperado |
| --- | --- | --- |
| Navegação | Clicar nos itens do menu | Rolar até a seção correta |
| Menu mobile | Abrir e fechar em largura reduzida | Alternar visibilidade sem sobreposição indevida |
| Fechamento do menu | Selecionar um item do menu mobile | Navegar e fechar o menu |
| FAQ | Abrir e fechar perguntas | Exibir e ocultar respostas |
| WhatsApp | Clicar nos botões de contato | Abrir atendimento com mensagem adequada |
| Layout | Testar diferentes larguras | Não cortar conteúdo nem exigir rolagem horizontal |
| Mídia | Abrir página publicada | Carregar imagens, favicon e vídeo |
| Links externos | Abrir clientes e GitHub | Direcionar aos endereços corretos |

**Situação:** os principais recursos foram testados durante o desenvolvimento local, conforme relatado pelo desenvolvedor. Os testes de produção devem ser repetidos após a publicação no GitHub Pages.

## 15. Publicação

A publicação pode ser realizada no GitHub Pages, selecionando a branch `main` e a pasta `/ (root)` nas configurações de Pages. O endereço esperado, após habilitação e conclusão do deploy, é:

https://eufelipeagomes.github.io/thunderstore-site/

A publicação deve ser validada no endereço definitivo, incluindo links, imagens, vídeo, CSS e JavaScript.

## 16. Limitações e melhorias futuras

- O conteúdo de produtos e depoimentos é atualizado manualmente no HTML.
- Não existe gestão de estoque ou consulta automática de disponibilidade.
- O contato comercial acontece fora do site, pelo WhatsApp.
- Imagens e vídeo podem ser otimizados para melhorar o carregamento.
- Podem ser incluídos testes automatizados e auditorias com Lighthouse.
- Uma evolução futura pode incluir catálogo administrável, desde que compatível com o objetivo do negócio.

## 17. Conclusão

O projeto Thunder Store demonstra a construção de uma solução web institucional utilizando HTML5, CSS3 e JavaScript. A página integra conteúdo informativo, identidade visual, navegação por seções, recursos interativos e responsividade, oferecendo um ponto central de apresentação da loja e encaminhamento ao atendimento comercial.

Sob a perspectiva acadêmica, o desenvolvimento permitiu aplicar conceitos fundamentais de front-end, manipulação do DOM, organização de arquivos, testes e versionamento, mantendo o escopo compatível com um projeto estático de pequeno porte.

## 18. Referências técnicas para estudo

- MDN Web Docs — HTML, CSS e JavaScript: https://developer.mozilla.org/pt-BR/
- Git — documentação: https://git-scm.com/doc
- GitHub Docs — GitHub Pages: https://docs.github.com/pt/pages
- W3C WAI — acessibilidade web: https://www.w3.org/WAI/
