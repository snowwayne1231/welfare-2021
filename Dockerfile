# syntax=docker/dockerfile:1
FROM node:12.18.1

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g shelljs

RUN npm run build

CMD ["npm", "run", "service"]

