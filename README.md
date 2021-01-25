# welfare-allstar

> for 2021 welfare

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


```
docker run --name welfare2021 -e POSTGRES_PASSWORD=welfare -d -p 5432:5432 postgres
docker ps
docker exec -it [ID] bash

psql -h 127.0.0.1 -p 5432 -U postgres
CREATE DATABASE welfare2021;
\q
exit

npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo

npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
```
