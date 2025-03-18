# 🏫﻿Plataforma Escola de Psicologia
## Descrição

Este projeto implementa uma plataforma para gerenciamento de cursos online para psicologia. Ele segue a arquitetura DDD (Domain-Driven Design) e utiliza NestJS, Prisma ORM e PostgreSQL.

## 🚀 Tecnologias Utilizadas  

### **📌 Backend** 
- **NestJS (Framework Backend).**
-  **PostgreSQL (Banco de Dados).**
-  **Prisma ORM (Gerenciamento de BD).**
-  **TypeScript (Linguagem de Programação).

## 📂 Estrutura do Projeto  
```bash
📦 src
 ┣ 📂 application              # 📌 Camada de Application (casos de uso)
 ┃ ┣ 📂 use-cases              # Casos de uso específicos da aplicação
 ┃ ┃ ┣ 📂 student
 ┃ ┃ ┃ ┣ 📜 enroll-student.use-case.ts
 ┃ ┃ ┃ ┣ 📜 cancel-enrollment.use-case.ts
 ┃ ┃ ┃ ┗ 📜 update-student.use-case.ts
 ┃ ┃ ┣ 📂 course
 ┃ ┃ ┃ ┣ 📜 create-course.use-case.ts
 ┃ ┃ ┃ ┣ 📜 update-course.use-case.ts
 ┃ ┃ ┃ ┗ 📜 delete-course.use-case.ts
 ┃ ┗ 📜 use-case.interface.ts  # Interface base para os casos de uso
 ┣ 📂 domain                   # 📌 Camada de Domínio (Regras de Negócio)
 ┃ ┣ 📂 entities               # Entidades do domínio
 ┃ ┃ ┣ 📜 student.entity.ts
 ┃ ┃ ┣ 📜 course.entity.ts
 ┃ ┃ ┗ 📜 enrollment.entity.ts
 ┃ ┣ 📂 repositories           # Interfaces dos repositórios
 ┃ ┃ ┣ 📜 student.repository.ts
 ┃ ┃ ┣ 📜 course.repository.ts
 ┃ ┃ ┗ 📜 enrollment.repository.ts
 ┃ ┗ 📂 value-objects          # Objetos de Valor do domínio
 ┃ ┃ ┣ 📜 email.vo.ts
 ┃ ┃ ┣ 📜 cpf.vo.ts
 ┃ ┃ ┗ 📜 money.vo.ts
 ┣ 📂 infrastructure           # 📌 Infraestrutura (bancos, serviços externos)
 ┃ ┣ 📂 database               # Implementações de banco de dados
 ┃ ┃ ┣ 📜 prisma.service.ts
 ┃ ┃ ┣ 📂 repositories
 ┃ ┃ ┃ ┣ 📜 student.repository.ts
 ┃ ┃ ┃ ┣ 📜 course.repository.ts
 ┃ ┃ ┃ ┗ 📜 enrollment.repository.ts
 ┃ ┣ 📂 http                   # Implementações HTTP (Controllers)
 ┃ ┃ ┣ 📂 controllers
 ┃ ┃ ┃ ┣ 📜 student.controller.ts
 ┃ ┃ ┃ ┣ 📜 course.controller.ts
 ┃ ┃ ┃ ┗ 📜 enrollment.controller.ts
 ┃ ┃ ┣ 📂 dtos                 # Data Transfer Objects
 ┃ ┃ ┃ ┣ 📜 create-student.dto.ts
 ┃ ┃ ┃ ┣ 📜 update-student.dto.ts
 ┃ ┃ ┃ ┣ 📜 create-course.dto.ts
 ┃ ┃ ┃ ┗ 📜 enroll-student.dto.ts
 ┃ ┃ ┗ 📂 interceptors         # Interceptadores para middleware HTTP
 ┃ ┃ ┃ ┗ 📜 logging.interceptor.ts
 ┃ ┗ 📂 services               # Serviços auxiliares e externos
 ┃ ┃ ┣ 📜 email.service.ts
 ┃ ┃ ┣ 📜 payment.service.ts
 ┃ ┃ ┗ 📜 cloud-storage.service.ts
 ┣ 📂 presentation             # 📌 Apresentação (Gateways / Controllers)
 ┃ ┣ 📂 graphql                # Resolveres GraphQL (caso use GraphQL)
 ┃ ┃ ┣ 📜 student.resolver.ts
 ┃ ┃ ┣ 📜 course.resolver.ts
 ┃ ┃ ┗ 📜 enrollment.resolver.ts
 ┃ ┣ 📂 rest                   # APIs REST
 ┃ ┃ ┣ 📜 student.controller.ts
 ┃ ┃ ┣ 📜 course.controller.ts
 ┃ ┃ ┗ 📜 enrollment.controller.ts
 ┃ ┣ 📂 websocket              # Eventos WebSockets (caso necessário)
 ┃ ┃ ┣ 📜 notifications.gateway.ts
 ┃ ┃ ┗ 📜 chat.gateway.ts
 ┗ 📜 main.ts                  # Arquivo principal do NestJS
```

# Instalação

## 🚀 Como Rodar o Projeto 

### **1️⃣ Clonar o repositório**
```bash
Clone o repositório:

git clone https://github.com/seu-usuario/plataforma-escola-psicologia.git
```

### **1️⃣ Configurar o backend**
```bash
cd plataforma-escola-psicologia/backend
cp .env.example .env
npm install
npx prisma migrate dev
npm run start:dev
```

### **1️⃣ Configurar o backend**
```bash
Configure o banco de dados no arquivo .env:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

Execute as migrations:

npx prisma migrate dev --name init


Inicie o servidor:

npm run start:dev
```
## Endpoints Disponíveis

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


