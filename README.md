# static server

gives html and static content [take a look](https://fathomless-dawn-74925.herokuapp.com/). May the api don't work because this is a hobist project in heroku maybe needs a refresh in some configurations, ask for me to refresh conf and you can see the results.

## dependencies

node: 10.16.3

### optional dependencies

this project needs an api to gives the real functionality so in order to run this project you also need one of these projects (suggest use the latest versions)

- [php-profile-rest-api](https://github.com/siht/php-profile-rest-api)
- [node_api_test](https://github.com/siht/node_api_test)

if you don't want to do an exhaustive configuration I suggest use the docker projects below:

- [docker_php_rest_with_front](https://github.com/siht/docker_php_rest_with_front)
- [basic_node_docker](https://github.com/siht/basic_node_docker)
- or do your own api

## how to install

only need to run for install modules

```bash
npm i # for development mode
# or
npm i --only=prod # for production mode
```

## how to run

set environment variable called "FRONT_PORT" with a integer and "API_URL" with the direction of the api. By default if you don't set these variables this app tries to get api data from <http://localhost:3000> and the FRONT_PORT is 8000

### run in production mode

```bash
node server.js
# or
npm start
# or
npm run start
```

### run in development mode

```bash
npm run dev
```

## what does

this project has two routes

- / (to see a carousel of images)
- /insert (to insert new images)
