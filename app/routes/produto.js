module.exports = function (app) {
  const controller = require('../controller/produto');

  app.post("/produto", controller.salvarProduto);
}