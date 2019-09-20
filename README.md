# static server

gives html and static content

## dependencies

node: 10.16.3

## how to install

if you are docker user skip this part
only need to run for install modules

```bash
npm i
```

## how to run

### non docker users

first run a mongodb in localhost in default port, after run in terminal

```bash
node server.js
```

### docker users

donwload this [repo](https://github.com/siht/node_simple_static_server) and inside of folder named src, after run in terminal

```bash
docker-compose up
```

#### docker develop mode

first install dependencies locally

```bash
docker run --rm -ti -v "$PWD:/app" -w "/app" --user "$(id -u):$(id -g)" node:10.16.3-alpine npm i
```

after up the server in development mode

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```
