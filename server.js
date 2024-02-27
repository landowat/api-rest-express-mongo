// import http from "http";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "### ALURA - API REST EXPRESS COM MONGO ###",
    "/livros": "Entrei na rota de livros",
    "/autores": "Entreina rota de Autores"
}

// const server = http.createServer((req, res) => {
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
    console.log(`Servidor escutando PORT=[${PORT}]...`);
})