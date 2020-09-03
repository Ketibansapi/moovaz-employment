## Starting the app

First install all dependencies

```
yarn install
```

Make sure you have all env variables set up (read previous paragraph).

Then create postgres database and run migrations:

```
yarn run sequelize db:create
yarn run sequelize db:migrate
```

In the end you can launch the app

```
yarn start
```