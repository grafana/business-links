FROM node@sha256:6d362f0df70431417ef79c30e47c0515ea9066d8be8011e859c6c3575514a027

## Create app directory
WORKDIR /app

## Copy Server
COPY server.ts .

## Add Postgres package
RUN yarn add pg

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

EXPOSE 3001

CMD /wait && node server.ts
