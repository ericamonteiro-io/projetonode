# Usa a imagem oficial do Node.js como base
FROM node:18

# Instala o MySQL Server e dependências
RUN apt-get update && apt-get install -y mysql-server

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração e dependências
COPY package.json .
RUN npm install

# Copia o restante do projeto
COPY . .

# Configura o MySQL
RUN service mysql start && \
    mysql -u root -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '$MYSQL_ROOT_PASSWORD';" && \
    mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "CREATE DATABASE $MYSQL_DATABASE;" && \
    mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "CREATE USER '$MYSQL_USER'@'localhost' IDENTIFIED BY '$MYSQL_PASSWORD';" && \
    mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "GRANT ALL PRIVILEGES ON $MYSQL_DATABASE.* TO '$MYSQL_USER'@'localhost';" && \
    mysql -u root -p"$MYSQL_ROOT_PASSWORD" $MYSQL_DATABASE < db.sql

# Expõe a porta da aplicação
EXPOSE 3000

# Usa nodemon para iniciar o servidor com recarga automática
CMD service mysql start && npx nodemon src/server.js