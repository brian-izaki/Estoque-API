module.exports = function (app) {
  const controller = app.controllers.retirada;

  app.post('/retirada', controller.salvarRetirada);

}