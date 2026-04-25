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

Este projeto foi construído focando em leveza e performance rodando diretamente no navegador, sem necessidade de servidores complexos. Utilizamos a "Trindade da Web" (Vanilla):

* **HTML5:** Estruturação semântica em camadas (2.5D).
* **CSS3:** Animações de interatividade (hover, tooltips), flexbox para layout e transições de painel.
* **JavaScript (ES6):** Lógica de estado do carrinho, banco de dados local do catálogo de itens e manipulação do DOM.

---

## 🎨 A Equipe (Créditos)

Este projeto ganhou vida através da união de código e arte:

* **Desenvolvedor:** Kaio Figueiredo - *Responsável pela arquitetura do código, lógica do JavaScript e integração da interface.* 
    * https://www.linkedin.com/in/kaio-rodrigues-fig
    * https://github.com/Kaio-fig

* **Designer e Artista (UI/UX):** Victor Hugo Cunico - *Criador de todos os assets visuais originais, design da personagem Jadis, cenários e ícones dos itens.*
    * https://www.instagram.com/capuccino_descafeinado   
    * https://www.linkedin.com/in/

---

## 🚀 Como Executar o Projeto

Como é um projeto Vanilla, é extremamente simples de rodar:

1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/Kaio-fig/Loja_da_Jadis.git](https://github.com/Kaio-fig/Loja_da_Jadis.git)