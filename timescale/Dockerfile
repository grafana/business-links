FROM node:24-slim@sha256:ba849c60be29959425b8734d57b8b4b7d56f98edd9504c9af091d5281095a71e

WORKDIR /app

COPY server.ts .

RUN npm install pg

EXPOSE 3001

CMD node server.ts
