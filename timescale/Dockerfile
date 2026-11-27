FROM node:24-slim@sha256:873f586f3794f52281bd039bf02c048a0be08fde619338f9941bad1eb6b34530

WORKDIR /app

COPY server.ts .

RUN npm install pg

EXPOSE 3001

CMD node server.ts
