
# 📦 FuriaBot (IA)

Este projeto é uma API RESTful construída com **Node.js**, **Express**. A estrutura do projeto segue a arquitetura MVC (Model-View-Controller), garantindo escalabilidade e organização.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [OpenRouter](https://openrouter.ai)

---

## 📂 Estrutura de Pastas

```
src/
│
├── controller/          # Lógica dos controladores
│
└── routes/              # Rotas da API
```

---

## ⚙️ Configuração e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/drypzz/api-FuriaBot.git
cd api-FuriaBot
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env`(caso não tenha) na raiz do projeto com o seguinte conteúdo:

```env
OPENROUTER_API_KEY=skj...
```

> ⚠️ Certifique-se de que o XAMPP está rodando com o MySQL ativo e que o banco de dados informado foi criado.

### 4. Iniciar o servidor

```bash
npm start
```

Servidor rodando em: `http://localhost:3022`

---

## 🔗 Endpoints da API


### 1. Endpoints Tarefas

| Método | Rota                    | Descrição                        |
|--------|-------------------------|----------------------------------|
| POST   | `/chat`                 | Retora uma resposta do BOT       |

---

## 📌 Observações

- As rotas estão definidas em `src/routes`.
- Toda lógica de negócio está organizada no controlador (`src/controller`).

---

## 🛠️ Scripts Úteis

```bash
npm start          # Rodar em modo produção
```

---

> by drypzz
