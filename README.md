## Descrição do Projeto
**ISAAC (_Integrated System for Analysis and Application Control_)** é uma plataforma digital para registro e acompanhamento de terapias ABA (_Applied Behavior Analysis_). Seu objetivo é otimizar o processo de registro de dados das sessões, bem como a análise e o controle dos dados das terapias de crianças com Transtorno do Espectro Autista (TEA), proporcionando uma solução eficiente, segura e acessível para profissionais e familiares

## Funcionalidades
- Criação e edição de programas de ensino de habilidades indidividuais.
- Registro digital dos programas aplicados nas sessões de terapia.
- Acompanhamento em tempo real do progresso da criança.
- Geração automática de gráficos e relatórios de progresso.
- Armazenamento seguro dos dados com criptografia.
- Design responsivo e interface amigável.

## Documentação
A documentação técnica do projeto pode ser acessada [AQUI](/docs/index.md).

## Tecnologias Utilizadas
- **Frontend**: React.js
- **Backend**: Node.js com Express
- **Banco de Dados**: MongoDB
- **Autenticação**: JWT (JSON Web Tokens)
- **Hospedagem**: Heroku ou AWS

## Executando o Projeto Localmente

### Pré-requisitos
- Node.js instalado
- MongoDB em execução localmente ou através de um serviço como MongoDB Atlas
- Conta no GitHub para clonar o repositório

### Passos

#### Clone o repositório

```bash
   git clone https://github.com/janainabrito/ISAAC-Project-Blueprint.git
   cd isaac
```

#### Instale as dependências
```bash
   npm install
```

#### Configuração do Banco de Dados
- Crie um arquivo .env na raiz do projeto.
- Adicione as variáveis de ambiente para conectar ao seu banco de dados MongoDB:
 
```bash
   MONGO_URI=mongodb://localhost:27017/isaac
   JWT_SECRET=sua_chave_secreta
```

#### Execute a aplicação
```bash
   npm start
```
#### Acesse a documentação da Interface de Usuário e da API **(TBD)**
- Interface do usuário: [http://localhost:3000](http://localhost:3000)
- Documentação da API: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
