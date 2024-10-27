# Arquitetura da Solução

## Visão Geral
A arquitetura da solução ISAAC será composta por diversos componentes integrados, que garantem eficiência, segurança e acessibilidade.

## Arquitetura de Software

### Camadas da Arquitetura
- **Frontend**: Responsável pela interface do usuário, desenvolvida em React.js.
- **Backend**: API RESTful desenvolvida em Node.js com Express, responsável pela lógica de negócios e comunicação com o banco de dados.
- **Banco de Dados**: MongoDB, utilizado para armazenar dados das sessões de terapia, usuários, programas de ensino, etc.
- **Autenticação**: Implementada com JWT (JSON Web Tokens) para garantir a segurança das comunicações.
- **Hospedagem**: AWS para deploy da aplicação.

## Componentes Principais

### Cliente (Frontend)
- Interface de usuário desenvolvida em React.js, oferecendo uma experiência rápida e responsiva.
- Comunicação com a API backend via HTTP.
- Exibição de gráficos e relatórios de progresso.

### Servidor (Backend)
- API RESTful desenvolvida em Node.js com Express, gerenciando a lógica de negócios e a comunicação com o banco de dados.
- Endpoints para CRUD de programas de ensino, sessões de terapia e usuários.
- Autenticação e autorização de usuários.
- Processamento de dados e geração de relatórios.

### Banco de Dados
- Utilização de MongoDB para armazenamento dos dados das sessões de terapia, programas de ensino e usuários.
- Armazenamento seguro com criptografia.

### Autenticação (JWT)
Utiliza JWT para garantir a segurança das comunicações entre cliente e servidor. JWT é uma forma segura e compacta de transmitir informações, amplamente usada para autenticação e troca segura de informações.

### Hospedagem (AWS)
WS é escolhida como plataforma de deploy devido à sua escalabilidade, alta disponibilidade, robusta proteção de dados e uma gama de serviços integrados que facilitam o desenvolvimento e a manutenção da aplicação.

## Fluxo de Dados
1. Usuário acessa a aplicação através do navegador.
2. Frontend envia requisições HTTP para o Backend.
3. Backend processa as requisições, interage com o Banco de Dados e retorna as respostas para o Frontend.
4. Frontend atualiza a interface do usuário com os dados recebidos.

## Desenho da Arquitetura

### Descrição do Desenho

- **Cliente (Frontend)**: Desenvolvido em React.js, uma biblioteca JavaScript popular que permite a criação de componentes reutilizáveis e oferece uma experiência de usuário rápida e responsiva. Comunica-se com o backend via HTTP.
- **Servidor (Backend)**: Desenvolvido em Node.js com Express, gerencia a lógica de negócios e a comunicação com o banco de dados. Node.js é uma plataforma eficiente para construir aplicações de rede escaláveis. Express é um framework minimalista e flexível para Node.js, ideal para construir APIs robustas.
- **Banco de Dados (MongoDB)**: Utilizado para armazenar dados das sessões de terapia, programas de ensino, usuários, etc. MongoDB oferece flexibilidade e escalabilidade para dados não estruturados, permitindo consultas rápidas e eficientes.
- **Autenticação (JWT)**: Garante a segurança das comunicações entre cliente e servidor usando JWT, uma forma segura e compacta de transmitir informações como um objeto JSON. É amplamente utilizado para autenticação e troca de informações seguras.
- **Hospedagem (AWS)**: AWS (Amazon Web Services) como plataforma de deploy da aplicação pelos seguintes motivos:
  - **Escalabilidade**: Oferece infraestrutura altamente escalável para acompanhar a demanda.
  - **Confiabilidade**: Alta disponibilidade garantida.
  - **Segurança**: Proteção robusta dos dados.
  - **Serviços Integrados**: Ampla gama de serviços que facilitam desenvolvimento e manutenção.

## Infraestrutura
- **Servidores em nuvem**: Utilização da AWS para hospedagem, garantindo escalabilidade conforme a demanda, alta disponibilidade e confiabilidade. Além disso, a AWS oferece serviços integrados que facilitam tanto o desenvolvimento quanto a manutenção da aplicação.
- **Armazenamento seguro**: Para garantir a segurança dos dados, será implementada a criptografia dos dados tanto em trânsito quanto em repouso. Isso assegura a conformidade com regulamentações de privacidade e protege as informações sensíveis contra acessos não autorizados.

## Monitoramento e Manutenção

- **Ferramentas de monitoramento**: Implementação de ferramentas como Prometheus e Grafana para monitoramento contínuo da saúde e desempenho da aplicação.
- **Sistema de backup**: Rotinas de backup automatizadas para garantir a recuperação dos dados em caso de falhas.

## Diagramas
TBD

[Voltar](index.md)
