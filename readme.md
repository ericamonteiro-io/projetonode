# Sistema de Cadastro Simples

Este é um sistema de cadastro simples desenvolvido com Node.js, Express, MySQL e estrutura MVC. Ele permite cadastrar usuários (nome e email) e listar os usuários cadastrados. O ambiente é configurado com um único `Dockerfile` e usa `nodemon` para recarga automática em desenvolvimento.

## Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado na máquina.

## Como Rodar a Aplicação

### 1. Clone o Repositório ou Crie os Arquivos

### 2. Construa a Imagem Docker

No terminal, na pasta de nome desejado, exemplo: `sistema-de-cadastro
`, execute:

```bash
docker build -t sistema-de-cadastro .
```
Execute:
```bash
docker run --env-file .env -p 3000:3000 cadastro-mvc
```

## Observações

- Persistência: Os dados do MySQL são perdidos ao parar o container, pois não há volume configurado. Para persistência, adicione VOLUME /var/lib/mysql no Dockerfile e gerencie os dados manualmente.
- Desenvolvimento: O nodemon recarrega o servidor automaticamente, mas mudanças no código exigem reconstruir a imagem (docker build).
- Produção: Para ambientes reais, considere separar MySQL e Node.js em containers distintos usando docker-compose.

```

```
