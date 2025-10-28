# 💰 Dashboard Financeiro

Este projeto foi desenvolvido como parte de um **desafio técnico de Desenvolvedor Front-End**, com o objetivo de criar um **Dashboard Financeiro interativo, responsivo e intuitivo** utilizando React, TypeScript e TailwindCSS v4.

---

## 🧭 **Sumário**
- [Visão Geral](#visão-geral)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Stack Utilizada](#stack-utilizada)
- [Instalação e Execução Local](#instalação-e-execução-local)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Design e Responsividade](#design-e-responsividade)
- [Decisões Técnicas e Boas Práticas](#decisões-técnicas-e-boas-práticas)
- [Demonstração em Vídeo (Loom)](#demonstração-em-vídeo-loom)
- [Deploy](#deploy-opcional)
- [Autor](#autor)

---

## 🪙 **Visão Geral**

O **Dashboard Financeiro** permite aos usuários visualizar, filtrar e analisar dados de transações a partir de um dataset JSON.

A aplicação exibe:
- **Receitas, despesas e saldo total**
- **Gráficos interativos**
- **Tabela paginada de transações**
- **Filtros dinâmicos (por data, conta, indústria e estado)**

Além disso, conta com:
- Página de **Login** (simulado)
- **Persistência de sessão e filtros**
- **Design moderno e responsivo**
- **Animações suaves** para uma experiência fluida

---

## ⚙️ **Funcionalidades Implementadas**

### 🔐 Autenticação
- Página de login estilizada e responsiva.
- Sessão simulada com `localStorage`.
- Rotas protegidas via `PrivateRoute`.
- Logout funcional em desktop e mobile.

### 📊 Dashboard
- Cards de resumo (Receitas, Despesas, Pendentes e Saldo).
- Gráficos:
  - **Barras empilhadas** (Receitas vs Despesas).
  - **Linha de saldo acumulado**.
- Filtros globais:
  - Conta
  - Indústria
  - Estado
  - Intervalo de datas
- Filtros persistentes entre sessões.
- Atualização automática de todos os dados conforme filtros.

### 🧾 Tabela de Transações
- Paginação local (melhora performance).
- Atualização dinâmica com os filtros.
- Responsiva para dispositivos móveis.

### 💅 Interface e UX
- Layout baseado em **TailwindCSS v4**.
- Sidebar com gradiente personalizado.
- Menu mobile com animação fluida.
- Ícones vetoriais (Lucide Icons).
- Paleta escura com contraste ideal.

---

## 🧰 **Stack Utilizada**

| Categoria | Tecnologia |
|------------|-------------|
| Framework | **React + Vite + TypeScript** |
| Estilização | **TailwindCSS v4** |
| Componentes | **Tailwind + Lucide Icons** |
| Gráficos | **Recharts** |
| Estado Global | **React Context API** |
| Persistência local | `localStorage` |
| Deploy | **Vercel** |

---

## 🚀 **Instalação e Execução Local**

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/Alefy00/inno.git
cd financial-dashboard
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Rodar localmente
```bash
npm run dev
```

Acesse em:  
👉 http://localhost:5173

---

## 🧱 **Arquitetura do Projeto**

```
src/
├── assets/
│   └── transactions.json          # Dataset original (não modificado)
├── components/
│   ├── charts/                    # Gráficos Recharts
│   ├── dashboard/                 # Filtros, tabela etc.
│   ├── layout/                    # Header, Sidebar e MobileHeader
│   └── ui/                        # Componentes reutilizáveis (Card, Button, Input...)
├── context/
│   ├── useAuth.ts                 # Contexto de autenticação
│   ├── useFilters.ts              # Contexto de filtros globais
│   └── useTransactions.ts         # Contexto de transações
├── pages/
│   ├── LoginPage.tsx
│   └── DashboardPage.tsx
├── routes/
│   └── PrivateRoute.tsx
├── utils/
│   ├── filterTransactions.ts      # Lógica de filtragem de dados
│   ├── metrics.ts                 # Funções de cálculo (receita, saldo etc)
│   └── dateRange.ts               # Conversões EPOCH <-> input date
└── App.tsx, main.tsx, index.css   # Entradas principais
```

---

## 📱 **Design e Responsividade**

- **Desktop:** Sidebar fixa, dashboard em grid 2x2, gráficos lado a lado.  
- **Tablet:** Layout se adapta, grid 2x1.  
- **Mobile:** Menu compacto no topo com botão *“Menu”*, dropdown animado contendo “Home” e “Sair”.  
- Filtros reorganizados verticalmente em telas menores.  
- Todo o conteúdo é **100% responsivo**.

---

## 🧠 **Decisões Técnicas e Boas Práticas**

### 🧩 Estrutura e Contextos
- Separação clara entre contextos (`Auth`, `Filters`, `Transactions`).
- Reatividade centralizada: ao atualizar filtros, todos os componentes se atualizam.

### 💾 Persistência
- Sessão e filtros persistem via `localStorage`.
- O estado é restaurado automaticamente ao recarregar a página.

### ⚡ Performance
- Paginação implementada para evitar renderizações pesadas.
- Filtros aplicados com `useMemo` para eficiência.

### 💅 UI e Experiência
- Tailwind v4 com design system leve e elegante.
- Transições suaves (`transition-all`, `ease-out`).
- Ícones Lucide (`Home`, `LogOut`) para aparência moderna.
- Gradiente personalizado (`#3D0262 → #8E6320`).

### 🔒 Segurança
- Rota `/dashboard` protegida via `PrivateRoute`.
- Redirecionamento automático caso o usuário não esteja autenticado.

---

## 🎥 **Demonstração em Vídeo (Loom)**


1. Acessar `/login` → preencher credenciais fictícias.  
2. Mostrar o redirecionamento para o dashboard.  
3. Interagir com os filtros (Conta, Indústria, Estado, Data).  
4. Mostrar atualização automática dos cards e gráficos.  
5. Demonstrar a paginação na tabela.  
6. Mostrar responsividade.  
7. Abrir o menu mobile e clicar em **Sair**.  
8. Mostrar redirecionamento de volta ao login.  



---

## 🌐 **Deploy**

### 1️⃣ Build de produção
```bash
npm run build
```


## 👨‍💻 **Autor**

**Desenvolvido por [Alefy Xavier](https://github.com/Alefy00)**  
💼 Desenvolvedor Front-End / Full Stack  
📧 [alefy_sx@hotmail.com](mailto:alefy_sx@hotmail.com)  
🌍 [LinkedIn](https://www.linkedin.com/in/alefy-xavier-developer/)  

---

## 🏁 **Resumo**

✅ Login + Sessão Persistente  
✅ Dashboard Protegida  
✅ Filtros Globais Dinâmicos  
✅ Gráficos Interativos  
✅ Tabela com Paginação  
✅ Design Responsivo  
✅ Tailwind v4 + Lucide + Recharts  
✅ Código modular e tipado  
✅ Pronto para Deploy na Vercel  

---

**🚀 Resultado Final:**  
Um dashboard financeiro completo, rápido, responsivo e com código profissional — atendendo 100% dos requisitos do desafio técnico.
