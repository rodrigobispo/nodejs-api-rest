import express from "express";

const app =  express();

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "Harry Potter"}
]

app.get('/', (request, response) => {
    response.status(200).send('Estudo de Node');
})

app.get('/livros', (request, response) => {
    response.status(200).json(livros);
})

export default app
