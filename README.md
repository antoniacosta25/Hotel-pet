# Hotel Pet — versão 01: navegação

Protótipo acadêmico do Hotel Pet para a disciplina **Programação Web II (2026.2)**.

- **Autora:** Antônia Graciela Silva Costa.
- **Gerente representada no sistema:** Antônia Graciela Silva Costa.
- **Docente:** Lucas Santos de Oliveira.

Esta versão apresenta a visão da gerente e prepara a etapa de navegação do trabalho final.

O acesso é demonstrativo e a foto da gerente aparece somente após a entrada, nas páginas internas. A autoria desta versão é de **Antônia Graciela Silva Costa**.

O projeto usa HTML5 semântico, CSS3 autoral e JavaScript puro. Não utiliza bibliotecas, frameworks, fontes ou imagens remotas. Os arquivos de interface e as imagens ficam no próprio projeto para abertura local e uso offline.

## Atividade e etapas

O enunciado do Moodle descreve a continuação do Hotel Pet desenvolvido em Web I. Na disciplina atual, o trabalho é individual, sem backend, e deve avançar em navegação, buscas e edição de tabelas. A atividade apresenta estes marcos:

| Etapa | Data prevista | Escopo |
| --- | --- | --- |
| Semana 1 | 21/10/2026 | Navegação entre telas e módulos |
| Semana 2 | 28/10/2026 | Buscas nas listagens |
| Semana 3 | 04/11/2026 | Tabelas e edição dos registros |

O vencimento geral indicado no Moodle é **04/11/2026, às 23:59**. O curso também orienta registrar o nome e o link aberto do repositório na planilha da turma e informa que as entregas frequentes serão avaliadas por meio do GitHub.

### O que vem do enunciado e o que foi personalizado

O PDF da atividade define o uso individual de HTML, CSS e JavaScript, proíbe bibliotecas/frameworks, limita o trabalho à visão do gerente, informa que não haverá backend e organiza o cronograma em navegação, buscas e tabelas. A personalização pedida para este protótipo define Antônia Graciela Silva Costa, o e-mail exibido, a foto local, a identidade visual rosa, o valor padrão de R$ 50,00, a capacidade padrão de 30 vagas e a busca desativada enquanto o foco for a etapa de navegação.

## Identidade da gerente

Nas páginas internas, a faixa superior identifica **Antônia Graciela Silva Costa — Gerente**. A foto local da gerente e o nome no cabeçalho são clicáveis e abrem `perfil.html`. A mesma foto aparece no perfil e no registro da gerente em `usuarios.html`; ela não aparece na tela anterior ao acesso.

- E-mail configurado no protótipo: `antoniagraciela@hotmail.com`.
- Telefone de demonstração: `(77) 99123-4567`; o perfil o identifica como fictício.
- Funcionária de exemplo: Juliana Santos, com dados demonstrativos.

A foto da gerente é local (`imagens/antonia-graciela-perfil.png`) e aparece somente nas páginas internas, no perfil e na lista de usuários.

## O que está implementado

### Acesso e navegação

- `index.html` é a tela de entrada, com logomarca local, e-mail preenchido e botão compacto **ENTRAR**.
- O campo de senha pode ser mostrado ou ocultado. A senha demonstrativa `ads2025` fica pré-preenchida no HTML, mas não é validada nem enviada; o JavaScript limpa o campo e não a persiste no navegador antes de abrir `painel.html`.
- `painel.html` concentra o resumo e os atalhos para Pets, Usuários, Configurações e Reservas.
- O menu lateral, a marca, os breadcrumbs, os botões de retorno e os links de ações conectam as páginas locais existentes.
- O avatar no cabeçalho leva ao perfil da gerente.

### Módulos e telas

- **Pets:** listagem e telas de cadastro, edição e visualização. A raça é escolhida em uma lista nativa de opções; o formulário de edição já mostra Poodle como exemplo selecionado.
- **Usuários:** listagem e telas de cadastro, edição e visualização, incluindo as funções Cliente, Funcionário e Gerente.
- **Reservas:** listagem e telas de cadastro, edição e visualização, com dados de estadia, anotações e recibo demonstrativos.
- **Perfil:** dados de Antônia Graciela Silva Costa, foto local e telefone fictício identificado.
- **Configurações:** valores de diária e capacidade do hotel, com referência padrão de **R$ 50,00** e **30 vagas**.

