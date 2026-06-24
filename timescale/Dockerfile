FROM node:24-slim

WORKDIR /app

COPY server.ts .

RUN npm install pg

EXPOSE 3001

CMD node server.ts
