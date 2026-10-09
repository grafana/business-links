FROM node:24-slim@sha256:d6aa754f16b3197301076f047b5def2f02ea1dbbc2ca920407d46d7ec7f87b20

WORKDIR /app

COPY server.ts .

RUN npm install pg

EXPOSE 3001

CMD node server.ts
