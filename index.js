const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ola, Mundo! Me chamo Lucas Costa, sou aluno do curso Tecnico em Desenvolvimento de Sistemas no IFSudesteMG, campus Uba.\n\nMoro em Distrito de Triunfo, uma vila na zona rural que pertence a Candeias do Jamari, Rondonia. Tenho 19 anos.\n\nEstou no terceiro periodo e estou aprendendo a programar em Node.js e criar servidores.\n\nEstamos em processo de finalizacao do curso, realizando as ultimas quatro disciplinas. So gratidao ao IFSudesteMG por todo o aprendizado ate aqui.\n\nObrigado por acessar meu servidor! :)');
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});