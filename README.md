# 🏫﻿Plataforma Escola de Psicologia
## Descrição

Este projeto implementa uma plataforma para gerenciamento de cursos online para psicologia. Ele segue a arquitetura DDD (Domain-Driven Design) e utiliza NestJS, Prisma ORM e PostgreSQL.

## 🚀 Tecnologias Utilizadas  

### **📌 Backend** 
- **🟢 NestJS: Framework para desenvolvimento de back-end, utilizado para construir APIs RESTful.**
- **🔵 Next.js: Framework React para desenvolvimento do front-end.**
-  **🗄️ PostgreSQL: Sistema de gerenciamento de banco de dados relacional.**
-  **🎲 Prisma: ORM para facilitar a integração entre a aplicação e o banco de dados PostgreSQL.**
-  **🐳 Docker: Utilizado para criar um ambiente isolado para o banco de dados PostgreSQL.**
-  **🔑 JWT: Sistema de autenticação baseado em tokens JSON Web Token.**

## **📌 Funcionalidades**

### **👥 Usuários**

- **Cadastro de Alunos: Alunos podem se cadastrar na plataforma e acessar os cursos disponíveis.**
- **Cadastro de Professores: Professores podem criar e gerenciar cursos.**
- **Administração de Alunos: Administradores podem bloquear ou liberar alunos, bem como definir o status do aluno como ativo ou inativo.**

### **📚 Cursos**

- **Criação de Cursos: Professores podem criar cursos, adicionar módulos, lições e materiais de ensino.**
- **Gerenciamento de Cursos: Cursos podem ser associados aos alunos e os professores podem modificar o conteúdo dos cursos.**

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
### **2️⃣ Instalar Dependências**
```bash
npm install
```

### **1️⃣ Configurar o backend**
```bash
cd plataforma-escola-psicologia/backend
cp .env.example .env
npm install
npx prisma migrate dev
npm run start:dev
```

## **6️⃣ Gerar o Prisma Client**

Após aplicar as migrações, gere o Prisma Client com o comando:
```bash
npx prisma generate
```


Na raiz do projeto, crie o arquivo .env com a variável de conexão ao banco de dados. Exemplo de conteúdo para o arquivo:
```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```
Execute as migrations:
```bash
npx prisma migrate dev --name init
```

## **7️⃣ Rodar a API**

Agora, você pode rodar a API em modo de desenvolvimento:
```bash
npm run start:dev
```

A aplicação estará disponível em http://localhost:3000.

## **8️⃣ Acessar a API**

Você pode utilizar ferramentas como Postman ou Insomnia para testar os endpoints da API.

## **📌 Endpoints Disponíveis**

### **🔐 Autenticação**

- ""POST /auth/login: Realiza o login e gera o token JWT para o usuário.""
- **POST /auth/register: Registra um novo usuário no sistema.*

## **👥 Usuários**

- **GET /users: Retorna todos os usuários (professores e alunos).**
- **GET /users/:id: Retorna os dados de um usuário específico.**
- **PATCH /users/:id/activate: Ativa um usuário.**
- **PATCH /users/:id/deactivate: Desativa um usuário.**
- **PATCH /users/:id/block: Bloqueia um usuário.**
- **PATCH /users/:id/unblock: Desbloqueia um usuário.**

## **📚 Cursos**

- **GET /courses: Retorna todos os cursos disponíveis.**
- **GET /courses/:id: Retorna os detalhes de um curso específico.**
- **POST /courses: Cria um novo curso.**
- **PATCH /courses/:id: Atualiza os dados de um curso.**
- **DELETE /courses/:id: Deleta um curso.**

## **🤝 Contribuindo**
1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (git checkout -b minha-feature).
3. Faça as alterações e commit (git commit -am 'Adiciona nova feature').
4. Faça o push para a branch (git push origin minha-feature).
5. Abra um Pull Request para o repositório original.


## **📜 Licença**  
Este projeto está licenciado sob a [MIT License](LICENSE). 📄  



