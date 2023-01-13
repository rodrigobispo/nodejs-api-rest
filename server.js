const http = require("http");
const port = 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Estudo de Node');
})
server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})
