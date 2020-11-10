const http = require("http");
const app = require("./config/express")();

require("./config/database")("mongodb://127.0.0.1/estoqueapi");

http.createServer(app).listen(app.get("port"), function () {
  console.log(`Express Server Escutando na porta ${app.get("port")}`);
});
