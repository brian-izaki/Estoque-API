module.exports = function (app) {
  const controller = app.controllers.produto;

  app.post("/produto", controller.salvarProduto);
}