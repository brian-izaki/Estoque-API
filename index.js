const http = require("http");
const app = require("./config/express")();

require("./config/database")("mongodb+srv://admin:admin@cluster0-twcdj.mongodb.net/estoqueapi?retryWrites=true&w=majority");

http.createServer(app).listen(app.get("port"), function () {
  console.log(`Express Server Escutando na porta ${app.get("port")}`);
});
