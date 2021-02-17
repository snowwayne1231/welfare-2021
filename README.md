# welfare-allstar

> for 2021 welfare


## Requirement:

1. Docker
2. Nodejs 14+
3. Git

``` bash
# install dependencies
npm install

npm run build

npm run service
```


## Build Setup:
```
docker pull postgres
docker run --name welfare2021 -e POSTGRES_PASSWORD=welfare -d -p 5432:5432 postgres
docker ps
docker exec -it [ID] bash

psql -h 127.0.0.1 -p 5432 -U postgres
CREATE DATABASE welfare2021;
\q 
exit

npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo:all

npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all

npm run build
npm run service
```
