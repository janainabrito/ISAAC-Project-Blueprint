# Arquitetura da Solução

## Visão Geral
A arquitetura de ISAAC será composta por diversos componentes integrados, que garantem eficiência, segurança e acessibilidade. Utilizaremos a arquitetura MERN (MongoDB, Express, React, Node.js) para proporcionar uma solução robusta e escalável.

## Arquitetura de Software

### Camadas da Arquitetura
- **Frontend**: Responsável pela interface do usuário, desenvolvida em React.js.
- **Backend**: API RESTful desenvolvida em Node.js com Express, responsável pela lógica de negócios e comunicação com o banco de dados.
- **Banco de Dados**: MongoDB, utilizado para armazenar dados das sessões de terapia, usuários, programas de ensino, entre outros.
- **Autenticação**: Implementada com JWT (JSON Web Tokens) para garantir a segurança das comunicações.
- **Hospedagem**: AWS (Amazon Web Services) para deploy da aplicação.

## Componentes Principais

### Cliente (Frontend)
- Interface de usuário desenvolvida em React.js, oferecendo uma experiência rápida e responsiva.
- Comunicação com a API de backend via HTTP.
- Exibição de gráficos e relatórios de progresso.

### Servidor (Backend)
- API RESTful desenvolvida em Node.js com Express, responsável por gerenciar a lógica de negócios e a comunicação com o banco de dados.
- Endpoints para CRUD de programas de ensino, sessões de terapia e usuários.
- Autenticação e autorização de usuários.
- Processamento de dados e geração de relatórios.

### Banco de Dados
- Utilização do MongoDB para armazenamento dos dados das sessões de terapia, programas de ensino e usuários.
- Armazenamento seguro com criptografia.

### Autenticação (JWT)
Utilização do JWT para garantir a segurança das comunicações entre cliente e servidor.

### Hospedagem (AWS)
AWS como plataforma de deploy devido à sua escalabilidade, alta disponibilidade, robusta proteção de dados e uma gama de serviços integrados que facilitam o desenvolvimento e a manutenção da aplicação.

## Fluxo de Dados
1. Usuário acessa a aplicação através do navegador.
2. O Frontend envia requisições HTTP para o Backend.
3. O Backend processa as requisições, interage com o Banco de Dados e retorna as respostas para o Frontend.
4. O Frontend atualiza a interface do usuário com os dados recebidos.

## Desenho da Arquitetura
A descrição detalhada do desenho arquitetural foi documentada à parte para fornecer uma visão mais aprofundada dos componentes e das interações entre as partes do sistema. Para acessar o Desenho da Arquitetura, clique no link abaixo.

[Desenho da Arquitetura](architectural_drawing.md)


[Voltar](index.md)
