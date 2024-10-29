# Desenho da Arquitetura

O desenho arquitetural de ISAAC foi cuidadosamente planejado para garantir eficiência, segurança e escalabilidade à solução. Cada componente desempenha um papel crucial para proporcionar uma melhor experiência para o usuário e garantir que todas as operações sejam executadas de forma eficaz.

### Descrição do Desenho
- **Cliente (Frontend)**: Desenvolvido em React.js, permite a criação de componentes reutilizáveis e oferece uma experiência de usuário rápida e responsiva. Se comunica com o backend via protocolos HTTP.
- **Servidor (Backend)**: Desenvolvido em Node.js com Express, gerencia toda a lógica de negócios e a comunicação com o banco de dados. O Node.js é uma plataforma eficiente para construir aplicações de rede escaláveis e o Express é um framework minimalista e flexível, ideal para construir APIs robustas.
- **Banco de Dados (MongoDB)**: Desenvolvido em MongoDB, oferece flexibilidade e escalabilidade para dados não estruturados, permitindo consultas rápidas e eficientes. Utilizado para armazenar todos os dados da aplicação.
- **Autenticação (JWT)**: Desenvolvido usando JWT, uma forma segura e compacta de transmitir informações no formato de objetos JSON, amplamente utilizado para autenticação e troca de informações seguras. Garante a segurança das comunicações entre cliente e servidor.
- **Hospedagem (AWS)**: Utilizaremos a AWS (Amazon Web Services) como plataforma de deploy por oferecer:
  - **Escalabilidade**: Infraestrutura altamente escalável.
  - **Confiabilidade**: Alta disponibilidade garantida.
  - **Segurança**: Proteção robusta dos dados.
  - **Serviços Integrados**: Ampla gama de serviços disponíveis.

## Infraestrutura
- **Servidores em nuvem**: Como mencionado no tópico anterior, a AWS será utilizada para hospedagem, garantindo escalabilidade conforme a demanda, alta disponibilidade e confiabilidade. Além disso, a AWS oferece serviços integrados que facilitam tanto o desenvolvimento como a manutenção da aplicação.
- **Armazenamento seguro**: Será implementada a adoção de criptografia dos dados em trânsito e em repouso para garantir a segurança e a conformidade com as regulamentações de privacidade.

## Monitoramento e Manutenção
- **Ferramentas de monitoramento**: Embora esse ponto ainda esteja em aberto, poderão ser utilizadas ferramentas como Prometheus e Grafana para monitoramento contínuo da saúde e desempenho da aplicação.
- **Sistema de backup**: Implementação de rotinas de backup automatizadas para garantir a recuperação dos dados em caso de falhas.

## Diagrama arquitetural
![ISAAC](../img/ISAAC-Architecture.png)

[Voltar](index.md)
