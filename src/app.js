import express from "express";

const app = express();
app.use(express.json());

function getLivro(id) {
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    });
}

const livros = [
    {
        id: 1,
        titulo: 'Hora do Rush'
    },
    {
        id: 2,
        titulo: 'Hora do Rush 2'
    }

];

app.get("/", (req, res) => {
    res.status(200).send("### ALURA - API REST EXPRESS COM MONGO ###");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = getLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).json("Livro cadastrado com suceso.");
});

app.put("/livros/:id", (req, res) => {
    const index = getLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json("Livro modificado com suceso.");
});

app.delete("/livros/:id", (req, res) => {
    const index = getLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com suceso.");
});

export default app;