import express from "express";

const app = express();

app.use(express.json());

const livros = [
    { id: 1, "titulo": "Senhor dos Aneis" },
    { id: 2, "titulo": "Harry Potter" }
]

app.get('/', (req, res) => {
    res.status(200).send('Estudo de Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    return res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro foi cadastrado com sucesso.');
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    return res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    return res.send(`Livro ${id} removido com sucesso.`);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app
