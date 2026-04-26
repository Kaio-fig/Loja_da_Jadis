# 🐦‍⬛ Loja da Jadis - Inventário Interativo (Tormenta 20)

Bem-vindo à **Loja da Jadis**, uma aplicação web *point-and-click* desenvolvida para elevar a imersão de compra e gerenciamento de inventário em campanhas do sistema de RPG **Tormenta 20**.

Em vez de apenas riscar números em uma folha de papel, os jogadores podem interagir visualmente com o balcão da boticária Jadis, vasculhar suas maletas e prateleiras, e gerenciar seus Tibares (T$) e espaços de carga em tempo real.

---

## ✨ Funcionalidades (Features)

* **🛒 Sistema de Carrinho Inteligente:** Adicione e remova itens com cálculo automático de custo total (Tibares) e peso (Slots de Espaço).
* **🔍 Inspeção de Itens (Tooltips):** Passe o mouse sobre qualquer item para ler sua descrição mecânica diretamente do livro de regras.
* **🗄️ Categorização Física:** Interaja com diferentes partes do cenário para abrir categorias específicas (ex: Maleta para Alquímicos, Estante para Poções).
* **☠️ Área Restrita:** Organização visual diferenciada para itens perigosos ou ilegais, como Venenos.

---

## 🛠️ Arquitetura e Tecnologias

## 🛠️ Arquitetura e Tecnologias

Este projeto evoluiu de uma estrutura "Vanilla" para uma arquitetura moderna baseada em componentes, garantindo um código muito mais limpo, fácil manutenção e escalabilidade para adicionar centenas de novos itens no futuro.

* **React.js:** Utilizado como a biblioteca principal para a criação de componentes de interface modulares (como as maletas, estantes e o painel do carrinho), além do gerenciamento de estado (soma de T$ e slots) e reatividade instantânea.
* **Vite:** Ferramenta de build de altíssima performance que gerencia nosso ambiente de desenvolvimento local (*Hot Reload*) e compila o código final.
* **Node.js (Apenas Dev):** Utilizado exclusivamente como ambiente de desenvolvimento para gerenciar os pacotes via `npm`.
* **Static Build (Construção Estática Offline):** A grande mágica desta stack! Apesar de usarmos Node/React para programar, o comando de build do Vite "empacota" todo o projeto em arquivos estáticos minificados e otimizados (HTML, CSS e JS puros). Isso permite que a aplicação final rode **100% offline** direto no navegador de qualquer jogador, sem a necessidade de instalar nada ou hospedar em um servidor externo!

---

## 🎨 A Equipe (Créditos)

Este projeto ganhou vida através da união de código e arte:

* **Desenvolvedor:** Kaio Figueiredo - *Responsável pela arquitetura do código, lógica do JavaScript e integração da interface.* 
    * https://www.linkedin.com/in/kaio-rodrigues-fig
    * https://github.com/Kaio-fig

* **Designer e Artista (UI/UX):** Victor Hugo Cunico - *Criador de todos os assets visuais originais, design da personagem Jadis, cenários e ícones dos itens.*
    * https://www.instagram.com/capuccino_descafeinado   
    * https://www.linkedin.com/in/victor-hugo-mendes-art
    * https://www.artstation.com/user-2569726

---

## 🚀 Como Executar o Projeto

Existem duas formas de acessar a Loja da Jadis, dependendo se você vai jogar ou ajudar a desenvolver:

### 🎲 Opção A: Para Jogar (Uso Offline na Mesa)
Ideal para os jogadores durante a sessão. Custo zero e nenhuma instalação necessária!
1. Peça ao Mestre/Desenvolvedor a versão compilada do jogo (a pasta chamada `dist`).
2. Descompacte a pasta no seu computador.
3. Dê um duplo clique no arquivo `index.html` que está lá dentro.
4. O sistema abrirá no seu navegador padrão, pronto para as compras!

### 💻 Opção B: Para Desenvolvedores (Modo de Edição)
Se você quer adicionar novos itens ou mexer no código-fonte:
1. Faça o clone deste repositório e certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Abra o terminal na pasta do projeto e instale as dependências:
   ```bash
   npm install

⚖️ Direitos Autorais e Aviso Legal

Este é um projeto não-oficial feito de fãs para fãs. A Loja da Jadis foi desenvolvida estritamente para uso pessoal e facilitação de mesas de RPG.

O sistema de regras, nomes de itens, mecânicas, magias e descrições pertencem exclusivamente à Jambô Editora e aos criadores de Tormenta 20.

A arte da interface e da personagem Jadis são propriedades intelectuais do artista Victor Hugo Mendes Cunico, não podendo ser comercializadas sem autorização prévia.

Este projeto não possui fins lucrativos e não pretende infringir os direitos autorais dos detentores da marca Tormenta. Apoie a indústria nacional de RPG adquirindo os livros oficiais no site da Jambô Editora.