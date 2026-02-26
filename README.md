🚀 API REST Alunos | Docker & Linux Server
Esta é uma API RESTful completa para gerenciamento de alunos, usuários e upload de arquivos. O grande diferencial deste projeto é a sua infraestrutura: a API foi desenvolvida para ser escalável e roda em um servidor Linux físico (Home Server) totalmente containerizado com Docker.

🛠 Tecnologias Utilizadas
Node.js & Express: Core da aplicação e roteamento.

TypeScript: Tipagem estática para um código mais seguro e brobust.

Sequelize (MariaDB/MySQL): ORM para gestão do banco de dados de alunos e usuários.

Sucrase & Nodemon: Workflow de desenvolvimento rápido.

Multer: Gestão de upload de fotos dos alunos.

🐳 Infraestrutura e Deployment (Self-Hosted)
O projeto não roda apenas no "localhost" comum; ele foi arquitetado para um ambiente de produção real:

Ambiente: Servidor Linux dedicado.

Containerização: Docker e Docker Compose isolando a API e o Banco de Dados.

Persistência: Volumes Docker configurados para garantir a segurança das fotos e dos dados dos alunos.

📌 Funcionalidades Principais
Gestão de Usuários: Cadastro e autenticação (JWT).

Gestão de Alunos: CRUD completo de informações acadêmicas.

Upload de Fotos: Sistema de armazenamento de imagens de perfil dos alunos.

Segurança: Senhas criptografadas e rotas protegidas.

🏁 Como Executar
Via Docker (Recomendado)
Bash

# Clone o projeto

git clone https://github.com/robjuniorart/api-rest-usuarios-alunos.git

# Suba os containers (API + DB)

docker-compose up -d
