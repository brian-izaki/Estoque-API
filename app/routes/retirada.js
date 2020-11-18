module.exports = function (app) {
  const controller = app.controllers.retirada;

  app.post('/retirada', controller.salvarRetirada);
  app.get('/retirada', controller.listarRetiradas);
  app.get('/retirada/:id', controller.obtemRetirada);
  app.put('/retirada', controller.alteraRetirada);
  app.delete('/retirada/:id', controller.removeRetirada);
}