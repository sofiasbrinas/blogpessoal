# Blog Pessoal API

API RESTful desenvolvida com NestJS e TypeScript para um blog pessoal com autenticação JWT.

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [Passport](https://www.passportjs.org/)
- [Swagger](https://swagger.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## 📋 Pré-requisitos

- Node.js
- MySQL rodando localmente

## ⚙️ Configuração

Clone o repositório:

```bash
git clone https://github.com/frsofitware/blogpessoal.git
cd blogpessoal
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env` na raiz do projeto baseado no `.env.example`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=db_blogpessoal
JWT_SECRET=sua_chave_secreta
JWT_EXPIRATION=86400
```

## ▶️ Rodando o projeto

```bash
npm run start:dev
```

## 📖 Documentação

Com o servidor rodando, acesse a documentação interativa em:

```
http://localhost:3000/docs
```

## 🔒 Autenticação

As rotas de escrita (POST, PUT, DELETE) exigem autenticação JWT.

1. Cadastre um usuário em `POST /usuarios/cadastrar`
2. Faça login em `POST /auth/login` e copie o token retornado
3. No Swagger, clique em **Authorize** e cole o token
4. Nas demais ferramentas (Insomnia, Postman), adicione o header `Authorization: Bearer <token>`

## 📦 Módulos

| Módulo   | Descrição                          |
| -------- | ---------------------------------- |
| Postagem | CRUD de postagens do blog          |
| Tema     | CRUD de categorias de postagens    |
| Usuário  | Cadastro e atualização de usuários |
| Auth     | Login e geração de token JWT       |

## 👩‍💻 Autora

Sofia Sabrina — [GitHub](https://github.com/sofiasbrinas)
