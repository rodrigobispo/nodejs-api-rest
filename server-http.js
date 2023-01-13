const http = require("http");
const port = 3000;

const rotas = {
    '/': 'Estudo de Node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(rotas[request.url]);
})
server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})
