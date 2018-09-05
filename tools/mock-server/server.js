const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./tools/mock-server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(6969, () => {
    console.log('JSON mock server is running');
})