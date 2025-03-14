Plataforma Escola de Psicologia

Descrição

Este projeto implementa uma plataforma para gerenciamento de cursos online para psicologia. Ele segue a arquitetura DDD (Domain-Driven Design) e utiliza NestJS, Prisma ORM e PostgreSQL.

Tecnologias Utilizadas

NestJS (Framework Backend)

PostgreSQL (Banco de Dados)

Prisma ORM (Gerenciamento de BD)

TypeScript (Linguagem de Programação)

Estrutura do Projeto

backend/
│── src/
│   ├── modules/
│   │   ├── course/
│   │   │   ├── application/      # Casos de uso (services)
│   │   │   ├── domain/           # Entidades e regras de negócio
│   │   │   ├── infrastructure/   # Comunicação externa (banco de dados, API)
│   │   │   ├── presentation/     # Controllers
│   ├── shared/                   # Recursos compartilhados entre módulos
│   │   ├── dtos/
│   │   ├── entities/
│   │   ├── exceptions/
│   │   ├── prisma/                # Configuração do Prisma
│   ├── main.ts
│   ├── app.module.ts
│── prisma/
│   ├── schema.prisma
│── package.json

Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/plataforma-escola-psicologia.git

Acesse a pasta do projeto:

cd plataforma-escola-psicologia/backend

Instale as dependências:

npm install

Configure o banco de dados no arquivo .env:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

Execute as migrations:

npx prisma migrate dev --name init

Inicie o servidor:

npm run start:dev

Endpoints Disponíveis

Criar Curso: POST /courses

Buscar Curso por ID: GET /courses/:id

Contribuição

Contribuições são bem-vindas! Para contribuir:

Crie um fork do repositório

Crie uma branch (git checkout -b minha-feature)

Commit suas mudanças (git commit -m 'Adicionando nova feature')

Envie um push (git push origin minha-feature)

Abra um Pull Request

Licença

Este projeto está sob a licença MIT.


