FROM node:24-slim@sha256:0e0ff40c39bc087845bfb27465a0df4ea419520094bc35842ff83dd8cbe6f9b6

WORKDIR /app

COPY server.ts .

RUN npm install pg

EXPOSE 3001

CMD node server.ts
