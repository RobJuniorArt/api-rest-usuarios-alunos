# 🚀 API REST Alunos & Usuários (Self-Hosted)

API robusta para gestão acadêmica, desenvolvida com **Node.js** e **TypeScript**. Este projeto é executado em um ambiente de infraestrutura própria via **Docker** em servidor Linux físico.

## 🏗️ Diferencial de Infraestrutura

- **Docker & Docker Compose:** Todo o ambiente (Node.js + MariaDB/MySQL) é containerizado.
- **Linux Server:** Hosteado em servidor local, simulando um ambiente real de produção com gestão de volumes.

## 🛠️ Tecnologias

- **Back-end:** Node.js com Express.
- **ORM:** Sequelize (MySQL/MariaDB).
- **Uploads:** Multer para processamento de fotos de perfil dos alunos.
- **Segurança:** Autenticação via JWT (JSON Web Token).

## 📂 Funcionalidades

- CRUD completo de **Alunos**.
- Cadastro e login de **Usuários**.
- Sistema de **Upload de Imagens** associadas aos alunos.