### Interface e acessibilidade

A interface usa páginas claras, faixa superior rosa e variações da paleta rosa nos botões, estados e links de ação. O CSS foi escrito para este projeto, com adaptação a telas menores. Os campos têm rótulos associados, as imagens locais têm texto alternativo, os links e controles podem ser acessados pelo teclado e há indicação de foco.

## Como abrir

1. Abra `index.html` em um navegador para ver a tela de entrada.
2. Use **ENTRAR** para avançar à demonstração e abrir `painel.html`.
3. Navegue pelo menu lateral ou pelos atalhos do painel. A logomarca e os breadcrumbs **Home** levam ao painel; o avatar leva ao perfil.

Também é possível abrir `painel.html` diretamente para examinar as páginas internas. A demonstração não exige servidor local nem conexão com a internet.

## Estado atual das buscas e tabelas

Os controles de busca nas listas de pets, usuários e reservas estão desativados nesta etapa, conforme o foco inicial em navegação. Eles não filtram os registros. O filtro de raça também apresenta uma lista de opções, mas permanece desativado junto com os demais filtros até a etapa de buscas.

Os registros apresentados nas listas e nas telas de cadastro, edição e visualização são exemplos fixos. Os formulários demonstram campos e caminhos de navegação, mas não criam, atualizam ou removem cadastros de forma persistente. A implementação de buscas e da dinâmica de tabelas pertence às etapas posteriores previstas no enunciado.

## Configurações e limites

`js/hotel-config.js` atualiza o painel e a tela de configurações. Ao salvar, as diárias e a capacidade ficam em `localStorage` neste navegador. O painel usa dois pets como ocupação demonstrativa; a capacidade padrão do hotel é 30 vagas. A configuração local pode variar se alguém a alterar no navegador.

Este projeto **não** possui backend, autenticação segura, sessões, recuperação de senha ou armazenamento remoto de cadastros. A entrada é apenas uma demonstração visual e de navegação; não use a senha demonstrativa como credencial real. A foto, os usuários, os pets, as reservas, as datas, os valores e os status são dados de demonstração. Apenas as configurações do hotel são guardadas localmente pelo JavaScript.

## Arquivos principais

| Arquivo ou pasta | Finalidade |
| --- | --- |
| `index.html` | Tela de entrada demonstrativa |
| `painel.html` | Dashboard e ponto central de navegação |
| `pets.html`, `usuarios.html`, `reservas.html` | Listas e caminhos para ações dos módulos |
| `pet_*.html`, `usuario_*.html`, `reserva_*.html` | Cadastro, edição e visualização |
| `perfil.html` | Dados e foto da gerente |
| `configuracoes.html` | Diárias, capacidade e estado das vagas |
| `css/estilo.css` | Estilos autorais, paleta e layout responsivo |
| `js/login-demo.js` | Revelar/ocultar senha e avançar ao painel sem enviar credenciais |
| `js/hotel-config.js` | Atualizar e guardar configurações no navegador |
| `imagens/` | Logomarca, ícones e imagens locais |
| `docs/ANALISE-ENTREGA-HOTEL-PET.md` | Leitura do enunciado, requisitos e planejamento das etapas |
| `COMO-ENVIAR-PROJETO.md` | Passos para publicar os arquivos no GitHub e registrar o link da turma |

## Próximas etapas do trabalho

- **Até 28/10:** implementar as buscas previstas nas listas de pets, usuários e reservas.
- **Até 04/11:** desenvolver a edição dinâmica das tabelas e revisar o fluxo final.
- Registrar o nome e o link público do repositório GitHub na planilha indicada no Moodle e conferir o procedimento de entrega da turma.

## Referência do enunciado

As datas, as tecnologias, as restrições de bibliotecas/frameworks, o escopo da visão de gerente, a ausência de backend e a orientação sobre GitHub foram conferidos no enunciado **Hotel Pet - Web II** disponibilizado no Moodle para Programação Web II (2026.2). O arquivo local do enunciado está na pasta Downloads do computador usado durante a revisão; os outros dados acadêmicos de apoio estão descritos em `docs/ANALISE-ENTREGA-HOTEL-PET.md`.



