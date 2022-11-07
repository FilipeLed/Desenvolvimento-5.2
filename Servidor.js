// Carrega o modulo HTTP do Node
const servidor = require("http");

const PORTA = process.env.PORT || 8080;
// Cria um servidor HTTP e uma escuta de requisições para a porta 8080
servidor.createServer(function(request, response) {

  // Configura o cabeçalho da resposta com um status HTTP e um Tipo de Conteúdo
    response.writeHead(200, {'Content-Type': 'text/plain'});

   // Manda o corpo da resposta "Olá Mundo"
   response.end("Olá Mundo!");
}).listen(PORTA,()=>{
    // Imprime no console a URL de acesso ao servidor
        console.log(`servidor iniciando na porta ${PORTA}`);
     })

