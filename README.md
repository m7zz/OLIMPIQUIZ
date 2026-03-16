# OlimpiQuiz - Quiz Olímpico em React + Tailwind

## Descrição

O **OlimpiQuiz** é um quiz interativo sobre modalidades olímpicas, feito em **React** com **TypeScript**, **React Router v6** e **TailwindCSS**.  
O usuário pode:

- Escolher entre **12 modalidades olímpicas** diferentes.  
- Selecionar a **dificuldade**: Fácil, Médio ou Difícil.  
- Jogar o quiz com perguntas específicas de cada modalidade e dificuldade.  
- Voltar de forma elegante usando o **botão de voltar neon estilizado**.

O projeto é ótimo para treinar:

- **Componentização** em React.  
- **Roteamento dinâmico** com parâmetros de URL.  
- **Reuso de componentes** (botões, cards).  
- **Estilização moderna** com TailwindCSS.

---

## Tecnologias utilizadas

- **React 18** + **TypeScript**  
- **React Router v6**  
- **TailwindCSS**  
- **Lucide Icons** para ícones das modalidades  
- **Vite** como bundler rápido

---

## Estrutura do projeto

```bash
src/

├─ components/
│ ├─ ButtonLink.tsx # Botão estilizado reutilizável
│ ├─ dificultySelector/
│ │ ├─ CardGrid.tsx # Grid com os cards de dificuldade
│ │ └─ DifficultyCard.tsx # Card individual de dificuldade

├─ data/
│ └─ mockModalities.tsx # Dados das modalidades e perguntas

├─ pages/
│ ├─ Modalidades.tsx # Página de seleção de modalidade
│ ├─ DificultySelector.tsx # Página para escolher dificuldade
│ └─ Quiz.tsx # Página do quiz com perguntas
├─ routes.tsx # Rotas da aplicação
└─ main.tsx # Entrada do React
```

---

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/olimpiquiz.git
cd olimpiquiz

Instale as dependências:

npm install

Rode o servidor de desenvolvimento:

npm run dev

Abra no navegador:

http://localhost:5173
Funcionalidades

Página de Modalidades: exibe todas as modalidades olímpicas em cards, com título, descrição e ícone.

Página de Dificuldade: permite escolher a dificuldade de cada modalidade, mostrando número de perguntas e tempo por pergunta.

Quiz: perguntas exibidas de acordo com modalidade e dificuldade escolhida.

Botão de Voltar: retorna para a página anterior com estilo neon idêntico ao botão “Começar”.

Estilo e UI

Paleta de cores:

--color-background:   #0D0D0D;
--color-surface:      #2A2A2A;
--color-neon:         #C8FF00;
--color-soft-white:   #F5F5F5;
--color-muted:        #6B6B6B;
--color-error:        #FF3B3B;
--color-success:      #00E676;

Fontes: Bebas Neue para títulos e DM Sans para textos.

Efeitos: hover, sombras neon e transições suaves nos botões e cards.

Próximos passos

Criar ranking por modalidade/dificuldade.

Adicionar cronômetro visual por pergunta.

Melhorar responsividade para dispositivos móveis.

Salvar pontuação do usuário no localStorage ou banco de dados.

Autor

Marlon (M7zy) - Desenvolvedor Frontend & Backend iniciante avançando com React + TypeScript

Licença

MIT License
